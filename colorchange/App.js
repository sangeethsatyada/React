import React, { useState } from 'react';
function App()
{
  let [color,setColor]=useState('');
  function change()
  {
    document.body.style.backgroundColor=color;
  }
  function yes(e)
  {
    color=e.target.value;
    setColor(color);
  }
  return(
    <>
    <input type="text" onChange={yes}/>
    <button onClick={change}>Change</button>
    </>
  )
}
export default App;