import React, { useEffect, useState } from 'react'
import './cooperation.scss'
import '../news-page/news/news.scss'
import { Api } from '../../api'
import Loader from '../../components/loader/loader'

function Cooperation({ data }) {

    const [datas, setDatas] = useState([])

    const getDatas = async () => {
        try {
            const response = await Api.get('/partnership/')
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
        <div className='cooperation newsPage'>
            <h3>{data.cooperation}</h3>
            <hr />
            {datas ? datas.map(item => (
                <div className="content" key={item.id}>
                    <div className="text">
                        <b>{getLocal === 'kg' ? item.title_ky : item.title_ru}</b>
                        <p>{getLocal === 'kg' ? item.text_ky : item.text_ru}</p>
                    </div>
                </div>
            )) : <Loader />}
        </div>
    )
}

export default Cooperation