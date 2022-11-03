import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

import styles from './PersonFilms.module.css';
import {changeHTTP, makeConcurrentRequest, toRomanSystem} from "../../../utils/network";
import {HTTP_PREFIX} from "../../../constants/addresses";


const PersonFilms = ({personFilms}) => {
    const [filmsNames, setFilmsNames] = useState([]);

    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms.map(filmUrl => changeHTTP(filmUrl));
            const response = await makeConcurrentRequest(filmsHTTPS);
            setFilmsNames(response);
        })();
    }, []);
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {filmsNames.sort((lhs, rhs) => lhs.episode_id - rhs.episode_id).map(({title, episode_id}) => {
                    return <li key={episode_id} className={styles.list__item}>
                        <Link to={HTTP_PREFIX + `/episode_crawl/${episode_id}`} className="btn">Episode {toRomanSystem(episode_id)} - {title}</Link>
                    </li>
                })}
            </ul>
        </div>
    )
};

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}

export default PersonFilms;
