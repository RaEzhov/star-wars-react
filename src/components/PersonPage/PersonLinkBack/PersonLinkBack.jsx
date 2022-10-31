import {useNavigate} from "react-router-dom";

import iconBack from './img/leftarrow.svg';

import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
    const navigate = useNavigate();

    const handleGoBack = e => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <a className={styles.link} href="#back" onClick={handleGoBack}>
            <img className={styles.link__img} src={iconBack} alt='back arrow'/>
            <span>Go back</span>
        </a>
    )
};

export default PersonLinkBack;
