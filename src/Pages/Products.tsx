import React , {lazy} from 'react';
// react router dom v6
import { Routes , Route ,  Outlet } from 'react-router-dom';
// emotion css
import { css } from '@emotion/css';
// Loadable
import Loadable from '../Components/Loadable';
// Components
const ProductsIndex = Loadable(lazy(() => import('../Components/ProductsIndex')));
const Product = Loadable(lazy(() => import('../Components/Product')));

const Products: React.FC = () => {
    return (
        <div className = {ProductsStyles}>
            <img src="./assets/img/logo.svg" alt="logo" className = 'logo'/>
            <Routes>
                <Route path='/' element = {<ProductsIndex />}/>
                <Route path=':productId' element = {<Product />}/>
            </Routes>
        </div>
    )
}

const ProductsStyles = css`
    display: flex;
    flex-direction: column;

    .logo {
        width: 125px;
        margin: 0 auto 25px;
    }
`

export default Products;