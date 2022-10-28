import React from 'react'
import { useState } from 'react'

const App = ()=>{
  const purple = "purple"
  const [bg,setBg]=useState(purple)
  const [txt,setx]=useState("Click me")
  const bgChange = ()=>{
    let newBg = "red"
    setBg(newBg)
    setx("Ouch 🐵")
  }

  const bgBack = ()=>{
setBg(purple)
setx("Welcome back 👍")
  }
  return (
    <>
    <div style={{backgroundColor:bg}}>
    <button onClick={bgChange} onDoubleClick={bgBack}>{txt}</button>
    </div>

    </>
  )
}

export default App