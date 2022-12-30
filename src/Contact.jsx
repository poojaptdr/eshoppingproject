import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
       <h2>Contact Page</h2>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14591.477084881555!2d76.4421413901852!3d23.894253925936813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3964b5338275aec7%3A0x574c7a571f0aee54!2sChhapiheda%2C%20Madhya%20Pradesh%20465689!5e0!3m2!1sen!2sin!4v1669722091258!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

       <div className="container">

        <form action='https://formspree.io/f/mrgdwgle' method='POST' className='grids'>

        <input type='text' placeholder='enter your name' name='username' autoComplete='off'/>

          <input type='email' placeholder='enter your email' name='email' autoComplete='off'/>

          <textarea placeholder='message' cols='30' rows='8' name='message' autoComplete='off'></textarea>
          <button className='button'>submit</button>
        </form>
       </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`

h2{
  margin-bottom: 3rem;
  text-align: center;
}

.grids{
  margin-top: 4rem;
  display: grid;
  justify-content: center;
  gap: 2rem;
}
`;

export default Contact
