import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {HTTP_PREFIX} from "../../../constants/addresses";

import styles from './PeopleNavigation.module.css';
import UIButon from "../../UI/UIButton";

const PeopleNavigation = ({
                              getResource,
                              prevPage,
                              nextPage,
                              counterPage
                          }) => {
    const handleChangePrev = () => getResource(prevPage);
    const handleChangeNext = () => getResource(nextPage);

    return (
        <div className={styles.container}>
            <Link to={`${HTTP_PREFIX}/people/?page=${counterPage - 1}`} className={styles.link}>
                <UIButon text={"Previous"} onClick={handleChangePrev} disabled={!prevPage} />
            </Link>
            <p className={styles.pageNumber}>{counterPage}</p>
            <Link to={`${HTTP_PREFIX}/people/?page=${counterPage + 1}`} className={styles.link}>
                <UIButon text={"Next"} onClick={handleChangeNext} disabled={!nextPage}/>
            </Link>
        </div>
    )
};

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number
}

export default PeopleNavigation;
