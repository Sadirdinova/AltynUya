import React, { useEffect, useState } from 'react'
import './reseption-page.scss'
import { Api } from '../../api'
import Loader from '../../components/loader/loader'

function ReseptionPage({ data }) {

  const [datas, setDatas] = useState([])

  const getDatas = async () => {
    try {
      const response = await Api.get('/admission/')
      setDatas(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDatas()
  }, [])

  const getLocal = localStorage.getItem('language')

  return (
    <div className='reseptionPage'>
      <h3>{data.reseptionTitle}</h3>
      <hr />
      {(datas ? datas.map(item => {
        return (
          <div className='content' key={item.id}>
            <b>{getLocal === 'kg' ? item.title_head_ky : item.title_head_ru}</b>
            <p>{getLocal === 'kg' ? item.text_head_ky : item.text_head_ru}</p>
            <b>{getLocal === 'kg' ? item.title_ky : item.title_ru}</b>
            <ol>
              <li>{getLocal === 'kg' ? item.text_ky : item.text_ru}</li>
            </ol>
          </div>
        )
      }) : <Loader />)}
    </div>
  )
}

export default ReseptionPage