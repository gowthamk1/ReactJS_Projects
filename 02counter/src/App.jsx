import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)
  const [upperLimitReached, setUpperLimitReached] = useState(false);
  const [lowerLimitReached, setLowerLimitReached] = useState(false);



  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      setLowerLimitReached(false); 
    } else {
      setUpperLimitReached(true);
    }
  };
  const subtractValue = () => {
    if (counter > 0){
      setCounter(counter - 1);
      setUpperLimitReached(false);
    }
    else{
      setLowerLimitReached(true);
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {counter}</h2>
      <span className="badge rounded-pill text-bg-success" onClick={addValue}>Add</span>
      {upperLimitReached && <p style={{ color: "red" }}>Counter limit reached (20)</p>}
      <br />
      <span className="badge rounded-pill text-bg-danger" onClick={subtractValue}>Subtract</span>
      {lowerLimitReached && <p style={{ color: "red" }}>Counter limit reached (0)</p>}
    </>
  )
}

export default App
