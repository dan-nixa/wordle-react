import React from 'react';

function GuessInput({ guess, handleSubmit, handleInput }) {
    return (
        <div>
            <form className="guess-input-wrapper" onSubmit={handleSubmit}>
                <label htmlFor="guess-input">Enter guess:</label>
                <input
                    required
                    minLength={5}
                    maxLength={5}
                    pattern="[a-zA-Z]{5}"
                    id="guess-input"
                    type="text"
                    onChange={handleInput}
                    value={guess}
                    title="5 letter word"
                />
            </form>
        </div>
    );
}

export default GuessInput;
