import styles from './PersonInfo.module.css';
import PropTypes from "prop-types";

const PersonInfo = ({personInfo}) => {
    return (
        <div className={styles.wrapper}>
            {personInfo ? <ul className={styles.list__container}>{
                personInfo.map(({title, data}) => (
                    data ?
                        <li className={styles.list__item} key={title}>
                            <span className={styles.item__title}>{title}</span><span>{data}</span>
                        </li>
                        :
                        <p>No data</p>
                ))
            }</ul> : <p>loading....</p>}
        </div>
    )
};

PersonInfo.propTypes = {
    personInfo: PropTypes.array
}

export default PersonInfo;
