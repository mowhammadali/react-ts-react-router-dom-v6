import React , {lazy} from 'react'
// react router dom v6
import { Link , Routes , Route } from 'react-router-dom';
// emotion css
import { css } from '@emotion/css';
// Loadable
import Loadable from '../Components/Loadable';
// Components
const ProductsIndex = Loadable(lazy(() => import('../Components/ProductsIndex')));
const ProductEdit = Loadable(lazy(() => import('../Components/ProductEdit')));

const Admin: React.FC = () => {
    return (
        <div className = {AdminStyles}>
            <div className = 'Admin-Header'>
                <h2>Admin</h2>
                <Link className = 'Admin-New' to = 'new'>New</Link>
            </div>
            <Routes>
                <Route path = '/' element = {<ProductsIndex />} />
                <Route path='/new' element = {<ProductEdit isEdit = {false}/>} />
                <Route path='/:id' element = {<ProductEdit isEdit = {true}/>} />
            </Routes>
        </div>
    )
}

const AdminStyles = css`
    .Admin {
        &-Header {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
        }
        &-New {
            text-decoration: none;
            border: 2px solid #fff;
            color: #fff;
            padding: 4px 10px;
            border-radius: 6px;
            font-weight: 600;
            text-transform: uppercase;
            margin-left: auto;
        }
    }
`

export default Admin;