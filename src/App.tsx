import React , { useState , lazy} from 'react';
// react router dom v6
import { BrowserRouter as Router , Routes , Route  , Navigate , useRoutes} from 'react-router-dom';
// emotion css
import { css } from '@emotion/css';
// Loadable
import Loadable from './Components/Loadable';
// Pages
const Products = Loadable(lazy(() => import('./Pages/Products')));
const Admin = Loadable(lazy(() => import('./Pages/Admin')));
// Components
const Nav = Loadable(lazy(() => import('./Components/Nav')));
const ScrollToTop = Loadable(lazy(() => import('./Components/ScrollToTop')));
// Protected Route
const ProtectedRoute = Loadable(lazy(() => import('./security/ProtectedRoute')));

const AppRouter = () => {

    const [athenticated] = useState<boolean>(true);

    const routes = useRoutes([
        {
            path: '/*',
            element: <Products />
        },
        {
            path: '/admin/*',
            element: athenticated ? <Admin /> : <Navigate to = "/" />
        },
        {
            path: '*',
            element: <Navigate to = '/' />
        }
    ])
    return routes;
}

const App: React.FC = () => {
    return (
        <div className = {AppStyles}>
            <Router>
                <ScrollToTop />
                <div className = "Container">
                    <Nav />
                    <AppRouter />
                    {/* <Routes>
                        <Route path = '/*' element = {<Products />}/>
                        <Route path = '/admin/*' 
                        element = {
                        <ProtectedRoute athenticated = {athenticated}
                         redirectTo = '/'>
                                <Admin />
                        </ProtectedRoute>}/>
                        <Route path = '*' element = {<Navigate to='/' />} />
                    </Routes> */}
                </div>
            </Router>
        </div>
    )
}

const AppStyles = css`
    margin: 50px auto;
    width: 450px;
    @media screen and (max-width: 768px) {
        width: 380px;
    }
    @media screen and (max-width: 420px) {
        width: 340px;
    }

    .Container {
        background-color: #1d1e26;
        border: 4px solid #9580ff;
        border-radius: 6px;
        padding: 25px;
    }
`

export default App;