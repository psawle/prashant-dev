import { useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const data = useSelector((state )=> { return state?.myData?.value})
  console.log("mydata",data)
  return (
    <><p>data : {data}</p>
    </>
  )
}

export default App
