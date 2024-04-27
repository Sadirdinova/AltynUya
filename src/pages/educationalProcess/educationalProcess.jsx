import React, { useEffect } from 'react'
import './educationalProcess.scss'
import '../news-page/news/news.scss'
import { Api } from '../../api'
import Loader from '../../components/loader/loader'

function EducationalProcess({ data }) {

  const [datas, setDatas] = React.useState([])

  const getDatas = async () => {
    try {
      const response = await Api.get('/areas-work/')
      setDatas(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDatas()
  }, [])

  const getLocal = localStorage.getItem('language')

  return (
    <div className='educationalProcess newsPage'>
      <h3>{data.educationalProcess}</h3>
      <hr />
      {datas ? datas.map((items) => (
        <div className='content' key={items.id}>
          <h4>{getLocal === 'kg' ? items.title_ky : items.title_ru}</h4>
          <p>{getLocal === 'kg' ? items.text_ky : items.text_ru}</p>
        </div>
      )) : <Loader />}
    </div>
  )
}

export default EducationalProcess