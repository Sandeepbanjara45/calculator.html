import React from 'react'
import Poster from './component/Poster'
import './App.css';
import dataApi from './utils/Data.js'

const App = () => {
  const pr = (val) => {
    return (
  
  <Poster imgsrc={val.imgsrc} title={val.title} desc={val.desc}/>
  )
}
  return (
    <>
    <h1 className='text-center bg-secondary text-white productname heading'>Product of cloth Gallary</h1>
      {dataApi.map(pr)}
    </>
  )
}

export default App
