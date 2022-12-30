import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const HeroSection = ({myData}) => {
const {name} = myData

  return (
    <Wrapper>
      <div className="container">
        <div className='grid grid-two-column'>
         <div className="hero-section-data">
            <p className="intro-data">
             Welcome to</p>
             <h1>{name}</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, distinctio ab alias odio perferendis at autem iste. Illum, officia exercitationem!</p>
             <NavLink to='/product'>
             <button className='button'>Shop Now</button>
             </NavLink>
         </div>
         <div className='hero-section-data2'>
            <img src='./images/ecommerce.jpg' />
         </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
height: 60vh;

@media(max-width: ${({theme})=> theme.media.mobile}){
  height: 100vh;
}
`;

export default HeroSection