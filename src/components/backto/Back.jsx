import React from 'react'
import "react-icons"
import { BsArrowLeft, BsArrowBarLeft, BsChevronBarLeft } from 'react-icons/bs'
import "./Back.scss"
import { Link } from 'react-router-dom'

function Back() {
  return (
    <div className='back'>
        <Link to="/"><BsArrowLeft /></Link>
    </div>
  )
}

export default Back