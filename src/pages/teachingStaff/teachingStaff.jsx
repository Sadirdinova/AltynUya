import React, { useEffect, useState } from 'react'
import './teachingStaff.scss'
import { Api } from '../../api'
import Loader from '../../components/loader/loader'

function TeachingStaff({ data }) {

    const [datas, setDatas] = useState([])

    const getDatas = async () => {
        try {
            const response = await Api.get('/teachers/')
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
        <div className='teachingStaff'>
            <h3>{data.teachingStaff}</h3>
            <hr />
            <div className='content'>
                {datas ? datas.map((items) => (
                    <div className='items' key={items.id}>
                        <div className='img'>
                            <img src={items.image} alt="" />
                        </div>
                        <div className='text'>
                            <b>{items.name} {items.surname}</b>
                            <p>{getLocal === 'kg' ? items.job_title_ky : items.job_title_ru}</p>
                        </div>
                    </div>
                )) : <Loader />}
            </div>
        </div>
    )
}

export default TeachingStaff