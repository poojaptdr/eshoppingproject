import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { FiShoppingCart} from "react-icons/fi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            text-decoration: none;
            text-transform: upperCase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
        }
      }

      .cart-trolley-link{
        position: relative;
      }

      .cart-trolley{
        position: relative;
        font-size: 1.8rem;

        &:hover{
          color: ${({theme})=> theme.colors.black};
        }
      }

      .cart-total{
        width: 2rem;
        height: 2rem;
        position: absolute;
        background: ${({theme})=> theme.colors.helper};
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -150%;
        right: -90%;

        &:hover{
          color: ${({theme})=> theme.colors.black};
        }
      }
    }

    .mobile-navbar-btn{
      display: none;

      .close-outline{
        display: none;
      }
    }

    .mobile-navbar-btn[name='close-outline']{
       dispaly: none; 
    }  

    @media(max-width: ${({theme})=>theme.media.mobile}){
      .mobile-navbar-btn{
        display: inline-block;
        z-index: 999;
        border: ${({theme})=>theme.colors.black};

        .mobile-nav-icon{
        font-size: 2rem;
        color: ${({theme})=>theme.colors.black};
       }
      }


      ${"" /* hide the original nav menu */}

      .navbar-list{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        transform: translateX(100%);

        li{
          .navbar-link{
          &:link,
          &:visited {
            font-size: 1rem;
          }
          }
        }
      }

      .active .mobile-nav-icon{
        display: none;
        fone-size: 2rem;
        position: absolute;
        top: 36%;
        right: 13%;
        color: ${({theme})=> theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline{
        display: inline-block; 
      }

      .active .navbar-list{
        visiblity: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 9999;
        gap: 2rem;
      }
    }
  `;
  
  return (
    <Nav>
      <div className={openMenu ? 'menuIcon active' : 'menuIcon'} >
        <ul className="navbar-list">
          <li>
            <NavLink to='/'className="navbar-link" onClick={()=> setOpenMenu(fasle)}>Home</NavLink>
          </li>
          <li>
            <NavLink to='about' className="navbar-link" onClick={()=> setOpenMenu(fasle)}>About</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={()=> setOpenMenu(fasle)} to="/product">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={()=> setOpenMenu(fasle)} to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link cart-trolley-link" onClick={()=> setOpenMenu(fasle)} to="/cart">
              <FiShoppingCart className="cart-trolley"/>
              <span className="cart-total">10</span>
            </NavLink>
          </li>
        </ul>

        {/* nav icon */}

        <div className="mobile-navbar-btn">
          <CgMenu name='menu-outline' className='mobile-nav-icon' onClick={()=>setOpenMenu(true)}/>
          <CgCloseR name='close-outline' className='close-outline mobile-nav-icon' onClick={()=>setOpenMenu(false)}/>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
