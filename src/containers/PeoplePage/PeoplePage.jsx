import {useEffect, useState} from "react";
import PropTypes from 'prop-types';

import {withErrorAPI} from "../../hoc/withErrorAPI";
import PeopleList from "../../components/PeoplePage/PeopleList";
import PeopleNavigation from "../../components/PeoplePage/PeopleNavigation";
import {getAPIResource, changeHTTP} from '../../utils/network'
import {getPeopleID, getPeopleImage, getPeoplePageID} from "../../services/getPeopleData";
import {API_PEOPLE} from "../../constants/api";
import {useQueryParams} from "../../hooks/useQueryParams";

import styles from './PeoplePage.module.css';

const PeoplePage = ({setErrorAPI}) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResource = async (url) => {
        const res = await getAPIResource(url);

        if (res) {
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
            setPrevPage(changeHTTP(res.previous));
            setNextPage(changeHTTP(res.next));
            setCounterPage(getPeoplePageID(url));
        }
        setErrorAPI(!res);
    };

    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
    }, []);

    return (
        <>
            <PeopleNavigation
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}/>
            {people ? <PeopleList people={people}></PeopleList> : <p>loading....</p>}
        </>
    )
};

PeoplePage.propTypes = {
    setErrorAPI: PropTypes.func
}

export default withErrorAPI(PeoplePage);
