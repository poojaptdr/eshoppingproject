import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {AppProvider} from './context/ProductContext'
import {FilterContextProvider} from './context/Filter_Context'

ReactDOM.createRoot(document.getElementById('root')).render(
 <AppProvider>
 <FilterContextProvider>
 <App /> 
 </FilterContextProvider>
  </AppProvider>
)
