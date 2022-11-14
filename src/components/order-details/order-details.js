import PropTypes from 'prop-types'
import OrderDetailsStyles from './order-details.module.css';
import img from '../../images/svg/graphics.svg';

export default function OrderDetails({ orderId }) {
    return (
        <div className={`${OrderDetailsStyles['order-details']} pt-4 pb-15`}>
            <div className={`text_type_digits-large mb-8`}>{ orderId }</div>
            <p className={`text_type_main-medium mb-15 mt-0`}>идентификатор заказа</p>
            <img className={`${OrderDetailsStyles['order-details-img']}`} src={img} alt="заказ готов" />
            <span className={`mt-15`}>Ваш заказ начали готовить</span>
            <span className={`text text_color_inactive mt-2`}>Дождитесь готовности на орбитальной станции</span>
        </div>
    );
};

OrderDetails.propTypes = {
    orderId: PropTypes.number.isRequired,
};
