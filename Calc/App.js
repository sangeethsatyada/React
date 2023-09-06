import { useState } from 'react';
import './App.css';
function App()
{
  let [number,setNumber]=useState('');
  function clear()
  {
    setNumber('');
  }
  function change(e)
  {
    setNumber((previousNumber)=>previousNumber+e.target.value);
    console.log(e.target.value);
  }
  function get()
  {
    setNumber(eval(number));
  }
  return(
    <center>
      <h3>Calculator</h3>
    <div className="main">
      <input type="text" value={number} style={{backgroundColor:'black',color:'white'}}/><br></br>
      <button className='clear' onClick={clear}>C</button>
      <button>%</button>
      <button className='sa'>+/-</button><br></br>
      <button onClick={change} value="7">7</button>
      <button onClick={change} value="8">8</button>
      <button onClick={change} value="9">9</button>
      <button onClick={change} value="+" className='sa'>+</button><br></br>
      <button onClick={change} value="4">4</button>
      <button onClick={change} value="5">5</button>
      <button onClick={change} value="6">6</button>
      <button onClick={change} value="-" className='sa'>-</button><br></br>
      <button onClick={change} value="1">1</button>
      <button onClick={change} value="2">2</button>
      <button onClick={change} value="3">3</button>
      <button onClick={change} value="*" className='sa'>*</button><br></br>
      <button onClick={change} value="0">0</button>
      <button onClick={change} value=".">.</button>
      <button onClick={change} value="00">00</button>
      <button onClick={change} value="/" className='sa'>/</button><br></br>
      <button onClick={get} value="=" className='eq'>=</button>
    </div>
    </center>
  )
}
export default App;