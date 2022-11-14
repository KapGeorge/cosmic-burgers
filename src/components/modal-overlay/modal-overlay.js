import PropTypes from 'prop-types';
import ModalOverlayStyles from './modal-overlay.module.css';

export function ModalOverlay({ onClose }) {
    return (
        <div className={`${ModalOverlayStyles['overlay']}`} onClick={onClose}></div>
    );
};

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
};