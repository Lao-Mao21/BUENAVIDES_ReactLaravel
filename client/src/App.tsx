import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let name: string = "Jonas";
  let age: number = 20;

  //comment
  //embed JS expression

  return (
    <> {/*Fragment*/}
      <h1 className='font-mono font-bold text-3xl bg-clip-text text-transparent bg-linear-to-b from-blue-600 via-sky-500 to-purple-500'>Student Information</h1>
      <p className='font-mono text-xl'>Name: {name}</p>
      <p className='font-mono text-xl'>Age: {age} Years Old</p>
    </>
  )
}
export default App
