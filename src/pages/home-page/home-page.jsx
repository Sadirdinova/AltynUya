import React, { useEffect } from 'react'
import HomeSlider from '../../components/home-slider/home-slider'
import img4 from '../../img/development.png'
import img5 from '../../img/teachingStaff.png'
import contingent from '../../img/contingent.png'
import events from '../../img/events.png'
import './home-page.scss'
import NewsBlock from '../../components/news-block/news-block'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataNews } from '../../redux/news/newsSlice'
import Loader from '../../components/loader/loader'

function HomePage({ data }) {

    const news = useSelector(state => state.newsSlice.news)
    const getLocal = localStorage.getItem('language')

    console.log(news, 'news');

    const dispatch = useDispatch()
    useEffect(() => {
        if (getLocal) {
            dispatch(fetchDataNews(getLocal))
        }
    }, [dispatch, getLocal])


    return (
        <>
            {
                news  ? 
                    <section>
                        {/* <HomeSlider /> */}
                        {
                            news.main_page && news.main_page.map((item, index) => (
                                <div key={index} style={{ display: 'grid', gap: '100px' }}>
                                    <div className='slider-img'>
                                        <img src={`https://edu.altynuya.kg${item.banner}`} alt="" />
                                    </div>
                                    {news.latest_news.length ?
                                        <div className='news-block'>
                                            <div className='news-title'>
                                                <h3>{data.news}</h3>
                                                <NavLink to={'/news'}>{data.allNews}</NavLink>
                                            </div>
                                            <div className='new-items'>
                                                {news.latest_news.length && news.latest_news.map(item => (
                                                    <NewsBlock item={item} key={item.id} />
                                                ))}
                                            </div>
                                        </div>
                                        : ""
                                    }
                                    <div className='about'>
                                        <div className='text'>
                                            <div>
                                                <h3>{item.tagline1}</h3>
                                                <hr />
                                            </div>
                                            <p>{item.tagline1_text}</p>
                                        </div>
                                        <div className='img'>
                                            <img src={`https://edu.altynuya.kg${item.tagline1_image}`} alt="image" />
                                        </div>
                                    </div>
                                    <div className='why about'>
                                        <div className='img'>
                                            <img src={`https://edu.altynuya.kg${item.tagline2_image}`} alt="" />
                                        </div>
                                        <div className='why-text'>
                                            <h3>{item.tagline2}</h3>
                                            <p>{item.tagline2_text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className='home-block'>
                            <div className='items'
                                style={{ background: '#dfe1f0' }}
                            >
                                <div className='text'>
                                    <p>{data.teachingStaff}</p>
                                    <NavLink to={'/teachingStaff'}>{data.all}</NavLink>
                                </div>
                                <div className='img'>
                                    <img src={img5} />
                                </div>
                            </div>
                            <div className='items'
                                style={{ background: '#f3f6ce' }}
                            >
                                <div className='text'>
                                    <p>{data.homeBlockPupils}</p>
                                    <NavLink to={'/contingent'}>{data.all}</NavLink>
                                </div>
                                <div className='img'>
                                    <img src={contingent} />
                                </div>
                            </div>
                            <div className='items'
                                style={{ background: '#e2e3db' }}
                            >
                                <div className='text'>
                                    <p>{data.events}</p>
                                    <NavLink to={'/events'}>{data.all}</NavLink>
                                </div>
                                <div className='img'>
                                    <img src={events} alt='' />
                                </div>
                            </div>
                        </div>
                        {
                            news.model_edu && news.model_edu.map((item, index) => (
                                <div className='model' key={index}>
                                    <h3>{item.model_dev_title}</h3>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <hr />
                                    </div>
                                    <div>
                                        <p>{item.model_dev_text}</p>
                                    </div>
                                    <div className='model-img'>
                                        <img src={`https://edu.altynuya.kg${item.model_dev_image}   `} alt="Model5Q" />
                                    </div>
                                </div>
                            ))
                        }
                        <div className='development'>
                            {
                                news.progression && news.progression.map((item, index) => (
                                    <div className='items-block' key={index}>
                                        <div className='items'>
                                            <div style={{ background: '#ff4880' }}><img src={img4} alt="" /></div>
                                            <h3>{item.prog_title}</h3>
                                            <p>{item.prog_text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='research'>
                            {
                                news.academic_study && news.academic_study.map((item, index) => (
                                    <div className='about research-container' key={index}>
                                        <div className='img'>
                                            <img src={`https://edu.altynuya.kg${item.academic_image}`} alt="pupil" />
                                        </div>
                                        <div className='text'>
                                            <h3>{item.academic_title}</h3>
                                            <hr />
                                            <div>
                                                <p>{item.academic_text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='foreign-language'>
                            {
                                news.language && news.language.map((item, index) => (
                                    <div key={index}>
                                        <h3>{item.lang_title}</h3>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <hr />
                                        </div>
                                    </div>
                                ))
                            }
                            <div className='language-cards'>
                                {
                                    news.language_card && news.language_card.map((item, index) => (
                                        <div className='language-card' key={index}>
                                            <p>{item.lang_card_text}</p>
                                            <div className='language-img'>
                                                <img src={`https://edu.altynuya.kg${item.lang_card_image}`} alt="bridge" />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            {
                                news.language && news.language.map((item, index) => (
                                    <span key={index}>{item.lang_down_title}</span>
                                ))
                            }
                        </div>
                    </section> : <Loader />
            }
        </>
    )
}

export default HomePage