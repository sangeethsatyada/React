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
  useEffect(()=>{
    if(running){
    let timer = setTimeout(() => {
      setSec(sec-1);
      if(sec===0)
      {
        console.log("sec is 0");
        setSec(0);
        mina();
     }
     function mina()
     {
          if (min >= 1) {
            setSec(59);
            setSMin(min - 1);
          }
          if (min === 0) {
            console.log("min is 0");
            setSMin(0);
            hours();
          }
     }
     function hours()
     {
      if(hr>=1)
      {
        setSMin(59);
        setHr(hr-1);
      }
      if(hr===0)
        {
          console.log("hr is 0");
          setHr(0);
        }
     }
    }, 1000);
    console.log(timer);
  }
  if(sec===0 && min===0 && hr===0)
  {
    setSec(0);
    setSMin(0);
    setHr(0);
    console.log('all are checked ok');
      setRunning(false);
  }
  },[running,sec,min,hr]);
  return(
    
    <center style={{position:'absolute',top:"200px",left:"35%"}} className='main'>
      <h1>Set Timer</h1>
      <input type="number" onChange={(e)=>setHr(e.target.value)} placeholder='Enter Hours'/>
      <input type="number" onChange={(e)=>setSMin(e.target.value)} placeholder='Enter Minutes'/>
      <input type="number" onChange={(e)=>setSec(e.target.value)} placeholder='Enter Seconds'/>
    <h1>{hr}<span style={{fontSize:"50px"}}>:</span>{min}<span style={{fontSize:"50px"}}>:</span>{sec}</h1>
    <Button variant="outline-success" onClick={start} disabled={running} >Start</Button>{' '}
    </center>
  )
}
export default App;