import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context/ProductContext'
import Products from '../Products'

const FeatureProduct = () => {

const {isLoading, featureProducts} = useGlobalContext();
console.log(featureProducts)

if(isLoading){
    return<div className='page_loading'>....Loading</div>
}

  return (
    <Wrapper className='section'>
       <div className="container">
        <div className="intro-data">Check Now!</div>
       <div className="common-heading">
            Our Feature Services
          </div>
          <div className="grid grid-three-column">
            {featureProducts.map((curElmt) => {
              return <Products key={curElmt.id} {...curElmt}/>
            })}
          </div>
       </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  padding: 4rem 0;
  
  .section{
    background-color: ${({theme})=> theme.colors.bg};
  }
`;

export default FeatureProduct