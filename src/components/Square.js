import React from 'react'
import './Grid.css'
function Square({ id, turn, click,disable }) {
    return (
        <button onKeyUp={click} disabled={disable}>
            <div
                id={id}
                className="squareStyle"
            >

                {turn}
            </div>
        </button>
    );
}

export default Square
