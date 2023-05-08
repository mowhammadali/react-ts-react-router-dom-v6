import React , { useState , useEffect } from 'react'
// react router dom v6
import { useParams  , useNavigate } from 'react-router-dom';
// fetch data
import { Foods } from '../Data/ProductsData';
// types
import { ProductCardPropsType } from '../Types/CustomTypes';
// emotion css
import { css } from '@emotion/css';

const Product: React.FC = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const [product , setProduct] = useState <ProductCardPropsType | null> (null);

    useEffect(() => {
        (() => {
            const data = Foods;
            const product = data.find(item => item.id === productId);
            if (product) {
                setProduct(product);
            }
            else {
                navigate('/' , {state: {productId}})
            }
        })();
    } , [productId])

    if (product === null) {
        return <h3>Loading ...</h3>
    }
    
    return (
        <div className = {ProductStyles}>
            <div className = 'Product-Title'>
                <img src = {`/assets/img/products/${product.id}.svg`} 
                alt = {product.name} 
                className = 'Product-Icon'/>
                <div>
                    <h1 className = 'Product-Name'>{product.name}</h1>
                    <p className = 'Product-Price'>{`$${product.price / 100}`}</p>
                </div>
            </div>
            <div className = 'Product-Description'>
                <p>{product.description}</p>
                <button className = 'Product-Button' onClick = {() => navigate(-1)}>
                  Back
                </button>
            </div>
        </div>
    )
}

const ProductStyles = css`
  color: #fff;
  background: #2a2c37;
  border-radius: 6px;
  padding: 15px;
  .Product {
    &-Title {
      display: flex;
      margin-bottom: 15px;
    }
    &-Name {
      font-weight: 600;
      font-size: 1.2rem;
      margin: 0;
    }
    &-Price {
      color: #50fa7b;
      font-weight: 600;
      font-size: 1rem;
      margin: 0;
    }
    &-Icon {
      width: 50px;
      margin-right: 15px;
    }
    &-Button {
      border: 2px solid #50fa7b;
      color: #50fa7b;
      background: none;
      padding: 10px 15px;
      margin: 25px 5px 0px 0px;
      border-radius: 6px;
      outline: 0;
      cursor: pointer;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;

export default Product;