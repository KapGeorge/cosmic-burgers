import React from 'react';
import PropTypes from 'prop-types';
import {mainPropTypes} from '../../utils/check-props';
import BurgerItem from '../burger-item/burger-item'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredients({items}) {

    const buns = items.filter(items => items['type'] === 'bun');
    const sauce = items.filter(items => items['type'] === 'sauce');
    const main = items.filter(items => items['type'] === 'main');
    const [current, setCurrent] = React.useState('bun')

    return (
        <>
            <h2 className="text text_type_main-large  pb-5 pt-10">
                Соберите бургер
            </h2>
            <div style={{display: 'flex'}}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className="items-list mt-10 ">
                <h2>Булки</h2>
                <div className="items-grid">
                    {buns.map((item, index) => <BurgerItem key={index} item={item}/>)}
                </div>

                <h2>Соусы</h2>
                <div className="items-grid">
                    {sauce.map((item, index) => <BurgerItem key={index} item={item}/>)}
                </div>
                <h2>Начинки</h2>
                <div className="items-grid mb-6 ">
                    {main.map((item, index) => <BurgerItem key={index} item={item}/>)}
                </div>
            </div>
        </>
    );
}

BurgerIngredients.propTypes = {
    items: PropTypes.arrayOf(
        mainPropTypes.isRequired
    ).isRequired,

};

export default BurgerIngredients;