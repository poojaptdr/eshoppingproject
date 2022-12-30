import { createContext, useContext, useEffect, useReducer } from "react";
import { useGlobalContext } from "./ProductContext";
import FilterReducer from "./FilterReducer";

 const FilterContext = createContext()

 const initialState = {
    filter_products : [],
    all_products: [],
    grid_view: true,
    sorting_value: 'lowest',
    filters:{
        text: '',
        category: 'all',
        company: 'all',
        colors: 'all',
    },
 };

 const FilterContextProvider = ({children}) =>{

    const {products} = useGlobalContext();
    console.log(products)

    const [state, dispatch] = useReducer(FilterReducer, initialState)

    // to set the grid view
    const setGridView = () => {
        return dispatch({type: 'SET_GRIDVIEW', payload: products})
    }

    const setListView = () => {
        return dispatch({type: 'SET_LISTVIEW', payload: products})
    }

    // sorting function
    const sorting = (event) => {
        let userValue = event.target.value;
      return dispatch({type: 'SET_SORT_VALUE', payload: userValue})
    }

    // update the filter values
    const updateFilterValue = (e) => {
      let name = e.target.name;
      let value = e.target.value;

        return dispatch({type: 'UPDATE_FILTERS_VALUE', payload: {name, value},})
    }

// sort the products
    useEffect(()=>{
        dispatch({type: 'FILTER_PRODUCTS'})
   dispatch({type: 'SORTING_PRODUCTS',payload: products})
    }, [products, state.sorting_value, state.filters])

    useEffect(()=>{
        dispatch({type: 'LOAD_FILTER_PRODUCTS', payload: products});
    }, [products])

return(
    <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue}}>
        {children}
    </FilterContext.Provider>
)
};

 const useFilterContext = () => {
    return useContext(FilterContext)
};

export {FilterContext, FilterContextProvider, useFilterContext}