import React, { useEffect } from 'react'
import '../news-page/news-page.scss'
import { Api } from '../../api'
import Loader from '../../components/loader/loader'

function Events({ data }) {

    const [datas, setDatas] = React.useState([])

    const getDatas = async () => {
        try {
            const response = await Api.get('/other-events/')
            setDatas(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDatas()
    }, [])

    const getLocal = localStorage.getItem('language')

    console.log(data, "events");

    return (
        <div className='newsPage'>
            <h3>{data.events}</h3>
            <hr />
            {datas ? datas.map(item => (
                <div className='content' key={item._id}>
                    <h4>{getLocal === 'kg' ? item.title_ky : item.title_ru}</h4>
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                    <p>{getLocal === 'kg' ? item.text_ky : item.text_ru}</p>
                    <hr />
                    <span>{item.created_date}</span>
                </div>
            )) : <Loader />}
        </div>
    )
}

export default Events