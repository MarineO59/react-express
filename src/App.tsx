import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState<any>(null)
useEffect(() => {
  fetch("http://localhost:3310/api/employees")
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
}, [])


 return (
  <>
    {data && (
      <div>
        <p>{data.results[0].name.first} {data.results[0].name.last}</p>
        <p>{data.results[0].email}</p>
        <img src={data.results[0].picture.medium} />
      </div>
    )}
  </>
)

export default App
