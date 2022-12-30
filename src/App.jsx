import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import Error from './Error';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './Component/Header';
import Services from './Services';
import Trusted from './Trusted';
import FeatureProduct from './Component/featureProduct';
import ProductItem from './ProductItem';


function App() {

  const theme = {
    colors:{
      heading: 'rgb(26 26 29)',
      text: 'rgba(29, 29, 29, .8 )',
      white: '#fff',
      black: '#212529',
      helper: '#8490ff',
      bg: '#f6f8fa',
      footer_bg: '#0a1435',
      btn: 'rgba(98, 84, 243, 0.5)',
      hr: '#ffffff',
      gradient: 'linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)',
      shadow: 'rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
    },
    media: {mobile: '768px', tab: '998px'},
  }

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Header />
    {/* <GlobalStyle /> */}
      <Routes> 
      <Route path='/' element= {<Home />}/>
      <Route path='/about' element= {<About />}/>
      <Route path='/product' element= {<Products />}/>
      <Route path='/service' element= {<Services />}/>
      <Route path='/contact' element= {<Contact />}/>
      <Route path='/singleProduct/:id' element= {<SingleProduct />}/>
      <Route path='/trusted' element= {<Trusted />}/>
      <Route path='/cart' element= {<Cart />}/>
      <Route path='/featureProduct' element= {<FeatureProduct />}/>
      <Route path='/productItem' element= {<ProductItem />}/>
      <Route path='*' element= {<Error />}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
