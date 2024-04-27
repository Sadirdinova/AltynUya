import React, { useEffect } from 'react'
import HomeSlider from '../../components/home-slider/home-slider'
import img1 from '../../img/img2.jpeg'
import img2 from '../../img/img11.jpeg'
import img3 from '../../img/Model5Q.jpg'
import img4 from '../../img/development.png'
import img5 from '../../img/teachingStaff.png'
import img6 from '../../img/SliderPhotoKg.jpg'
import img7 from '../../img/SliderPhotoRu.jpg'
import contingent from '../../img/contingent.png'
import events from '../../img/events.png'
import model5QRu from '../../img/Model5QRu.jpg'
import research from '../../img/research.jpeg'
import bridge from '../../img/bridge.jpeg'
import ferrisWheel from '../../img/Ferris-wheel.jpeg'
import pupils from '../../img/pupils.jpeg'
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
    console.log(news);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDataNews())
    }, [dispatch])

    const getLocal = localStorage.getItem('language')

    return (
        <>
            {news.length ? <Loader /> :
                <section>
                    {/* <HomeSlider /> */}
                    <div className='slider-img'>
                        <img src={getLocal === 'kg' ? img6 : img7} alt="" />
                    </div>
                    {news.length ?
                        <div className='news-block'>
                            <div className='news-title'>
                                <h3>{data.news}</h3>
                                <NavLink to={'/news'}>{data.allNews}</NavLink>
                            </div>
                            <div className='new-items'>
                                {news.length ? news.map(item => (
                                    <NewsBlock item={item} key={item.id} />
                                )) : ""}
                            </div>
                        </div>
                        : ""
                    }
                    <div className='about'>
                        <div className='text'>
                            <div>
                                <h3>{data.aboutTitle}</h3>
                                <hr />
                            </div>
                            <p>{data.aboutText}</p>
                        </div>
                        <div className='img'>
                            <img src={img2} alt="image" />
                        </div>
                    </div>
                    <div className='why about'>
                        <div className='img'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='why-text'>
                            <h3>{data.whyTitle}</h3>
                            <p>{data.whyText}</p>
                        </div>
                    </div>
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
                                <img src={events} alt=''/>
                            </div>
                        </div>
                    </div>
                    <div className='model'>
                        <h3>{data.modelTitle}</h3>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <hr />
                        </div>
                        <div>
                            <p>{data.firstModelText}</p>
                            <p>{data.secondModelText}</p>
                        </div>
                        <div className='model-img'>
                            <img src={getLocal === 'kg' ? img3 : model5QRu} alt="Model5Q" />
                        </div>
                    </div>
                    <div className='development'>
                        <div className='items-block'>
                            <div className='items'>
                                <div style={{ background: '#ff4880' }}><img src={img4} alt="" /></div>
                                <h3>{data.emotionalDevelopmentTitle}</h3>
                                <p>{data.emotionalDevelopmentText}</p>
                            </div>
                            <div className='items'>
                                <div style={{ background: '#1AB9FF' }}><img src={img4} alt="" /></div>
                                <h3>{data.physicalDevelopmentTitle}</h3>
                                <p>{data.physicalDevelopmentText}</p>
                            </div>
                            <div className='items'>
                                <div style={{ background: '#ff6666' }}><img src={img4} alt="" /></div>
                                <h3>{data.spiritualDevelopmentTitle}</h3>
                                <p>{data.spiritualDevelopmentText}</p>
                            </div>
                        </div>
                        <div className='item-block'>
                            <div className='items'>
                                <div style={{ background: '#ffc000' }}><img src={img4} alt="" /></div>
                                <h3>{data.socialDevelopmentTitle}</h3>
                                <p>{data.socialDevelopmentText}</p>
                            </div>
                            <div className='items'>
                                <div style={{ background: '#abcd52' }}><img src={img4} alt="" /></div>
                                <h3>{data.mentalDevelopmentTitle}</h3>
                                <p>{data.mentalDevelopmentText}</p>
                            </div>
                        </div>
                    </div>
                    <div className='research'>
                        <div className='about research-container'>
                            <div className='img'>
                                <img src={research} alt="pupil" />
                            </div>
                            <div className='text'>
                                <h3>{data.researchTitle}</h3>
                                <hr />
                                <div>
                                    <p>{data.firstResearchText}</p>
                                    <p>{data.secondResearchText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foreign-language'>
                        <h3>{data.foreignLanguageTitle}</h3>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <hr />
                        </div>
                        <div className='language-text'>
                            <p>{data.firstForeignLanguageText}</p>
                            <p>{data.secondForeignLanguageText}</p>
                            <p>{data.thirdForeignLanguageText}</p>
                        </div>
                        <div className='language-img'>
                            <div>
                                <img src={bridge} alt="bridge" />
                            </div>
                            <div>
                                <img src={ferrisWheel} alt="Ferris-wheel" />
                            </div>
                            <div>
                                <img src={pupils} alt="pupils" />
                            </div>
                        </div>
                        <span>{data.fourthForeignLanguageText}</span>
                    </div>
                </section>
            }
        </>
    )
}

export default HomePage