import styles from './ChooseSide.module.css';
import {THEME_DARK, THEME_LIGHT, useTheme} from "../../../context/ThemeProvider";
import PropTypes from "prop-types";
import lightImg from './img/light.jpg';
import darkImg from './img/dark.jpg';
import cn from "classnames";

const ChooseSideItem = ({theme, text, img, classes}) => {
    const isTheme = useTheme();

    return (
        <div className={cn(styles.item, classes)} onClick={() => isTheme.change(theme)} >
            <div className={styles.item__header}>{text}</div>
            <img className={styles.item__img} src={img} alt={text}/>
        </div>
    )
};

ChooseSideItem.propTypes = {
    onClick: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    classes: PropTypes.string
}

const ChooseSide = () => (
    <div className={styles.container}>
        <ChooseSideItem classes={"item__light"} theme={THEME_LIGHT} text={"Light side"} img={lightImg}/>
        <ChooseSideItem classes={"item__dark"} theme={THEME_DARK} text={"Dark side"} img={darkImg}/>
    </div>
);


export default ChooseSide;
