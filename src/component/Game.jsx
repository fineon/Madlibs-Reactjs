import React from "react";
import "./Start.scss";
import "./Game.scss";
import axios from 'axios';

export default function Game({ story, readStory, audioFile, fullStory, makeSuggestions,suggestions, suggestionsMade, startOver}) {
    console.log(suggestions)
  return (
      <>
    <h1 className="story__title">{story.title}</h1>
    <div id="story" className="story">

      {story.blanks &&<form className="story__form" onSubmit={(event) => readStory(event, story.blanks.length)}>
        
            {story.blanks.map((blank,i) => (
              <div className="story__input">
                <label>Place a {blank} Here:</label>
                <input type="text" name={`word${i}`} placeholder={blank}></input>
                <button type="button" className="story__suggestionBtn" onClick={()=> makeSuggestions(blank)}>Suggestions</button>
              </div>
            ))}

          <div className="story__submit">

            <button type="submit"
              className="start__button story__button"
            >
              Read Me a Story!
            </button>
          </div>
        </form>
      }
        <div className="story__left">
            <div className="story__suggestions">
                {suggestionsMade && <p className="story__suggestions-title">Here are some Suggestions:</p>}
                {suggestions ? suggestions.map(suggestion=><p className="story__suggestions-item">{suggestion}</p>) : <p className="story__suggestions-item">Sorry, We Don't Have Any Suggestions. You are on your Own Buddy!</p>}
            </div>
            <div className="story__output">
                {audioFile && (
                <video controls autoPlay name="media">
                    <source src={audioFile} type="audio/wav"></source>
                </video>
                )}
                <p className="story__full">{fullStory}</p>
            </div>
            <button className="start__button story__button" type="button" onClick={(event)=> startOver(event)}>New Story</button>
        </div>
    </div>

    </>
  );
}
