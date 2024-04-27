import React, { useState } from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import { FaHome, FaChevronDown } from "react-icons/fa";
import logo from '../../img/logo.jpg';
import AboutUs from '../submenu/aboutUs';
import ForStudents from '../submenu/forStudents';
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Header({ data, handleLanguage, languages }) {
    const [isHovered, setIsHovered] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [chevron, setChevron] = useState(null)

    const handleMouseEnter = (index) => {
        setIsHovered(isHovered === index ? null : index);
    };

    const handleMouseLeave = (index) => {
        setIsHovered(isHovered === index ? null : index);
    };

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleChevron = (index) => {
        setChevron(index === chevron ? null : index)
    }

    return (
        <header>
            <div className='logo'>
                <NavLink to='/'>
                    <img src={logo} alt="Logo" />
                </NavLink>
            </div>
            <nav>
                <button onClick={handleLanguage}>{languages === 'kg' ? 'KG' : 'RU'}</button>
                <ul>
                    <li><NavLink to='/'><FaHome /></NavLink></li>
                    <div onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                        <li><NavLink to='#'>{data.about}</NavLink></li>
                        {isHovered === 1 && <AboutUs data={data} />}
                    </div>
                    <div onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                        <li><NavLink to='#'>{data.forParents}</NavLink></li>
                        {isHovered === 2 && <ForStudents data={data} />}
                    </div>
                    <li><NavLink to='/news'>{data.news}</NavLink></li>
                    <li><NavLink to='/reception'>{data.reception}</NavLink></li>
                    <li><NavLink to='/gallery'>Галерея</NavLink></li>
                    <li><NavLink to='/accreditation'>Аккредитация</NavLink></li>
                    <li><NavLink to='/contacts'>{data.contacts}</NavLink></li>
                </ul>
            </nav>
            <div className='menu'>
                <button onClick={handleLanguage}>{languages === 'kg' ? 'KG' : 'RU'}</button>
                <IoMdMenu onClick={handleShowMenu} />
                {showMenu && (
                    <>
                        <div className='modal' onClick={handleShowMenu}></div>
                        <div className={`menu-modal ${showMenu ? 'active' : ''}`}>
                            <div className='menu-close'>
                                <IoMdClose onClick={handleShowMenu} />
                            </div>
                            <ul>
                                <li><NavLink to='/'><FaHome /></NavLink></li>
                                <li>
                                    <NavLink to='#'>{data.about}</NavLink>
                                    <FaChevronDown onClick={() => handleChevron(1)} style={chevron === 1 ? { transform: 'rotate(180deg)' } : null} />
                                </li>
                                {chevron === 1 && (
                                    <div>
                                        <NavLink to='/aboutUs'>{data.aboutUs}</NavLink>
                                        <NavLink to='/teachingStaff'>{data.teachingStaff}</NavLink>
                                        <NavLink to='/vacancy'>{data.vacancies}</NavLink>
                                        <NavLink to='/volunteers'>{data.volunteers}</NavLink>
                                        <NavLink to='/events'>{data.events}</NavLink>
                                        <NavLink to='/qualification'>Квалификация</NavLink>
                                        <NavLink to='/cooperation'>{data.cooperation}</NavLink>
                                    </div>
                                )}
                                <li>
                                    <NavLink to='#'>{data.forParents}</NavLink>
                                    <FaChevronDown onClick={() => handleChevron(2)} style={chevron === 2 ? { transform: 'rotate(180deg)' } : null} />
                                </li>
                                {chevron === 2 && (
                                    <div>
                                        <NavLink to='/educationalProcess'>{data.educationalProcess}</NavLink>
                                        <NavLink to='/additionalLessons'>{data.lessons}</NavLink>
                                        <NavLink to='/contingent'>Контингент</NavLink>
                                    </div>
                                )}
                                <li><NavLink to='/news'>{data.news}</NavLink></li>
                                <li><NavLink to='/reception'>{data.reception}</NavLink></li>
                                <li><NavLink to='/gallery'>Галерея</NavLink></li>
                                <li><NavLink to='/accreditation'>Аккредитация</NavLink></li>
                                <li><NavLink to='/contacts'>{data.contacts}</NavLink></li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;