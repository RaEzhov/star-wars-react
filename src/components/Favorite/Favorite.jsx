import iconFavoritesWhite from './img/favorites-white.svg';
import iconFavoritesBlack from './img/favorites-black.svg';


import styles from './Favorite.module.css';
import {Link} from "react-router-dom";
import {HTTP_PREFIX} from "../../constants/addresses";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useTheme} from "../../context/ThemeProvider";

const Favorite = () => {
    const [count, setCount] = useState(0);
    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        setCount(Object.keys(storeData).length);
    });

    const [icon, setIcon] = useState(iconFavoritesWhite);

    const Theme = useTheme();

    useEffect(() => {
        switch (Theme.theme) {
            case 'dark':
                setIcon(iconFavoritesWhite);
                break;
            case 'light':
                setIcon(iconFavoritesBlack);
                break;
        }
    }, [Theme]);

    return (
        <Link to={HTTP_PREFIX + "/favorites"} className={styles.link}>
            <span className={styles.counter}>{count}</span>
            <img className={styles.icon} src={icon} alt="Favorites"/>
        </Link>
    )
}

export default Favorite;
