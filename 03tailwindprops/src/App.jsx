import Card from './Components/Card'

import './App.css'

function App() {

  

  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl'>Tailwind Test</h1><br />
      <Card userName="Gowtham K" btnText="Know Him" img="https://images.pexels.com/photos/1549974/pexels-photo-1549974.jpeg?auto=compress&cs=tinysrgb&w=800"/> <br /> 
      <Card userName="Kruthika K" btnText="Know Her" img="https://images.pexels.com/photos/547557/pexels-photo-547557.jpeg?auto=compress&cs=tinysrgb&w=800"/> <br />
      <Card />
    </>
  )
}

export default App
