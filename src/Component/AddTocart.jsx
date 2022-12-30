import React, { useState } from 'react'
import styled from 'styled-components';
import {FaCheck} from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';


const AddTocart = ({product}) => {
    const {id, colors, stock} = product;
    console.log(colors)

    const[ color, setColor] = useState(colors[0])

    const [amount, setAmount] = useState(1)

    const setDecrease = () =>{
       amount > 1 ? setAmount(amount -1) : setAmount(1)
    }

    const setIncrease = () =>{
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }

  return (
    <Wrapper>
      <div className="colors">
        <p>
            Colors:{
                colors.map((curColor, index)=> {
                    return <button key={index} style= {{backgroundColor: curColor}} className= {color === curColor ? 'btnStyle active' : 'btnStyle'}
                    onClick = {()=> setColor(curColor)}>
                       {color === curColor ? <FaCheck className='checkStyle'/> : null}
                    </button>
                })
            }
        </p>
      </div>

      {/* Add to cart */}
   <CartAmountToggle
    amount={amount}
    setDecrease= {setDecrease} 
    setIncrease= {setIncrease} />

   <NavLink to='/cart'>
    <button className='btn'>Add To Cart</button>
   </NavLink>

    </Wrapper>
  )
};

const Wrapper = styled.section`

.colors p{
display: flex;
justify-content: flex-start;
align-items: center;
}

.btnStyle{
    width: 1rem;
    height: 1rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
}

&:hover{
    opacity: 1;
}

.active{
    opacity: 1;
}

.checkStyle{
    font-size: 1rem;
    color: #fff;
}

${'' /* We can use it as aglobal one too */}

button{
    border: none;
    background-color: #fff;
    cursor: pointer;
}

.amount-toggle{
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.3rem;
}

.amount-style{
    font-size: 2rem;
    color: ${({theme})=> theme.colors.btn};
}

.btn{
    width: auto;
    height: 54px;
    margin: 1rem 0;
    background-color:#1d4ed8;
    border: none;
    color: #fff;
    font-size: 20px;
    padding: 1rem;
}


`;

export default AddTocart;
