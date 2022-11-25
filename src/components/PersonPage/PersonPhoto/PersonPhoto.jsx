import PropTypes from "prop-types";
import {useDispatch} from "react-redux";

import styles from './PersonPhoto.module.css';
import {removePersonFromFavorite, setPersonToFavorite} from "../../../store/actions";
import iconInFavorite from './img/inFavorite.svg';
import iconNotInFavorite from './img/notInFavorite.svg';

const PersonPhoto = ({
                         personPhoto,
                         personName,
                         personID,
                         personFavorite,
                         setPersonFavorite
                     }) => {

    const dispatch = useDispatch();

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(personID));
            setPersonFavorite(false);
        } else {
            dispatch(setPersonToFavorite({
                [personID]: {
                    name: personName,
                    img: personPhoto
                }
            }));
            setPersonFavorite(true);
        }
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName}/>
                <img className={styles.favorite} onClick={dispatchFavoritePeople} src={personFavorite ? iconInFavorite : iconNotInFavorite} alt="Favorite"/>
            </div>
        </>
    )
};

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personID: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonToFavorite: PropTypes.func
}

export default PersonPhoto;
