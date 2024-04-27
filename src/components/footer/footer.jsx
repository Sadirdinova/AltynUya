import React from 'react'
import './footer.scss'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

function Footer({ data }) {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <NavLink to='/'>© 2024. {data.logo}</NavLink>
                <div className='footer-contacts'>
                    <NavLink target='_blank' to='https://www.google.com/maps/place/572+улица+Фрунзе,+Новопокровка'>{data.address}</NavLink>
                    <NavLink to='tel:+996 500 500 500'>+996 500 500 500</NavLink>
                    <NavLink to='mailto:altynuya.shk21@gmail.com'>altynuya.shk21@gmail.com</NavLink>
                </div>
                <div className='footer-icons'>
                    <NavLink target='_blank' to='#'><FaFacebookF /></NavLink>
                    <NavLink target='_blank' to='#'><FaTwitter /></NavLink>
                    <NavLink target='_blank' to='#'><FaInstagram /></NavLink>
                    <NavLink target='_blank' to='#'><FaYoutube /></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Footer