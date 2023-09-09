import React, { useState } from 'react';
import './App.css';
function App()
{
  const names=["sangeeth","satyada","usha","matla","arun","Liam",
  "Noah",
  "Oliver",
  "Elijah",
  "William",
  " James",
  " Benjamin",
  "Lucas",
  "Henry",
  "Alexander",
  "Mason",
  "Michael",
  "Ethan",
  "Daniel",
  "Samuel","Gabriel",
  "Anthony",
  "Isaac",
  "Owen",
  "Christopher",
  "Joshua",
  "Caleb",
  "Dylan",
  "Julian",
  "Isaiah",
  "Eli",
  "Sebastian",
  "Jayden",
  "Lincoln",
  "Adam",
  "Leo",
  "Theodore",
  "Zachary",
  "Nathan",
  "Charles"];
  const [filteredname,setFilteredName]=useState([]);

  let filterednameset;
  function change(e)
  {
    let name=e.target.value;
    filterednameset=names.filter((yes)=>yes.includes(name));
    setFilteredName(filterednameset);
  }
  return(
   <span>
   <h1>Search-Filter</h1>
    <input type="text" onChange={change}/>
    <div>{filteredname.map((san)=><li key={san}>{san}</li>)}</div>
    </span>
  )
}
export default App;