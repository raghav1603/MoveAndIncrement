import "./Grid.css";
import Square from "./Square";
function Grid({ state, setstate }) {
  let handleClick = (e) => {
    let i=state.i
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
    console.log(i,e.keyCode)
    if(i>=0 &&i<9){
    const history = state.square.slice();
    history[i]++;
    setstate({ square: history,i:i });
}
  };
    
  let curr = state;
  let chance=curr.square.every(i=>i===curr.square[0])
  
  return (
    <div className="boardStyle">
        <p>
        {state.i === 0
          ? "click on top left to start and use arrow keys to play"
          : ""}
      </p>
        <div className="board-row rowStyle">
        <Square id="0" turn={curr.square[0]} click={handleClick} disable={chance}/>
        <Square id="1" turn={curr.square[1]} click={handleClick} disable={chance}/>
        <Square id="2" turn={curr.square[2]} click={handleClick} disable={chance}/>
      </div>
      <div className="board-row rowStyle">
        <Square id="3" turn={curr.square[3]} click={handleClick} disable={chance}/>
        <Square id="4" turn={curr.square[4]} click={handleClick} disable={chance}/>
        <Square id="5" turn={curr.square[5]} click={handleClick} disable={chance}/>
      </div>
      <div className="board-row rowStyle">
        <Square id="6" turn={curr.square[6]} click={handleClick} disable={chance}/>
        <Square id="7" turn={curr.square[7]} click={handleClick} disable={chance}/>
        <Square id="8" turn={curr.square[8]} click={handleClick} disable={chance}/>
      </div>
      <p className="instructionsStyle">
        {chance ? "You Win!! click reset to play again" : ""}
      </p>
    </div>
  );
}
export default Grid;
