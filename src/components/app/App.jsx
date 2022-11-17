import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import {getIngredients} from '../../utils/API-connect';


function App() {

	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const [item, setItem] = useState(null);
	const [isOrderDetailsModal, setIsOrderDetailsModal] = useState(false);

	function openModal() {
		setIsOrderDetailsModal(true);
	}

	function closeOrderModal() {
		setIsOrderDetailsModal(false);
	}

	function closeItemModal() {
		setItem(null);
	}

	useEffect(() => {
		getIngredients()
			.then((res) => setItems(res.data))
			.catch((err) => console.log(err))
			.finally(() => setIsLoaded(false))
	}, [])

	return (
		<div className="App">
			<AppHeader/>
			{
				!items.length
					?
					<div className="error-items">Загрузка ингредиентов</div>
					:
					<section className="container">
						<div className="content-block mr-10">
							{isLoaded && 'Загрузка...'}
							{!isLoaded &&
							!!items.length &&
							<BurgerIngredients
								items={items}
								item={item}
								closeItemModal={closeItemModal}
								setItem={setItem}
							/>}
						</div>
						<div className="content-block">
							{isLoaded && 'Загрузка...'}
							{!isLoaded &&
							!!items.length &&
							<BurgerConstructor
								items={items}
								openModal={openModal}
								isOrderDetailsModal={isOrderDetailsModal}
								closeOrderModal={closeOrderModal}
							/>}

						</div>
					</section>
			}
		</div>
	);
}

export default App;
