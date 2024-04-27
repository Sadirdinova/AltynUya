import React, { useEffect, useState } from 'react'
import './about.scss'
import { Api } from '../../api'
import aboutImage from '../../img/aboutPage.jpeg'
import Loader from '../../components/loader/loader'

function About({ data }) {

    const [datas, setDatas] = useState([])
    const getData = async () => {
        try {
            const response = await Api.get('/about-us/')
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
        <div className='about-page'>
            <h3>{data.aboutUs}</h3>
            <hr />
            {datas ? datas.map(item => (
                <div className='text' key={item.id}>
                    <h4>{getLocal === 'kg' ? item.title_ky : item.title_ru}</h4>
                    <p>{getLocal === 'kg' ? item.text_ky : item.text_ru}</p>
                </div>
            )) : <Loader />}
            <div className='about-mission'>
                <div className='about-img'>
                    <img src={aboutImage} alt="" />
                </div>
                <div className='mission-text'>
                    <div>
                        <b>{data.ourMissionTitle}</b>
                        <p>{data.ourMissionText}</p>
                    </div>
                    <div>
                        <b>{data.ourVisionTitle}</b>
                        <p>{data.ourVisionText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About