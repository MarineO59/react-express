import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
useEffect(() => {
  fetch("http://localhost:3310/api/employees")
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
}, [])


  return (
    <>
      <p>Data is {data}</p>
      <p>{JSON.stringify(data)}</p>
    </>
  )
}

export default App
