import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        <div className='main-div'>
        <h1>Age Calculator</h1>
        <h5>Age Calculator can calculate the age based on your Date of birth</h5>
     
      <div className='div2'>
      <div className='div-dob'>
        <h3>Date of Birth</h3>
        <input className='date-input' type='date'></input>
      <div>
          <button>
        Calculate Age
        </button>
        <button>Reset</button>
      </div>

      </div>
      <div className='div-output'>
        <h3>Your age is : </h3>
        <h2></h2>
      </div>

      </div>
      </div>
       </div>
    </>
  )
}

export default App
