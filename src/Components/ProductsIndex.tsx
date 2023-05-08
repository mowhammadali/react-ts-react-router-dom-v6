import React, { useState, useEffect , lazy } from 'react'
// react router dom v6
import { useLocation  , useSearchParams} from 'react-router-dom';
// data
import { Foods} from '../Data/ProductsData';
// emotion css
import { css } from '@emotion/css';
// types
import { sortProductFromParamsArgumentsType } from '../Types/CustomTypes';
// Loadable
import Loadable from './Loadable';
// Components
const ProductCard = Loadable(lazy(() => import('./ProductCard')));

const ProductsIndex: React.FC = () => {
    const { state } = useLocation();
    const [searchParams , setSearchParams] = useSearchParams();
    const [products, setProducts] = useState<any[] | null>(null);

    useEffect(() => {
        setTimeout(() => {
            (() => {
                const params = Object.fromEntries([...searchParams]);
                sortProductFromParams(Foods , params);
            })();
        }, (800));
    }, [])
    
    useEffect(() => {
        if (state?.productId) {
            console.warn(`Nothing found for ${state.productId}`)
        }
    } , [])

    const sortProductFromParams: sortProductFromParamsArgumentsType = (data , params) => {
        if (!Object.keys(params).length) {
            setProducts(data);
            return;
        }

        const sorted = [...data!].sort((x, y) => {
            const { sort, order } = params;
            switch (order) {
              case 'ascending': {
                return x[sort] > y[sort] ? 1 : -1;
              }
              case 'descending': {
                return x[sort] < y[sort] ? 1 : -1;
              }
              default: {
                return 0;
              }
            }
          });
          setProducts(sorted);
    }

    const updateParams = (event: React.FormEvent <HTMLInputElement>) => {
        const {name , value} = event.currentTarget;
        const currentParams = Object.fromEntries([...searchParams]);
        const newParams = {...currentParams , [name]: value};
        setSearchParams(newParams);
        sortProductFromParams(products , newParams);
    }

    if (products === null) {
        return <h5>Loading ...</h5>
    }

    return (
        <div className = {ProductsIndexStyles}>
            <div className="ProductsIndex-Radios">
                <span>Sort :</span>
                <label htmlFor="sort-name">Name:</label>
                <input type="radio" 
                id = "sort-name"
                name = "sort"
                value = "name"
                onChange = {updateParams}
                defaultChecked = {searchParams.get('sort') === 'name'}/>
                <label htmlFor = "sort-price">Price:</label>
                <input type="radio" 
                id = "sort-price"
                name = "sort"
                value = "price"
                onChange = {updateParams}
                defaultChecked = {searchParams.get('sort') === 'price'}/>
            </div>
            <div className="ProductsIndex-Radios">
                <span>Order :</span>
                <label htmlFor = "order-ascending">Ascending:</label>
                <input type="radio" 
                id = "order-ascending"
                name = "order"
                value = "ascending"
                onChange = {updateParams}
                defaultChecked = {searchParams.get('order') === 'ascending'}/>
                <label htmlFor = "order-descending">Descending:</label>
                <input type="radio" 
                id = "order-descending"
                name = "order"
                value = "descending"
                onChange = {updateParams}
                defaultChecked = {searchParams.get('order') === 'descending'}/>
            </div>
            {
                products.map(item => <ProductCard {...item}  key = {item.id}/>)
            }
        </div>
    )
}

const ProductsIndexStyles = css`
  .ProductsIndex {
    &-List {
      margin-top: 10px;
    }
    &-Radios {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 15px;
      span {
        color: #fff;
        font-size: 0.8rem;
        margin-right: 10px;
      }
      label {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`;

export default ProductsIndex;