import React from 'react'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';
import styled from 'styled-components';

const Star = ({stars, reviews}) => {
  console.log(stars)
  console.log(reviews)

  const ratingStar = Array.from({length: 5}, (elmnt, index)=>{
    let number = index + 0.5;
    // debugger
    return(
      <span key={index}>
      {stars >= index + 1 ? <FaStar className='icon'/> : stars >= number ? <FaStarHalfAlt className='icon'/> : <AiOutlineStar className='icon'/>}
      </span>
    );
  });
  
  return(
  <Wrapper>
<div className="icon-style">
  {ratingStar}
  <p>({reviews} customer reviews)</p>
</div>
  </Wrapper>)
  
}

const Wrapper = styled.section`
  .icon-style{
    display: flex;
    gap: .2rem;
    justify-content: flex-start;
    align-items: center;
  }

  .icon{
    font-size: 1rem;
    color: orange;
  }

  .empty-icon{
    font-size: 1.6rem;
  }

  p{
    margin: 0;
    padding-left: 1.2rem;
  }
`;
export default Star;
