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


    const bun = {
        name: 'Краторная булка N-200i',
        price: '1255',
        image: 'https://code.s3.yandex.net/react/code/bun-02.png'
    }


    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end'}}
                 className="pt-25">
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end'}}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={bun.name}
                        price={bun.price}
                        thumbnail={bun.image}

                    />

                    <ul className={`${BurgerConstructorStyles['items-list-right']}`}>
                        {items.map((item, index) => {
                            return (
                                <li key={index} className={`${BurgerConstructorStyles['constructor-item-wrap']}`}>
                                    <div className={`${BurgerConstructorStyles['drag-icon']}`}>
                                        <DragIcon/>
                                    </div>

                                    <div className={`${BurgerConstructorStyles['constructor-item']}`}>
                                        <ConstructorElement
                                            text={item.name}
                                            price={item.price}
                                            thumbnail={item.image}

                                        />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>


                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={bun.name}
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
    isOrderDetailsModal: PropTypes.bool,
    closeOrderModal: PropTypes.func,

};


export default BurgerConstructor;