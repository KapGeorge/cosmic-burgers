import React from 'react';
import PropTypes from 'prop-types';
import BurgerItem from '../burger-item/burger-item'
import Modal from '../modal/modal'
import ItemDetails from '../burger-ingredient-item/burger-ingredient-item'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {mainPropTypes} from '../../utils/check-props';

function BurgerIngredients({
	items,
	item,
	closeItemModal,
	setItem,
}) {

	const buns = items.filter(items => items.type === 'bun');
	const sauce = items.filter(items => items.type === 'sauce');
	const main = items.filter(items => items.type === 'main');
	const [current, setCurrent] = React.useState('bun')

	const setTab = (tab) => {
		setCurrent(tab);
		const element = document.querySelector(`#${tab}`);

		if(element) element.scrollIntoView({behavior: 'smooth'});
	};
	return (
		<>
			<h2 className="text text_type_main-large  pb-5 pt-10">
				Соберите бургер
			</h2>
			<div className={'d-flex'}>
				<Tab
					value="bun"
					active={current === 'bun'}
					onClick={setTab}>
					Булки
				</Tab>
				<Tab
					value="sauce"
					active={current === 'sauce'}
					onClick={setTab}>
					Соусы
				</Tab>
				<Tab
					value="main"
					active={current === 'main'}
					onClick={setTab}>
					Начинки
				</Tab>
			</div>
			<div className="items-list mt-10 ">
				<h2 id="bun">Булки</h2>
				<div className="items-grid">
					{buns.map((item, index) =>
						<BurgerItem
							key={index}
							setItem={setItem}
							item={item}/>
					)}
				</div>

				<h2 id="sauce">Соусы</h2>
				<div className="items-grid">
					{sauce.map((item, index) =>
						<BurgerItem
							key={index}
							setItem={setItem}
							item={item}/>
					)}
				</div>
				<h2 id="main">Начинки</h2>
				<div className="items-grid mb-6 ">
					{main.map((item, index) =>
						<BurgerItem
							key={index}
							setItem={setItem}
							item={item}/>
					)}
				</div>
			</div>
			{
				item &&
				<Modal
					onClose={closeItemModal}
					title={"Детали ингредиента"}>
					<ItemDetails item={item}/>
				</Modal>
			}
		</>
	);
}

BurgerIngredients.propTypes = {
	items: PropTypes.arrayOf(
		mainPropTypes.isRequired
	).isRequired,
	setItem: PropTypes.func.isRequired,
	closeItemModal: PropTypes.func.isRequired,

};

export default BurgerIngredients;