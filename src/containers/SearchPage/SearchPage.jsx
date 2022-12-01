import styles from './SearchPage.module.css';
import {useCallback, useEffect, useState} from "react";
import {debounce} from "lodash";
import {getAPIResource} from "../../utils/network";
import {API_SEARCH} from "../../constants/api";
import {withErrorAPI} from "../../hoc/withErrorAPI";
import PropTypes from "prop-types";
import {getPeopleID, getPeopleImage} from "../../services/getPeopleData";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo";
import UIInput from "../../components/UI/UIInput";

const SearchPage = ({setErrorApi}) => {
    const [inputValue, setInputValue] = useState("");
    const [people, setPeople] = useState([]);


    const getResponse = async param => {
        const res = await getAPIResource(API_SEARCH + param);
        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleID(url);
                const img = getPeopleImage(id);
                return {
                    id,
                    name,
                    img
                };
            });
            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []);

    const handleInputChange = value => {
        setInputValue(value);
        debouncedGetResponse(value);
    }

    useEffect(() => {
        getResponse("");
    }, []);

    return (
        <>
            <h1 className={"header__text"}>Search</h1>
            <UIInput
                value={inputValue}
                handleInputChange={handleInputChange}
                placeholder="Character's name..."
                classes={styles.input__search}
            />
            <SearchPageInfo people={people}/>
        </>
    )
};

SearchPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorAPI(SearchPage);
