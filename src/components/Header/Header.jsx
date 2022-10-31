import {NavLink} from "react-router-dom";

import {HTTP_PREFIX} from "../../constants/addresses";
import styles from './Header.module.css';

const Header = () => {
    return(
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink to={HTTP_PREFIX + "/home"}>Home</NavLink></li>
                <li><NavLink to={HTTP_PREFIX + "/people/?page=1"}>People</NavLink></li>
                <li><NavLink to={HTTP_PREFIX + "/not-found"}>Not found</NavLink></li>
            </ul>
        </div>
    )
};

export default Header;
