import React from 'react';
import './Start.scss';

export default function Start() {
    document.title = 'madlibs';
    return (
        <>
            <header className="start">
                <h1 className='start__title'>Madlibs is a wordy game filled with randomness, created by you. Choose your words wisely</h1>
                <button className='start__button'>
                    <a className="start__link" href="#story">start</a>
                </button>
            </header>

            <div className="start__center">
                <h2 className='start__rules'>Rules</h2>
                <div className='start__rules-container'>
                    <div className='start__rules-container__card'>
                        <img src="https://media.giphy.com/media/ducsQFMyHcdiTeIcuD/giphy.gif" alt="pencil"
                            className="start__rules-container__image" />
                        <h3 className='start__rules-container__title'>
                            You cannot know the whole story beforehand. Neither do we!
                    </h3>
                    </div>
                    <div className='start__rules-container__card'>
                        <img src="https://media.giphy.com/media/11ikeVaUfcXLWM/giphy.gif" alt="empty notepad"
                            className="start__rules-container__image"/>
                        <h3 className='start__rules-container__title'>
                            Fill in the blanks with the correct type of word (noun, verb, adjective, etc.)
                    </h3>
                    </div>
                    <div className='start__rules-container__card'>
                        <img src="https://media.giphy.com/media/fYZi4mJC81JaQ5QmuK/giphy.gif" alt="reveal puzzle"
                            className="start__rules-container__image"/>
                        <h3 className='start__rules-container__title'>
                            The complete story will be revealed at the end, crafted from your choices.
                    </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

