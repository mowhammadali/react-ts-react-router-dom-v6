import React from 'react'
// react router dom v6
import { Link } from 'react-router-dom';
// types
import { ProductCardPropsType } from '../Types/CustomTypes';
// emotion css
import { css } from '@emotion/css';

const ProductCard: React.FC <ProductCardPropsType> = (props) => {
    const { id , name , price } = props;
    return (
        <Link to = {`${id}`} className = {ProductCardStyle}>
            <img src = {`assets/img/products/${id}.svg`} 
            alt = {name} 
            className = "ProductCard-Icon"/>
            <div>
                <h2 className = "ProductCard-Name">{name}</h2>
                <p className = "ProductCard-Price">{`$${price / 100}`}</p>
            </div>
        </Link>
    )
}

const ProductCardStyle = css`
    display: flex;
    color: #fff;
    background-color: #2a2c37;
    border-radius: 6px;
    text-decoration: none; 
    padding: 15px;
    margin-bottom: 5px;
    transition: transform 0.1s ease-in-out , background-color 0.1s ease-in-out , box-shadow 0.1s ease-in-out;
    &: hover {
        transform: translate(0 , -3px);
        box-shadow: 0 6px 12px rgba(0 , 0 , 0 , 0.035);
    }

    .ProductCard {
        &-Icon {
            width: 40px;
            margin-right: 15px;
        }
        &-Name {
            font-size: 1.2rem;
            margin: 0;
        }
        &-Price {
            color: #50fa7b;
            font-size: 1rem;
            margin: 0;
        }
    }
`

export default ProductCard;