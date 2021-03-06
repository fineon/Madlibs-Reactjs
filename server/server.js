const express = require('express');
const app=express();
const axios = require('axios');
const path = require('path');

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

const data = require('./data.json');

app.get('/madlibs',(req,res)=>{
    axios.get('http://madlibz.herokuapp.com/api/random?maxlength=15')
      .then(item => {
        //   console.log(item)
          res.send(item.data)
      })
      .catch(error => {
          console.log(error)
      })
});

app.get('/words/:type', (req,res)=>{
    const typeObject=data.find(item=>item.type === req.params.type)
    let randomSample = [];
    if (typeObject){
        const examples = typeObject.examples;
        for (i=0; i<=10;i++){
            randomSample.push(examples[Math.floor(Math.random()*examples.length)]);
        }
        res.json(randomSample)
    }else{
        res.json(null);
    }
});

app.listen(8080, console.log('Listening on port 8080'));