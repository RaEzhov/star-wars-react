import {NavLink} from "react-router-dom";

import {HTTP_PREFIX} from "../../constants/addresses";
import styles from './Header.module.css';
import Favorite from "../Favorite";

import rebel from './img/rebel.svg';
import empire from './img/empire.svg';
import {THEME_DARK, THEME_LIGHT, useTheme} from "../../context/ThemeProvider";
import {useEffect, useState} from "react";

const Header = () => {
    const [icon, setIcon] = useState(empire);
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT:
                setIcon(rebel);
                break;
            case THEME_DARK:
                setIcon(empire);
                break;
        }
    }, [isTheme]);
    return(
        <div className={styles.container}>
            <img src={icon}/>
            <ul className={styles.list__container}>
                <li><NavLink to={HTTP_PREFIX + "/home"}>Home</NavLink></li>
                <li><NavLink to={HTTP_PREFIX + "/people/?page=1"}>People</NavLink></li>
                <li><NavLink to={HTTP_PREFIX + "/not-found"}>Not found</NavLink></li>
                <li><Favorite/></li>
            </ul>
        </div>
    )
};

export default Header;
