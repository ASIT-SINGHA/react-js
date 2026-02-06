import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter,setCounter]= useState(0);

  function addValue(){
    if (counter < 20) {
      setCounter(++counter)
    }
  }
function removeValue(){
  if (counter> 0) {
    setCounter(--counter)
  }
}
  return (
    <>
     <h1> Continue with React  </h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addValue}>increse</button><br/>
     <button onClick={removeValue}>decrese</button>
    </>
  )
}

export default App

