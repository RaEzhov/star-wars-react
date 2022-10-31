import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

import {getAPIResource} from "../../utils/network";
import {API_PERSON} from "../../constants/api";
import {withErrorAPI} from "../../hoc/withErrorAPI";
import {getPeopleImage} from "../../services/getPeopleData";
import PersonPhoto from "../../components/PersonPage/PersonPhoto";
import PersonInfo from "../../components/PersonPage/PersonInfo";

import styles from './PersonPage.module.css';
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack";

const PersonPage = ({setErrorAPI}) => {
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);

    const id = useParams().id;
    useEffect(() => {
        (async () => {
            const res = await getAPIResource(API_PERSON + id + '/');
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
            }
            setErrorAPI(!res);
        })();
    }, [id, setErrorAPI]);

    return (
        <>
            <PersonLinkBack/>
            <div className={styles.wrapper}>

                <span className={styles.person__name}>{personName}</span>
                <div className={styles.info__container}>
                    <PersonPhoto personPhoto={personPhoto} personName={personName}/>
                    <PersonInfo personInfo={personInfo}/>
                </div>
            </div>
        </>
    )
};

PersonPage.propTypes = {
    setErrorAPI: PropTypes.func
}

export default withErrorAPI(PersonPage);
