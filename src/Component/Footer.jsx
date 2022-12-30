import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaDiscord, FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <div className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>

        <div>
          <NavLink to="/contact">
            <button>Get Started</button>
          </NavLink>
        </div>
        </div>
      </div>

      <footer>
      <div className="containers grid grid-four-column">
      <div className="footer-about">
          <h3>Pooja Patidar</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="footer-subscribe">
          <h3>Subscribe to get important updates</h3>
          <form action="" className="form">
            <input type="email" placeholder="enter your email" required autoComplete="off"/>
            <button>Subscribe</button>
          </form>
        </div>

        <div className="footer-social">
          <h3>Follow us</h3>
          <div className="social-media">
            <div>
              <FaDiscord className="icon"/>
            </div>
            <div>
              <FaInstagramSquare className="icon"/>
            </div>
            <div>
              <a href="https://www.youtube.com/" target="_blank">
                <FaYoutubeSquare className="icon"/>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Call Us</h3>
          <a href='tel: 2459749385'>+91 2459749385</a>
        </div>
      </div>

      <div className="footer-bottom-section">
      <hr/>
      <div className="containers grid grid-two-column">
        <p>
          @{new Date().getFullYear()} PoojaPatidar. All Rights Reserved
        </p>

        <div>
          <p>PRIVACY POLICY</p>
          <p>TERMS & CONDITIONS</p>
        </div>
      </div>
      </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    box-shadow: ${({theme})=> theme.colors.shadow};
    padding: 2rem 5rem;
    border-radius: 1rem;
    background-color: ${({theme})=> theme.colors.bg};
    transform: translateY(50%);

    .grid div:last-child {
    justify-self: end;
    align-items: center;
  }
  }

  h3{
    margin-bottom: 1rem
  }

  footer{
  padding: 10rem 0 9rem 0;
  background-color: ${({theme})=> theme.colors.footer_bg};
}

.containers{ 
  max-width: 1000px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  color: #fff;
  text-align: center;
}

.social-media{
    display: flex;
    justify-content: center;
    gap: 1rem;

    div{
      padding: .5rem;
      border-radius: 50%;
      border: 2px solid white;
    }

    .icon{
      color: #fff;
      font-size: 1.5rem;
      position: relative;
      cursor: pointer;
      margin: 0 auto;
    }
  }

   a {
    text-decoration: none;
    color: #fff;
  }

  .footer-subscribe{
    display: flex;
    flex-direction: column;
  }

  .form{
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    align-items: center;
  }

.footer-bottom-section{
  padding-top: 9rem;
  font-size: 20px;

  hr{
    margin-bottom: 1.5rem;
  }
}

button{
    width: auto;
    height: 54px;
    margin: 1rem 0;
    background-color:#1d4ed8;
    border: none;
    color: #fff;
    font-size: 20px;
    padding: 1rem;
  }

  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      text-align: center;
      gap: 1rem;
    }

  .containers{
  margin: 2rem;
  flex-direction: column;
  text-align: center;
  gap: 4rem;
}
  }
`;

export default Footer;
