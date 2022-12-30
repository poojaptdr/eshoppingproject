import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to='/'>
        <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwnOMKDxIPXw080U1DFn512bFMgpzJcmxlw&usqp=CAU' />
      </NavLink>
      <Navbar />
    </MainHeader>
  )
};

const MainHeader = styled.header`
 padding: 0 4.8rem;
 height: 8rem;
 box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
 
 .logo{
   height: 5rem;
 }
`;

export default Header