import React, { useEffect } from 'react'
import '../teachingStaff/teachingStaff.scss'
import { Api } from '../../api'
import Loader from '../../components/loader/loader'

function Qualification() {

    const [data, setData] = React.useState([])

    const getDatas = async () => {
        try {
            const response = await Api.get('/qualifications/')
            setData(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDatas()
    }, [])

    const getLocal = localStorage.getItem('language')

    return (
        <div className='qualification teachingStaff'>
            <h3>Квалификация</h3>
            <hr />
            <div className='content'>
                {data ? data.map((items) => (
                    <div className='items' key={items.id}>
                        <div className='img'>
                            <img src={items.image} alt="image" />
                        </div>
                        <div className='text'>
                            <b>{items.teacher}</b>
                            <p>{getLocal === 'kg' ? items.description_ky : items.description_ru}</p>
                        </div>
                    </div>
                )) : <Loader />}
            </div>
        </div>
    )
}

export default Qualification