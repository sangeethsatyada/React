import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
function App()
{
  let [sec,setSec]=useState(0);
  let [min,setSMin]=useState(0);
  let [hr,setHr]=useState(0);
  let [running,setRunning]=useState(false);
  function start()
  {
    setRunning(true);
  }
  function stop()
  {
    setRunning(false);
  }
  useEffect(()=>{
    if(running){
    let timer = setTimeout(() => {
     setSec(sec+1);
     if(sec===59)
     {
      setSMin(min+1);
      setSec(0);
      if(sec<9)
      {
        setSec(`0${sec}`);
      }
     }
     if(min===59)
     {
      setHr(hr+1);
      setSMin(0);
     }
    }, 100);
    console.log(timer);
  }
  if(running===false)
  {
    setSec(sec);
    setSMin(min);
    setHr(hr);
  }
  },[running,sec,min,hr]);
  function reset()
  {
    setSec(0);
    setSMin(0);
    setHr(0);
  }
  return(
    <center style={{position:'absolute',top:"300px",left:"35%"}} className='main'>
    <h1>{hr}<span style={{fontSize:"50px"}}>:</span>{min}<span style={{fontSize:"50px"}}>:</span>{sec}</h1>
    <Button variant="outline-success" onClick={start} disabled={running} >Start</Button>{' '}
    <Button variant="outline-danger" onClick={stop}>Stop</Button>{' '}
    <Button variant="outline-warning" onClick={reset}>Reset</Button>{' '}
    </center>
  )
}
export default App;