import PropTypes from 'prop-types';
import ModalStyles from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ModalOverlay} from '../modal-overlay/modal-overlay';
import {useEffect} from 'react';
import {createPortal} from 'react-dom';

const modalPlace = document.querySelector('#modal');

export default function Modal({children, title = '', onClose}) {


	useEffect(() => {
		document.addEventListener('keydown', closeModalEsc);
		return () => document.removeEventListener('keydown', closeModalEsc);

		function closeModalEsc(e) {
			if(e.key === 'Escape') onClose();
		}// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	return createPortal(
		<>
			<div className={`${ModalStyles['modal']} text text_type_main-default pb-15 pl-10 pt-10 pr-10`}>
				<div className={`${ModalStyles['header']}`}>
					<h2 className={`${ModalStyles['title']} text_type_main-large`}>
						{title}
					</h2>
					<button
						className={`${ModalStyles['close']}`}
						onClick={onClose}>
						<CloseIcon type="primary"/>
					</button>
				</div>
				{children}
			</div>
			<ModalOverlay onClose={onClose}/>
		</>,
		modalPlace
	);
};

Modal.propTypes = {
	children: PropTypes.element.isRequired,
	title: PropTypes.string,
	onClose: PropTypes.func.isRequired,
};
