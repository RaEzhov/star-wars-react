import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {HTTP_PREFIX} from "../../../constants/addresses";

import styles from './SearchPageInfo.module.css';

const SearchPageInfo = ({people}) => (
    <>{
        people.length
            ? (<ul className={styles.list__container}>
                {people.map(({id, name, img}) =>
                    <li key={id} className={styles.list__item}>
                        <Link to={`${HTTP_PREFIX}/people/${id}` }>
                            <img src={img} alt={name} className={styles.person__photo}/>
                            <p className={styles.person__name}>{name}</p>
                        </Link>
                    </li>)}
            </ul>)
            : (<h2 className={styles.person__comment}>No results</h2>)
    }</>
);

SearchPageInfo.propTypes = {
    people: PropTypes.array
};

export default SearchPageInfo;
