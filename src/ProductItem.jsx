import React from 'react'
import styled from 'styled-components';
import FilterSection from './Component/FilterSection';
import Sort from './Component/Sort';
import ProductList from './Component/ProductList';
import { useFilterContext } from './context/Filter_Context';
import './App.css';

const ProductItem = () => {

  const { filter_products} = useFilterContext()
  console.log(filter_products)

  return (
    <Wrapper>
    <div className="containeres grides grid-filter-columns">
      <div className='filter'>
         <FilterSection/>
      </div>
      
      <section className="product-view-sort">
       <div className="sort-filter">
          <Sort />
       </div>

       <div className="main-product">
         <ProductList/>
       </div>
      </section>

    </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`

.containeres{
  max-width: 1000px;
  margin: 2rem auto;
}

.grides{
  display: flex;
}

.grid-filter-columns{
  grid-template-column: .2fr 1fr;
}

  @media(max-width: ${({theme})=> theme.media.mobile}){
.grides{
  flex-direction: column;
  gap: 2rem;
}

    .grid-filter-column{
  grid-template-column: 1fr;
}

.filter{
  width: 40%;
}
  }
`;

export default ProductItem;