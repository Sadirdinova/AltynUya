import React, { useEffect } from 'react'
import './news-page.scss'
import './news/news.scss'
import NewsBlock from '../../components/news-block/news-block'
import { fetchDataNew } from '../../redux/news/newsSlice'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/loader/loader'

function NewsPage({ data }) {

  const news = useSelector(state => state.newsSlice.news)
  console.log(news);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDataNew())
  }, [dispatch])

  return (
    <div className='newsPage news '>
      <h3>{data.news}</h3>
      <hr />
      <div className='news-content'>
        {news ? news.map(item => (
          <NewsBlock item={item} key={item.id} />
        )) : <Loader />}
      </div>
    </div>
  )
}

export default NewsPage