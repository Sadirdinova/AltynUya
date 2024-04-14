import React from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className='logo'>
                Алтын Уя
            </div>
            <nav>
                <ul>
                    <li><NavLink to='#'>Главная</NavLink></li>
                    <li><NavLink to='#'>О нас</NavLink></li>
                    <li><NavLink to='#'>Для родителей</NavLink></li>
                    <li><NavLink to='#'>Уроки классов</NavLink></li>
                    <li><NavLink to='#'>Конкурсы</NavLink></li>
                    <li><NavLink to='#'>О экзаменах</NavLink></li>
                    <li><NavLink to='#'>Тиркемелер</NavLink></li>
                    <li><NavLink to='#'>Галерея</NavLink></li>
                    <li><NavLink to='#'>Контакты</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header