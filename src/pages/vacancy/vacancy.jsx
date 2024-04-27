import React, { useEffect, useState } from 'react'
import './vacancy.scss'
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataVacancies } from '../../redux/vacancy/vacancySlice';
import Loader from '../../components/loader/loader';

function Vacancy({ data }) {

    const dispatch = useDispatch()
    const [openItemIndex, setOpenItemIndex] = useState(null)

    const vacancy = useSelector(state => state.vacancySlice.vacancies)
    console.log(vacancy, 'vacancy');

    useEffect(() => {
        dispatch(getDataVacancies())
    }, [dispatch])

    const handleOpen = (index) => {
        setOpenItemIndex(index === openItemIndex ? null : index)
    }

    const getLocal = localStorage.getItem('language')

    return (
        <div className='vacancy'>
            <h3>{data.vacancies}</h3>
            <hr />
            <div className='content'>
                {vacancy ? vacancy.map((items, index) => (
                    <div key={index}>
                        <b onClick={() => handleOpen(index)}>
                            {getLocal === 'kg' ? items.job_title_ky : items.job_title_ru}
                            <FaChevronDown style={openItemIndex === index ? { transform: 'rotate(180deg)' } : null} />
                        </b>
                        {openItemIndex === index && (
                            <div className='accordion'>
                                <div>
                                    <h4>Требования:</h4>
                                    <li>{getLocal === 'kg' ? items.requirements_ky : items.requirements_ru}</li>
                                </div>
                                <div>
                                    <h4>Обязанности:</h4>
                                    <li>{getLocal === 'kg' ? items.duty_ky : items.duty_ru}</li>
                                </div>
                                <div>
                                    <h4>Условия:</h4>
                                    <li>{getLocal === 'kg' ? items.conditions_ky : items.conditions_ru}</li>
                                </div>
                                <span>Если заинтересованы, отправьте свое резюме на почту или на номер:
                                    <NavLink target='_blank' to='https://wa.me/+996777777777'>+996 777 77 77 77</NavLink>
                                    <NavLink target='_blank' to='mailto:altynuya.shk21@gmail.com'>altynuya.shk21@gmail.com</NavLink>
                                </span>
                            </div>
                        )}
                    </div>
                )) : <Loader />}
            </div>
        </div>
    )
}

export default Vacancy