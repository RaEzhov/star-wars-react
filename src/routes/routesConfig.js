import {Navigate} from "react-router";

import PeoplePage from "../containers/PeoplePage";
import HomePage from "../containers/HomePage";
import NotFoundPage from "../containers/NotFoundPage";

import {HTTP_PREFIX} from "../constants/addresses";
import PersonPage from "../containers/PersonPage";

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
        path: '/*',
        element: <NotFoundPage/>
    },
    {
        path: '/',
        element: <Navigate to={HTTP_PREFIX + '/home'} replace/>
    },
];

export default routesConfig;
