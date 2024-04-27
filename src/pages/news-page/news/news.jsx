import React, { useEffect } from 'react'
import './news.scss'
import { useParams } from 'react-router-dom'
import { Api } from '../../../api'
import Loader from '../../../components/loader/loader'

function News() {

  const { id } = useParams()
  const [data, setData] = React.useState({})

  const getData = async () => {
    try {
      const response = await Api.get(`/news/${id}`)
      setData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [id])

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${day}.${month}.${year}`;
  };

  const getLocal = localStorage.getItem('language')

  return (
    <div className='newsPage'>
      {(data && data.title ?  
        <div>
          <h3>{getLocal === 'kg' ? data.title_ky : data.title_ru}</h3>
          <hr />
          <div className='content'>
            <div>
              <img src={data.image} alt="" />
            </div>
            <p>{getLocal === 'kg' ? data.text_ky : data.text_ru}</p>
            <hr />
            <span>{formatDate(data.created_date)}</span>
          </div>
        </div>
        : <Loader/>
      )}
    </div>
  )
}

export default News