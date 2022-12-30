import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const PageNavigation = ({title}) => {
  return (
    <Wrapper>
      <NavLink to='/'>Home /</NavLink>{title}
    </Wrapper>
  )
}

const Wrapper = styled.section`
height: 5rem;
background-color: ${({theme})=> theme.colors.bg};
display: flex;
align-items: center;
font-size: 2rem;
padding-left: 6.5rem;

a{
    font-size: 2rem;
}

@media(max-width: ${({theme})=> theme.media.mobile}){
    justify-content: center;
    padding-left: 0;
    font-size: 20px;
    height: 3rem;
    a{
    font-size: 20px;
}
}
`;

export default PageNavigation
