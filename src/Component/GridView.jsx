import React from 'react'
import styled from 'styled-components';
import Products from '../Products';

const GridView = ( {products} ) => {
  console.log(products)
  return (
    <Wrapper className='section'>
        <div className="container grid grid-three-column">
            {
              products.map((curElmt)=> {
                return <Products key={curElmt.id} {...curElmt} />
            })
            }
        </div>
    </Wrapper>
  )
};
const Wrapper = styled.section`
 

`;

export default GridView;