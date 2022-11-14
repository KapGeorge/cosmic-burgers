import React from 'react';
import headerStyles from './header.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {

    return (
        <header>
            <div className={`${headerStyles['header']}`}>
                <nav>
                    <ul className={`${headerStyles['navigation-panel']} pb-4 pt-4`}>
                        <li className={`${headerStyles['navigation-element']} pl-5 pr-5 pb-4 pt-4`}>
                            <BurgerIcon type="primary"/> Конструктор
                        </li>
                        <li className={`${headerStyles['navigation-element']} pl-5 pr-5 pb-4 pt-4`}>
                            <ListIcon type="primary"/> Лента заказов
                        </li>
                    </ul>
                </nav>
                <div className={`${headerStyles['logo']}`}>
                    <Logo/>
                </div>

                <nav>
                    <ul className={`${headerStyles['navigation-panel']} pb-4 pt-4`}>
                        <li className={`${headerStyles['navigation-element-right']} mr-0 ml-a`}>
                            <ProfileIcon type="primary"/> Личный кабинет
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}


export default AppHeader;