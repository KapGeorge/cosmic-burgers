import React from 'react';
import headerStyles from './header.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {

    return (
        <header>
            <div className={`${headerStyles['header']}`}>
                <nav>
                    <ul className={`${headerStyles['navigation-panel']} pb-4 pt-4`}>
                        <li className={` pl-5 pr-5 pb-4 pt-4`}>
                            {/* eslint-disable */}
                            <a href="#" className={`${headerStyles['navigation-element']}`}><BurgerIcon
                                type="primary"/> Конструктор</a>
                            {/* eslint-enable */}
                        </li>
                        <li className={`${headerStyles['navigation-element']} pl-5 pr-5 pb-4 pt-4`}>
                            {/*eslint-disable*/}
                            <a href="#" className={`${headerStyles['navigation-element']}`}><ListIcon
                                type="primary"/> Лента заказов</a>
                            {/* eslint-enable */}
                        </li>
                    </ul>
                </nav>
                <div className={`${headerStyles['logo']}`}>
                    <Logo/>
                </div>

                <nav>
                    <ul className={`${headerStyles['navigation-panel']} pb-4 pt-4`}>
                        <li className={`  mr-0 ml-a`}>
                            {/* eslint-disable */}
                            <a href="#" className={`${headerStyles['navigation-element-right']}`}><ProfileIcon
                                type="primary"/> Личный кабинет</a>
                            { /* eslint-enable */}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}


export default AppHeader;