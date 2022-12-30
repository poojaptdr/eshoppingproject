import React from 'react'
import styled from 'styled-components'
import FeatureProduct from './Component/featureProduct'
import Footer from './Component/Footer'
import Contact from './Contact'
import { useGlobalContext } from './context/ProductContext'
import HeroSection from './HeroSection'
import Services from './Services'
import Trusted from './Trusted';
import './App.css';


const data = {
  name: 'Pooja Ecommerce'
}

const Home = () => {

  const myName = useGlobalContext()

  return (
    <Wrapper>
      <HeroSection myData={data}/>
      <FeatureProduct />
      <Services/>
      <Trusted/>
      <Contact/>
      <Footer/>
    </Wrapper>
  
  )
};

const Wrapper = styled.section`
padding: 3rem 0;
`

export default Home;
