import React, { useEffect } from 'react'
import './contingent.scss'
import { Api } from '../../api'
import Loader from '../../components/loader/loader'

function Contingent({ data }) {

    const [datas, setDatas] = React.useState([])

    const getDatas = async () => {
        try {
            const response = await Api.get('/contingent/')
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

        <div className='contingent'>
            <h3>{data.homeBlockPupils}</h3>
            <hr />
            <div className='content'>
                {datas ? datas.map((items) => (
                    <div className='items' key={items.id}>
                        <div className='img'>
                            <img src={items.image} alt="image" />
                        </div>
                        <div className='text'>
                            <b>{items.name}</b>
                            <p>{items.grade}</p>
                            <span>{getLocal === 'kg' ? items.description_ky : items.description_ru}</span>
                        </div>
                    </div>
                )) : <Loader />}
            </div>
        </div>
    )
}

export default Contingent