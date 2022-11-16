import BurgerConstructorStyles from './burger-constructor.module.css';
import {ConstructorElement, Button, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import {mainPropTypes} from '../../utils/check-props';
import Modal from '../modal/modal'
import OrderDetails  from '../order-details/order-details';

function BurgerConstructor({
   items,
   openModal,
   isOrderDetailsModal,
   closeOrderModal,}) {
    const orderId = 11111;

    const bun = items.find(
        (bun) => bun.type === 'bun'
    );
    const ingredients = items.filter(
        (ingredient) => ingredient.type !== 'bun'
    );


    return (
        <>
            <div className={`${BurgerConstructorStyles['constructor-wrap']} pt-25`}>
                <div className={`${BurgerConstructorStyles['constructor-wrap']}`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={bun.name + ' (верх)'}
                        price={bun.price}
                        thumbnail={bun.image}

                    />

                    <ul className={`${BurgerConstructorStyles['items-list-right']}`}>
                        {ingredients.map((ingredient) => {
                            return (
                                <li key={ingredient._id} className={`${BurgerConstructorStyles['constructor-item-wrap']}`}>
                                    <div className={`${BurgerConstructorStyles['drag-icon']}`}>
                                        <DragIcon/>
                                    </div>

                                    <div className={`${BurgerConstructorStyles['constructor-item']}`}>
                                        <ConstructorElement
                                            text={ingredient.name}
                                            price={ingredient.price}
                                            thumbnail={ingredient.image}

                                        />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>


                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={bun.name + ' (низ)'}
                        price={bun.price}
                        thumbnail={bun.image}

                    />
                </div>
            </div>
            <div className={`${BurgerConstructorStyles['bottom-button-block']} pt-10`}>
                <p className="text text_type_digits-medium pr-10">123 <CurrencyIcon type="primary"/></p>
                <Button type="primary" size="medium" htmlType="button" onClick={openModal}>
                    Оформить заказ
                </Button>
            </div>
            {
                isOrderDetailsModal &&
                <Modal onClose={closeOrderModal}>
                    <OrderDetails orderId={orderId} />
                </Modal>
            }
        </>
    )
};
BurgerConstructor.propTypes = {
    items: PropTypes.arrayOf(
        mainPropTypes.isRequired
    ).isRequired,
    openOrderDetails: PropTypes.func,
    isOrderDetailsModal: PropTypes.bool.isRequired,
    closeOrderModal: PropTypes.func.isRequired,

};


export default BurgerConstructor;