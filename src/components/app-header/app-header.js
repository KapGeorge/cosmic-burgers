import React from 'react';
import headerStyles from './header.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
    const navigationElement = `${headerStyles.navigationElement} pl-5 pr-5 pb-4 pt-4`
    const navigationElementRight = `${navigationElement} mr-0 ml-a`
    const navigationPanel = `${headerStyles.navigationPanel} pb-4 pt-4`
    return (
        <header>
            <div className={headerStyles.header}>
                <nav>
                    <ul className={navigationPanel}>
                        <li className={navigationElement}>
                            <BurgerIcon type="primary"/> Конструктор
                        </li>
                        <li className={navigationElement}>
                            <ListIcon type="primary"/> Лента заказов
                        </li>
                    </ul>
                </nav>
                <div className={headerStyles.logo}>
                    <Logo />
                </div>

                <nav>
                    <ul className={navigationPanel}>
                        <li className={navigationElementRight} >
                            <ProfileIcon type="primary"/> Личный кабинет
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}


export default AppHeader;