import React, { useEffect, useState } from 'react'
import './volunteers.scss'
import '../news-page/news/news.scss'
import { Api } from '../../api'
import Loader from '../../components/loader/loader'

function Volunteers({ data }) {

  const [datas, setDatas] = useState([])
  const getData = async () => {
    try {
      const response = await Api.get('/volunteering/')
      setDatas(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])


  const getLocal = localStorage.getItem('language')

  return (
    <div className='newsPage volunteers'>
      <h3>{data.volunteers}</h3>
      <hr />
      {datas ? datas.map(item => (
        <div className='content' key={item._id}>
          <h4>{getLocal === 'kg' ? item.title_ky : item.title_ru}</h4>
          <div>
            <img src={item.image} alt="image" />
          </div>
          <p>{getLocal === 'kg' ? item.text_ky : item.text_ru}</p>
          <hr />
          <span>{item.created_date}</span>
        </div>
      )) : <Loader />}
    </div>
  )
}

export default Volunteers