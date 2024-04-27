import React, { useState } from 'react'
import './accreditation.scss'
import '../news-page/news/news.scss'
import { useNavigate } from 'react-router-dom'
import { Api } from '../../api'

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
    } else if (value.login === 'accreditation@gmail.com' && value.login === 'secondaccreditation@gmail.com' && value.password === 'dwuxv8gPeLZUeeGYXVDC') {
      errors.logins = 'Неверный логин или пароль';
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await Api.post('/user/login/', { email: value.login, password: value.password })
        if (response.status === 200) {
          navigate('/documents')
          console.log(response.data);
          const { access } = response.data
          localStorage.setItem('token', access)
        }
      } catch (error) {
        console.error('Ошибка отправки данных на сервер:', error)
      }
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
          {errors.logins && <p style={{ color: 'red', fontSize: '12px' }}>{errors.logins}</p>}
          <button onClick={handleSubmit}>{data.accreditationButton}</button>
        </div>
      </div>
    </div>
  )
}

export default Accreditation