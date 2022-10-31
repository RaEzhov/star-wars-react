import PropTypes from "prop-types";
import cn from 'classnames';

import '../index.css';
import styles from './UIButton.module.css';

const UIButon = ({
                     text,
                     onClick,
                     disabled,
                     theme = 'dark',
                     classes
                 }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(styles.button, styles[theme], classes)}
        >
            {text}
        </button>
    )
};

UIButon.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    text: PropTypes.string,
    theme: PropTypes.string,
    classes: PropTypes.string
}

export default UIButon;
