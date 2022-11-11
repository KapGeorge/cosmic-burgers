import React from 'react';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerItemStyles from './burger-item.module.css';


function BurgerItem({item}) {

    return (
        <>
            <div className={`${BurgerItemStyles.itemCard} mb-8`}>
                <img src={item.image} alt={item.name}/>
                <p className={`${BurgerItemStyles.price} text text_type_digits-default`}>{item.price}<CurrencyIcon
                    type="primary"/></p>
                <p className={`${BurgerItemStyles.name} text text_type_main-default`}>{item.name}</p>
                <Counter count={1} size="default" extraClass="m-1"/>
            </div>

        </>
    );
}


export default BurgerItem;