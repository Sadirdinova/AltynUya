import React from 'react'
import './aboutUs.scss'
import { NavLink } from 'react-router-dom'

function ForStudents({ data }) {
  return (
    <div className='aboutUs'>
        <nav>
            <NavLink to='/educationalProcess'>{data.educationalProcess}</NavLink>
            <NavLink to='/additionalLessons'>{data.lessons}</NavLink>
            <NavLink to='/contingent'>Контингент</NavLink>
        </nav>
    </div>
  )
}

export default ForStudents