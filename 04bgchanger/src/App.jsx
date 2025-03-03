import { useState, useEffect } from "react";

function App() {
  const [bgColor,setBgColor]=useState("beige")

  useEffect(() => {
    document.body.style.backgroundColor = bgColor; // Forcefully apply background color
  }, [bgColor]);

  return (
      <div className="w-full h-screen duration-200 flex items-center justify-center" style={{ backgroundColor: `${bgColor} !important` }}> 
        <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
          <div className="flex flex-wrap gap-3 shadow-lg bg-amber-50 px-3 py-2 rounded-3xl">
            <button onClick={()=>setBgColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setBgColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setBgColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setBgColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={()=>setBgColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={()=>setBgColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={()=>setBgColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
            <button onClick={()=>setBgColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>
            <button onClick={()=>setBgColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}>White</button>
          </div>
        </div>
      </div>
  )
}

export default App
