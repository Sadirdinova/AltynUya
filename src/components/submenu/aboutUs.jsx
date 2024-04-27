import { NavLink } from "react-router-dom";
import './aboutUs.scss'

function AboutUs({ data }) {
    return (
        <div className='aboutUs'>
            <nav>
                <NavLink to='/aboutUs'>{data.aboutUs}</NavLink>
                <NavLink to='/teachingStaff'>{data.teachingStaff}</NavLink>
                <NavLink to='/vacancy'>{data.vacancies}</NavLink>
                <NavLink to='/volunteers'>{data.volunteers}</NavLink>
                <NavLink to='/events'>{data.events}</NavLink>
                <NavLink to='/qualification'>Квалификация</NavLink>
                <NavLink to='/cooperation'>{data.cooperation}</NavLink>
            </nav>
        </div>
    );
}

export default AboutUs;