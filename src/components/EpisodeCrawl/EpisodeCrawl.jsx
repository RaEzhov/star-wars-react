import styles from './EpisodeCrawl.module.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAPIResource, toRomanSystem} from "../../utils/network";
import {HTTPS, SWAPI_FILMS, SWAPI_ROOT} from "../../constants/api";
import PersonLinkBack from "../PersonPage/PersonLinkBack";

const EpisodeCrawl = () => {

    const id = Number(useParams().ep_id);

    let filmId;
    switch (id) {
        case 1:
            filmId = 4;
            break;
        case 2:
            filmId = 5;
            break;
        case 3:
            filmId = 6;
            break
        case 4:
            filmId = 1;
            break;
        case 5:
            filmId = 2;
            break;
        case 6:
            filmId = 3;
            break;
        default:
            filmId = id;
    }

    const [filmInfo, setFilmInfo] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await getAPIResource(HTTPS + SWAPI_ROOT + SWAPI_FILMS + filmId);

            const strings = response.opening_crawl.split(/\r\n\r\n/g);
            for (let i = 0; i < strings.length; i++) {
                strings[i] = strings[i].split(/\r\n/g);
            }
            response.opening_crawl = strings;
            setFilmInfo(response);
        })();
    }, []);

    return (
        <div>
            <PersonLinkBack/>
            <div className={styles.wrapper}>
                <div>
                    {filmInfo ?
                        <>
                            <p>Episode {toRomanSystem(filmInfo.episode_id)}</p>
                            <h1>{filmInfo.title.toUpperCase()}</h1>
                            <p className={styles.main__text}>{filmInfo.opening_crawl.map(paragraph => {
                                return (
                                    <>{paragraph.map(line => {
                                        return (
                                            <>{line}<br/></>
                                        );
                                    })}<br/></>);
                            })}</p>
                        </> :
                        ("Loading...")
                    }
                </div>
            </div>
        </div>
    )
}

export default EpisodeCrawl;
