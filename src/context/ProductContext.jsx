import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import Reducer from "./Reducer";

const AppContext = createContext();

const API = 'https://api.pujakaitem.com/api/products';

const initialState = {
   isLoading: 'false',
   isError: 'false',
   products: [],
   featureProducts: [],
   isSingleLoading: false,
   singleProduct: {},
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, initialState)

    const getProducts = async(url)=>{
        dispatch({type: 'SET_LOADING'})
        try{
            const res = await axios.get(url);
        console.log(res)
        const products = await res.data;
        console.log(products)

        dispatch({type: 'SET_API_DATA', payload: products});

        }catch(error){
          dispatch({type: 'API_ERROR'});
        }
    }

    // my second api call for single product

    const getSingleProduct = async(url) =>{
      dispatch({type: 'SET_SINGLE_LOADING'})
      try{
          const res = await axios.get(url);
          const singleProduct = await res.data;
          dispatch({type: 'SET_SINGLE_PRODUCT', payload: singleProduct})
       }catch(error){
          dispatch({type: 'SET_SINGLE_ERROR'})
      }
    }

    useEffect(()=>{
      getProducts(API);
    }, [])

    return<AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>
}


// custom hook

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}