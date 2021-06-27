import { useState } from 'react';
import './App.css';
import Grid from './components/Grid'
function App() {
  let testArr = [1, 0, 1, 0, 0, 0, 0, 0, 0];
  let initialstate = { square: testArr ,i:0};
  const [state, setstate] = useState(initialstate);
  // console.log(state.square.every(i=>i===state.square[0]))
  //  console.log(state.square)
  return (
    <div className="App">
      <button onClick={() => setstate(initialstate)}>Reset</button>
      <Grid state={state} setstate={setstate} />
    </div>
  );
}

export default App;
