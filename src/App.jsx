import { useState } from 'react'
import './App.css'

function App() {
  const [number, set_number] = useState(0)

  const increment=()=>{
    set_number(number+1)
  }

<<<<<<< HEAD
=======

>>>>>>> 9a94c8688075a22858deebae1d6e5b6c5504fb96
  const decrement=()=>{
    if(number>0) set_number(number-1)
  }

  const reset=()=>{
    set_number(0)
  }

<<<<<<< HEAD
  
  return (
    <>
      <div>
        <h1>COUNTER APP</h1>
        <div className="count">
             {number}
        </div>
     
        <br></br>
        
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>RESET</button>
        

       </div>
    </>
=======
  return (
    
    <div>
      <h1>COUNTER APP</h1>
      <br></br>
      {number}
      <br></br>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>RESET</button>
    </div> 
    
    
>>>>>>> 9a94c8688075a22858deebae1d6e5b6c5504fb96
  )
}

export default App
