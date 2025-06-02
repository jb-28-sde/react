import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [data, setData] = useState(0);

  fetch("https://fakestoreapi.com/products").then((res)=>res.json())
  .then((val)=>console.log(val))
  .catch((error)=>console.log(error="data not found"))



  return (
    <>
      <h1>Hooks</h1>
      <p>usestate</p>
      <p>useeffect</p>
      <p>useref</p>
      <p>usememo</p>
      <p>usecallback</p>
    </>
  )
}

export default App
