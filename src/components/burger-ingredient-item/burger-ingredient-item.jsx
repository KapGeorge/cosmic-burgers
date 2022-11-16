import ItemDetailsStyles from './burger-ingredient-item.module.css';
import {mainPropTypes} from '../../utils/check-props';

export default function ItemDetails({item}) {
	const {
		calories,
		carbohydrates,
		fat,
		image,
		name,
		proteins,
	} = item;
	return (
		<div className={`${ItemDetailsStyles['order-details-group']}`}>
			<img
				className={`${ItemDetailsStyles['order-image']} mb-4`}
				src={image}
				alt={name}/>

			<span className={'text_type_main-medium mb-8'}>{name}</span>

			<ul className={`${ItemDetailsStyles['order-item-info']} text text_color_inactive text_type_main-default`}>
				<li className={`${ItemDetailsStyles['order-add-info']} `}>
					<span>Калории,ккал</span>
					<span>{calories}</span>
				</li>
				<li className={`${ItemDetailsStyles['order-add-info']}`}>
					<span>Белки, г</span>
					<span>{proteins}</span>
				</li>
				<li className={`${ItemDetailsStyles['order-add-info']}`}>
					<span>Жиры, г</span>
					<span>{fat}</span>
				</li>
				<li className={`${ItemDetailsStyles['order-add-info']}`}>
					<span>Углеводы, г</span>
					<span>{carbohydrates}</span>
				</li>
			</ul>
		</div>
	);
};

ItemDetails.propTypes = {
	item: mainPropTypes.isRequired,
};
