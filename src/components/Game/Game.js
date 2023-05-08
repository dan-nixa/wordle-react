import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
    const [guessList, setGuessList] = React.useState([]);
    const [guess, setGuess] = React.useState('');

    const answer = React.useCallback(sample(WORDS), []);

    console.log({ answer });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ guess });
        setGuess('');
        setGuessList((guessList) => [...guessList, checkGuess(guess, answer)]);
    };

    const handleInput = (event) => {
        setGuess(event.target.value.toUpperCase());
    };

    return (
        <div>
            <GuessResults guesses={guessList} />
            <GuessInput
                guess={guess}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default Game;
