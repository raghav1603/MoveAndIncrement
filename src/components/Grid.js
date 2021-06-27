import "./Grid.css";
import Square from "./Square";
function Grid({ state, setstate }) {
    console.log('render')
    let i=0
  let handleClick = (e) => {
    // const i = parseInt(e.target.id);
    switch (e.keyCode) {
        case 37:
            i=i-1
            break;
    
        case 38:
            i=i-3
            break;
    
        case 39:
            i=i+1
            break;
    
        case 40:
            i=i+3
            break;
    
        default:
            return
    }

    const history = state.square.slice();
    history[i]++;
    setstate({ square: history });
  };
    
  let curr = state;
  // console.log(curr[0].square)
  return (
    <div className="boardStyle">
      <div className="board-row rowStyle">
        <Square id="0" turn={curr.square[0]} click={handleClick} />
        <Square id="1" turn={curr.square[1]} click={handleClick} />
        <Square id="2" turn={curr.square[2]} click={handleClick} />
      </div>
      <div className="board-row rowStyle">
        <Square id="3" turn={curr.square[3]} click={handleClick} />
        <Square id="4" turn={curr.square[4]} click={handleClick} />
        <Square id="5" turn={curr.square[5]} click={handleClick} />
      </div>
      <div className="board-row rowStyle">
        <Square id="6" turn={curr.square[6]} click={handleClick} />
        <Square id="7" turn={curr.square[7]} click={handleClick} />
        <Square id="8" turn={curr.square[8]} click={handleClick} />
      </div>
    </div>
  );
}
export default Grid;
