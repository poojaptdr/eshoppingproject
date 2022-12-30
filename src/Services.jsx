import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="service-1">
            <TbTruckDelivery className="icon" />
            <h3>Super Fast and Free Delivery</h3>
          </div>

          <div className="service-2">
            <div className="service-column-2-top">
                <MdSecurity className="icon" />
                <h3>Non-Contact Shipping</h3>
            </div>
            <div className="service-column-2-bottom">
                <GiReceiveMoney className="icon" />
                <h3>Money back Guaranteed</h3>
            </div>
          </div>

            <div className="service-3">
            <RiSecurePaymentLine className='icon' />
            <h3>Super Secure Payment System</h3>
            </div>

        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
 .service-1,
  .service-3 {
    width: auto;
    height: 30vh;
    background-color: ${({ theme }) => theme.colors.bg};
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
    border-radius: 10px;
    gap: 1rem;
  }

  .service-2{
    width: auto;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .service-column-2-top, .service-column-2-bottom{
    margin: .8rem;
    background-color: ${({ theme }) => theme.colors.bg};
    padding: .8rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .icon{
    background-color: white;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    color: #1d4ed8;
    padding: .8rem;
  }
  
`;

export default Services;
