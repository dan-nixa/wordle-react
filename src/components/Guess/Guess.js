import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
    return (
        <p className="guess">
            {range(5).map((num) => {
                const cellStatus = guess ? guess[num].status : undefined;
                return (
                    <span className={`cell ${cellStatus}`} key={num}>
                        {guess ? guess[num].letter : undefined}
                    </span>
                );
            })}
        </p>
    );
}

export default Guess;
