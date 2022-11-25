import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import React, {useEffect, useState, Suspense} from "react";

import {getAPIResource} from "../../utils/network";
import {API_PERSON} from "../../constants/api";
import {withErrorAPI} from "../../hoc/withErrorAPI";
import {getPeopleImage} from "../../services/getPeopleData";
import PersonPhoto from "../../components/PersonPage/PersonPhoto";
import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack";

import styles from './PersonPage.module.css';
import UILoading from "../../components/UI/UILoading";
import {useSelector} from "react-redux";
import {useTheme} from "../../context/ThemeProvider";

const PersonFilms = React.lazy(() => import("../../components/PersonPage/PersonFilms"));

const PersonPage = ({setErrorAPI}) => {
    const [personID, setPersonID] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    const storeData = useSelector(state => state.favoriteReducer);

    const id = useParams().id;
    useEffect(() => {
        (async () => {
            const res = await getAPIResource(API_PERSON + id + '/');

            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

            setPersonID(id);

            if (res) {
                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));
                setPersonInfo([
                    {title: 'Birth year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair color', data: res.hair_color},
                    {title: 'Skin color', data: res.skin_color},
                    {title: 'Eye color', data: res.eye_color},
                ]);
                if (res.films.length) setPersonFilms(res.films);
            }
            setErrorAPI(!res);
        })();
    }, [id, setErrorAPI]);

    const Theme = useTheme();

    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        setTheme(Theme.theme);
    }, [Theme]);
    return (
        <>
            <PersonLinkBack/>
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.info__container}>
                    <PersonPhoto
                        personPhoto={personPhoto}
                        personName={personName}
                        personID={personID}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}/>
                    {personInfo && <PersonInfo personInfo={personInfo}/>}
                    {personFilms && (
                        <Suspense fallback={<UILoading color={theme}/>}>
                           <PersonFilms personFilms={personFilms} />
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    )
};

PersonPage.propTypes = {
    setErrorAPI: PropTypes.func
}

export default withErrorAPI(PersonPage);
