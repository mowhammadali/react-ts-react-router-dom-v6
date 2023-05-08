import React from 'react'
// react router dom v6
import { NavLink } from 'react-router-dom';
// emotion css
import { css } from '@emotion/css';

const Nav: React.FC = () => {
    return (
        <nav className = {NavStyles}>
            <NavLink to = '/' end>Products</NavLink>
            <NavLink to = '/admin'>Admin</NavLink>
        </nav>
    )
}

const NavStyles = css`
    margin-bottom: 20px;

    a {
        color: #fff;
        text-decoration: none;
        padding: 6px 12px;
        border-radius: 6px;
        &.active {
            color: #16c04f;
            border: 2px solid #16c04f;
            font-style: italic;
        }
    }
`

export default Nav;