import React from 'react'
import './Grid.css'
function Square({id,turn,click}) {
    return (
        <button onKeyUp={click}>
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
