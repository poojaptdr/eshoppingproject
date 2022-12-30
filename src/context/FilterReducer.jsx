import React from 'react'

const FilterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS':
        return{
            ...state,
            filter_products: [...action.payload],
            all_products: [...action.payload],
        };

        case 'SET_GRIDVIEW':
            return{
                ...state,
                grid_view: true,
            };

            case 'SET_LISTVIEW':
                return{
                    ...state,
                    grid_view: false,
                };

                case 'SET_SORT_VALUE':
                    return {
                        ...state,
                        sorting_value: action.payload
                    }

                    case 'SORTING_PRODUCTS':

                    let newSortData;

                    const {filter_products, sorting_value} = state;

                    let tempSortProduct = [...filter_products];

                    const sortingProduct = (a, b) => {
                        if(sorting_value === 'a-z'){
                        return a.name.localeCompare(b.name);
                        }

                        if(sorting_value === 'z-a'){
                            return b.name.localeCompare(a.name)
                        }

                        if(sorting_value === 'lowest'){
                            return a.price - b.price
                        }

                        if(sorting_value === 'highest'){
                           return b.price - a.price
                        }
    
                    };

                    newSortData = tempSortProduct.sort(sortingProduct) 

                        return{
                            ...state, 
                            filter_products: newSortData,
                        }

                        case 'UPDATE_FILTERS_VALUE':
                            const {name, value} = action.payload;
                        return{
                            ...state,
                            filters: {
                                ...state.filters,
                                [name]: value,
                            },
                        };

                        case 'FILTER_PRODUCTS':
                            let {all_products} = state;
                            let tempFilterProducts = [...all_products];

                            const {text, category, company, colors} = state.filters;

                            if(text){
                                tempFilterProducts = tempFilterProducts.filter((curElmt) => {
                                    return curElmt.name.toLowerCase().includes(text);
                                });
                            }

                            if(category !== 'all'){
                                tempFilterProducts = tempFilterProducts.filter((curElmn)=>{
                                    return curElmn.category === category;
                                })
                            }

                            if(company !== 'all'){
                                tempFilterProducts = tempFilterProducts.filter((curEmn)=>{
                                    return curEmn.company === company;
                                })
                            }

                            if(colors){
                              tempFilterProducts = tempFilterProducts.filter((curColor)=>{
                                curColor.colors.includes(colors)
                              })
                            }

                            return{
                                ...state,
                                filter_products: tempFilterProducts,
                            }
     default:
        return state;
  }
}

export default FilterReducer