import React, { useEffect } from 'react'
import './news-block.scss'
import '../../pages/news-page/news/news.scss'
import { NavLink } from 'react-router-dom'

function NewsBlock({ item, key }) {

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${day}.${month}.${year}`;
  };

  const getLocal = localStorage.getItem('language')

  return (
    <>
      <div className='news-items' key={key}>
        <NavLink to={`/newsPage/${item.id}`}>
          <img src={item.image} alt="image" />
          <div>
            <p>{getLocal === 'kg' ? item.title_ky : item.title_ru}</p>
            <hr />
            <span>{formatDate(item.created_date)}</span>
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default NewsBlock