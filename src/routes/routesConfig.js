import {Navigate} from "react-router";

import PeoplePage from "../containers/PeoplePage";
import HomePage from "../containers/HomePage";
import NotFoundPage from "../containers/NotFoundPage";

import {HTTP_PREFIX} from "../constants/addresses";
import PersonPage from "../containers/PersonPage";
import EpisodeCrawl from "../components/EpisodeCrawl";
import FavoritesPage from "../containers/FavoritesPage";
import SearchPage from "../containers/SearchPage";
import ErrorMessage from "../components/ErrorMessage";

const routesConfig = [
    {
        path: '/home',
        element: <HomePage/>
    },
    {
        path: '/people',
        element: <PeoplePage/>
    },
    {
        path: '/people/:id',
        element: <PersonPage/>
    },
    {
        path: '/episode_crawl/:ep_id',
        element: <EpisodeCrawl/>
    },
    {
        path: '/favorites',
        element: <FavoritesPage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/fail',
        element: <ErrorMessage />
    },
    {
        path: '/*',
        element: <NotFoundPage/>
    },
    {
        path: '/',
        element: <Navigate to={HTTP_PREFIX + '/home'} replace/>
    },
];

export default routesConfig;
