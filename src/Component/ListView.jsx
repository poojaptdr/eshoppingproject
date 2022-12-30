import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatePrice from '../FormatePrice';

const ListView = ({products}) => {
    console.log(products)
  return (
    <Wrapper className='section'>
        <div className="container grid">
{products.map((curElmt) => {
    const {id, name, image, price, description} = curElmt;
    return <div className="cards">
        <figure key = {id}>
            <img src={image} alt={name} />
        </figure>

        <div className="card-data">
            <h3>{name}</h3>
            <p><FormatePrice price={price}/></p>
            <p>{description.slice(0,90)}....</p>
            <NavLink to={`/singleProduct/${id}`}>
                <button className='button'>
                    Read More
                </button>
            </NavLink>
        </div>
    </div>
})}
        </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
.cards{
    display: flex;
    align-items: center;
    gap: 3rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 0 1rem;
}

.card-data{
    h3{
        padding: .5rem;
    }
    p{
        padding: .5rem;
    }
    
}

.button{
    display: block;
    text-align: center;
    margin: 1rem auto;
}

@media(max-width: ${({theme})=> theme.media.mobile}){
    .cards{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card-data{
    h3{
        padding:.2rem .5rem;
    }
    p{
        padding: .5rem;
    }  
}
   
}
`

export default ListView