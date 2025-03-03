import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("") 

  //Button colors(tailwind properties were not working properly)
  const [copyButtonColor, setCopyButtonColor] = useState("blue");
  const [generateButtonColor, setGenerateButtonColor] = useState("green");


  //USE REF
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 15)
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+~`|}{[]:;?><,./-="

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])
  
  return(
    <>
    <div className= 'border-2 border-black bg-gray-500 rounded-md p-10'>
      <h1 className='text-yellow-200 font-bold text-center font-bold '>PASSWORD GENERATOR</h1>
      <div className=' border-2 border-black w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 bg-gray-400 text-orange-700 '>
        <div className='border-2 border-black flex gap-x-2 shadow rounded-lg overflow-hidden  bg-gray-300 mb-4 items-center p-2'>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-blue-700"
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button className="text-white px-4 py-2 rounded-md shadow-md flex-1" style={{ backgroundColor: copyButtonColor }} onClick={copyPasswordToClipboard}>
            Copy
          </button>
          <button className="text-white px-4 py-2 rounded-md shadow-md flex-1" style={{ backgroundColor: generateButtonColor }} onClick={passwordGenerator}>
            Generate Again
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={15} value={length} className='cursor-pointer ' onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>
          <div className='flexitems-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {setNumberAllowed((prev) => !prev)}}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={() => {setCharAllowed((prev) => !prev)}}/>
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
    </>
  )

}

export default App
