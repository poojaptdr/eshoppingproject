import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Error = () => {
  return (
    <Wrapper>
       <div className='container'>
      <div>
        <h2>404</h2>
        <h2>UH OH! You are lost</h2>
        <p>The page you are looking for does not exist. How you got here is a mystery. but you can click the button below homepage</p>

        <NavLink to='/'>
          <button className='button'>Go Back To Home</button>
        </NavLink>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
   padding: 3rem 0;
   text-align: center;

   p{
    font-size: 20px;
    margin: 1rem;
   }
`;

export default Error