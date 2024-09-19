import React, { useState } from 'react'
import './accreditation.scss'
import '../news-page/news/news.scss'
import { useNavigate } from 'react-router-dom'
import { Api } from '../../api'
import Documents from '../documents/documents'

function Accreditation({ data }) {

  const [errors, setErrors] = useState({});
  const [value, setValue] = useState({
    login: '',
    password: ''
  })
  const navigate = useNavigate()

  const handleSubmit = async () => {
    const errors = {};
    if (!value.login) {
      errors.login = 'Поле обязательно для заполнения';
    }
    if (!value.password) {
      errors.password = 'Поле обязательно для заполнения';
    }

    try {
      const response = await Api.post('/user/login/', { email: value.login, password: value.password })
      if (response.status === 200) {
        navigate('/documents')
        console.log(response);
        const { refresh } = response.data
        localStorage.setItem('token', refresh)
      }
      //  else if (response.status === 401) {
      //   setErrors({ login: 'Неверный логин или пароль', password: 'Неверный логин или пароль' })
      // }
    } catch (error) {
      console.error('Ошибка отправки данных на сервер:', error)
    }
  }

  return (
    <div className='accreditation newsPage'>
      <h3> Аккредитация</h3>
      <hr />
      <div className='content'>
        <b>{data.accreditationText}</b>
        <div className='form'>
          {errors.login && <p style={{ color: 'red', fontSize: '12px' }}>{errors.login}</p>}
          <input type="text" placeholder='Логин' onChange={(e) => setValue({ ...value, login: e.target.value })} />
          {errors.password && <p style={{ color: 'red', fontSize: '12px' }}>{errors.password}</p>}
          <input type="password" placeholder='Пароль' onChange={(e) => setValue({ ...value, password: e.target.value })} />
          {/* {errors.login && <p style={{ color: 'red', fontSize: '12px' }}>{errors.login}</p>} */}
          <button onClick={handleSubmit}>{data.accreditationButton}</button>
        </div>
      </div>
    </div>
  )
}

export default Accreditation