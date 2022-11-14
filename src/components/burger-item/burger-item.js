import React from 'react';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerItemStyles from './burger-item.module.css';
import PropTypes from "prop-types";


function BurgerItem({item,setItem}) {
    const { name, image, price, counter } = item;
    function handleItem() {
        setItem(item);
    };
    return (
        <>
            <div className={`${BurgerItemStyles['item-card']} mb-8`} onClick={handleItem}>
                <img src={image} alt={name}/>
                <p className={`${BurgerItemStyles['price']} text text_type_digits-default`}>{price}<CurrencyIcon
                    type="primary"/></p>
                <p className={`${BurgerItemStyles['name']} text text_type_main-default`}>{name}</p>
                <Counter count={counter} size="default" extraClass="m-1"/>
            </div>

        </>
    );
}
BurgerItem.propTypes = {
    item: PropTypes.object,
    setItem: PropTypes.func,

};

export default BurgerItem;