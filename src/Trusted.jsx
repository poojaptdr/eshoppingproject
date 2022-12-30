import React from 'react'
import styled from 'styled-components';
import {CgCircleci} from 'react-icons/cg';
import {AiFillSignal} from 'react-icons/ai';
import {GiHexagonalNut, GiNestedHexagons, GiHeartDrop} from 'react-icons/gi';

const Trusted = () => {
  return (
    <Wrapper>
    <div className="container-fluid">
      <h2>Trusted By 1000+ Companies</h2>

<div className="container slider">
  <div className='slide-1'>
     <GiHexagonalNut className='icons'/>
     <h3>ZEINA</h3>
  </div>
  <div className='slide-2'>
     <CgCircleci className='icons'/>
  </div>
  <div className='slide-3'>
    <GiNestedHexagons className='icons'/>
    <h3>LOGIC</h3>
  </div>
  <div className='slide-4'>
    <GiHeartDrop className='icons'/>
  </div>
  <div className='slide-5'>
    <AiFillSignal className='icons'/>
    <h3>CHARTZ</h3>
  </div>
</div>

    </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`;
margin: 5rem 0;
padding: 9rem 0;
background-color: ${({theme})=> theme.colors.bg};

h2{
  text-align: center;
}

.slider{
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slide-1, .slide-3, .slide-5{
  display: flex;
  align-items: center;
}

.icons{
  font-size: 2.5rem;
}

@media(max-width: ${({theme})=> theme.media.mobile}){
  .slider{
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }
}
`;

export default Trusted