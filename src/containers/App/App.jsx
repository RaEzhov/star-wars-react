import {BrowserRouter, Route, Routes} from 'react-router-dom';

import routesConfig from "../../routes/routesConfig";

import {HTTP_PREFIX} from "../../constants/addresses";
import Header from "../../components/Header";

import styles from './App.module.css';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className={styles.wrapper}>
                    <Header/>
                    <Routes>
                        {routesConfig.map((route, index) => (
                            <Route
                                key={index}
                                path={HTTP_PREFIX + route.path}
                                element={route.element}/>
                        ))}
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App;
