import React, { useState } from 'react'
import './contacts-page.scss'
import { NavLink } from 'react-router-dom'
import { Api } from '../../api'

function ContactsPage({ data }) {

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [value, setValue] = useState({
    name: '',
    email: '',
    phone: '',
    discription: ''
  })

  const onSubmit = async (e, contactData) => {
    const errors = {};
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(contactData.email)) {
      errors.email = 'Некорректная почта';
    }
    setErrors(errors);
    e.preventDefault();
    const contactDatas = {
      full_name: contactData.name,
      email: contactData.email,
      phone: contactData.phone,
      message: contactData.discription
    }

    if (Object.keys(errors).length === 0) {
      try {
        await Api.post('/contact-us/', contactDatas)
        setLoading(true)
        setSubmit(true)
        console.log('success');
      } catch (error) {
        console.error('Ошибка отправки данных на сервер:', error);
      }
    }
    console.log(contactDatas);
  }

  return (
    <div className='contactsPage'>
      <h3>Биз менен байланышуу</h3>
      <hr />
      <div className='content'>
        <div className='contacts'>
          <div>
            <b>Байланыш маалыматтары</b>
            <hr />
          </div>
          <span>Адрес:<NavLink target='_blank' to='https://www.google.com/maps/place/572+улица+Фрунзе,+Новопокровка'>Бишкек шаары, Новопокровка айылы, Фрунзе көчөсү 572/1</NavLink></span>
          <span>Тел:<NavLink to='tel:+996 500 500 500'>+996 500 500 500</NavLink></span>
          <span>Почта:<NavLink to='mailto:altynuya.shk21@gmail.com'>altynuya.shk21@gmail.com</NavLink></span>
        </div>
        <div className='forma'>
          <div>
            <b>Кайтарым байланыш</b>
            <hr />
          </div>
          <form action="">
            <input type="text" placeholder='ФИО *'
              onChange={(e) => setValue(value => ({ ...value, name: e.target.value }))}
            />
            <input type="email" id="" placeholder='Электронная почта *'
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
            {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email}</p>}
            <input type="phone" placeholder="Телефон *"
              onChange={(e) => setValue({ ...value, phone: e.target.value })}
            />
            <textarea name="" id="" cols="30" rows="10" placeholder='Сообщение'
              onChange={(e) => setValue({ ...value, discription: e.target.value })}
            ></textarea>
            <span>* - обязательное поле</span>
            <button
              onClick={(e) => onSubmit(e, value)}
              disabled={!value.name || !value.phone || errors.email}
              style={value.name && value.phone && value.email ? { background: '#0b4596' } : { background: 'red' }}
            >
              {loading ? 'Отправить' : 'Загрузка...' && submit ? 'Отправлено' : 'Отправить'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage