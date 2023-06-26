import logo from './logo.svg';
 import './App.css';
import Student from './Student';
import { useState } from 'react';


function App() {
 
  //state
  const [name,setName]=useState("Raji");
  const [email,setEmail]=useState("raji@gmail.com")
   function updateData()
  {
    setName("Anu");
    setEmail("anu@gmail.com");
  } 

  return (
    <div className='App'>
   {/* <h1>{data}</h1> */}

   <Student name={name} email={email}/>
<button onClick={updateData}>Update Name</button>
   </div>
  );
}

export default App;
