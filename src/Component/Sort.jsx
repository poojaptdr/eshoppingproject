import React from 'react'
import styled from 'styled-components'
import {BsFillGridFill, BsList} from 'react-icons/bs'
import { useFilterContext } from '../context/Filter_Context'

const Sort = () => {

  const {filter_products, grid_view, setGridView, setListView, sorting} = useFilterContext()

  

  return (
    <Wrapper>
    {/* 1st */}
      <div className="sort-list-grid">
        <button className={grid_view ? 'active sort-btn' : 'sort-btn'}>
          <BsFillGridFill onClick={setGridView} className='icons'/>
        </button>
        <button className={!grid_view ? 'active sort-btn' : 'sort-btn'}>
        <BsList onClick={setListView} className='icons'/>
        </button>
      </div>

{/* 2nd */}
        <div className="products-data">{`${filter_products.length} Products Available`}</div>

{/* 3rd */}
        <div className="drop-down">
          <form action='#'>
           <label htmlFor='sort'></label>
           <select name='sort' id='sort' className='sort-selection' onClick={sorting}>
            <option value='lowest'>Price(lowest)</option>
            <option value='#' disabled></option>
            <option value='highest'>Price(highest)</option>
            <option value='#' disabled></option>
            <option value='a-z'>Price(a-z)</option>
            <option value='#' disabled></option>
            <option value='z-a'>Price(z-a)</option>
           </select>
          </form>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin:0 2rem;
  align-items: center;


  .sort-list-grid{
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    
  }

  .sort-btn{
    background: none;
    border: none;
    padding: .3rem;

    .icons{
      font-size: 1.5rem;
    }
  }

  .active{
    background: #000;
    color: #fff;
  }

  .sort-selection{
    padding: .2rem;
  }
`;


export default Sort
