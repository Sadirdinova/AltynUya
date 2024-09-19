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
                <button onClick={handleLanguage}>{languages === 'ky' ? 'KG' : 'RU'}</button>
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
                <button onClick={handleLanguage}>{languages === 'ky' ? 'KG' : 'RU'}</button>
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
                                    {data.about}
                                    <FaChevronDown onClick={() => handleChevron(1)} style={chevron === 1 ? { transform: 'rotate(180deg)' } : null} />
                                </li>
                                {chevron === 1 && (
                                    <div>
                                        <NavLink to='/aboutUs' onClick={handleShowMenu}>{data.aboutUs}</NavLink>
                                        <NavLink to='/teachingStaff' onClick={handleShowMenu}>{data.teachingStaff}</NavLink>
                                        <NavLink to='/vacancy' onClick={handleShowMenu}>{data.vacancies}</NavLink>
                                        <NavLink to='/volunteers' onClick={handleShowMenu}>{data.volunteers}</NavLink>
                                        <NavLink to='/events' onClick={handleShowMenu}>{data.events}</NavLink>
                                        <NavLink to='/qualification' onClick={handleShowMenu}>Квалификация</NavLink>
                                        <NavLink to='/cooperation' onClick={handleShowMenu}>{data.cooperation}</NavLink>
                                    </div>
                                )}
                                <li>
                                    {data.forParents}
                                    <FaChevronDown onClick={() => handleChevron(2)} style={chevron === 2 ? { transform: 'rotate(180deg)' } : null} />
                                </li>
                                {chevron === 2 && (
                                    <div>
                                        <NavLink to='/educationalProcess' onClick={handleShowMenu}>{data.educationalProcess}</NavLink>
                                        <NavLink to='/additionalLessons' onClick={handleShowMenu}>{data.lessons}</NavLink>
                                        <NavLink to='/contingent' onClick={handleShowMenu}>Контингент</NavLink>
                                    </div>
                                )}
                                <li><NavLink to='/news' onClick={handleShowMenu}>{data.news}</NavLink></li>
                                <li><NavLink to='/reception' onClick={handleShowMenu}>{data.reception}</NavLink></li>
                                <li><NavLink to='/gallery' onClick={handleShowMenu}>Галерея</NavLink></li>
                                <li><NavLink to='/accreditation' onClick={handleShowMenu}>Аккредитация</NavLink></li>
                                <li><NavLink to='/contacts' onClick={handleShowMenu}>{data.contacts}</NavLink></li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;