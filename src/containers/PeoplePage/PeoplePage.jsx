import {useEffect, useState} from "react";

import {getAPIResource} from '../../utils/network'
import {API_PEOPLE} from "../../constants/api";
import {getPeopleID, getPeopleImage} from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";

const PeoplePage = () => {
    const [people, setPeople] = useState(null);

    const getResource = async (url) => {
        const res = await getAPIResource(url);

        const peopleList = res.results.map(({name, url}) => {
            const id = getPeopleID(url);
            const imageUrl = getPeopleImage(id);

            return {
                id,
                name,
                imageUrl
            }
        });

        setPeople(peopleList);
    }

    useEffect(() => {
        getResource(API_PEOPLE);
    }, []);

    return (
        <>
            {people ? <PeopleList people={people}></PeopleList> : <p>loading....</p>}
        </>
    )
}

export default PeoplePage;
