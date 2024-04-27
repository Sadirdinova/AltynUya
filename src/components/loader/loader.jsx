import React from 'react'
import './loader.scss'
import logo from '../../img/logoLoader.png'

function Loader() {
  return (
    <div className='loader'>
        <img src={logo} alt="" />
    </div>
  )
}

export default Loader