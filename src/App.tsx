import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import AppHeader from './components/app-header/app-header'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients'
import BurgerConstructor from './components/burger-constructor/burger-constructor'


function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [item, setItem] = useState(null);
    const url = 'https://norma.nomoreparties.space/api';
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
        fetch(`${url}/ingredients`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(false);
                    setItems(result['data']);
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            )
    }, [])

    return (
        <div className="App">
            <AppHeader/>
            <section className="container">
                <div className="content-block mr-10">
                    {isLoaded && 'Загрузка...'}
                    {error && 'Произошла ошибка'}
                    {!isLoaded &&
                    !error &&
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
                    {error && 'Произошла ошибка'}
                    {!isLoaded &&
                    !error &&
                    !!items.length &&
                    <BurgerConstructor
                        items={items}
                        openModal={openModal}
                        isOrderDetailsModal={isOrderDetailsModal}
                        closeOrderModal={closeOrderModal}
                    />}

                </div>
            </section>
            <div id='modal' />
        </div>
    );
}

export default App;
