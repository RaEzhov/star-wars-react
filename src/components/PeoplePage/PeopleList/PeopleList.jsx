import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import styles from './PeopleList.module.css';
import {HTTP_PREFIX} from "../../../constants/addresses";

const PeopleList = ({people}) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({id, name, img}) => {
                return (<li key={id} className={styles.list__item}>
                    <Link to={HTTP_PREFIX + `/people/${id}`}>
                        <img src={img} alt={name} className={styles.person__photo}/>
                        <p>{name}</p>
                    </Link>
                </li>)
            })}
        </ul>
    )
};

PeopleList.propTypes = {
    people: PropTypes.array
};

export default PeopleList;
