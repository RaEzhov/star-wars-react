import {useLocation} from "react-router-dom";

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {

    let location = useLocation();

    return (
        <>
            <h1 className={'header__text'}>Not found</h1>
            <p>No match for <u>{location.pathname}</u></p>
        </>
    )
};

export default NotFoundPage;
