import {useSelector} from "react-redux";

import styles from './FavoritesPage.module.css';
import {useEffect, useState} from "react";
import PeopleList from "../../components/PeoplePage/PeopleList";

const FavoritesPage = () => {
    const [people, setPeople] = useState([]);
    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const peopleArr = Object.entries(storeData).map(item => {
            return {
                id: item[0],
                ...item[1]
            }
        });
        setPeople(peopleArr);
    }, []);

    return (
        <>
            <h1 className={"header__text"}>Favorites</h1>
            {people.length? <PeopleList people={people}/> : <p>No favorites...</p>}
        </>
    )
};

export default FavoritesPage;
