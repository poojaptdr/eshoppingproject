import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/Filter_Context'

const FilterSection = () => {

  const{filters: {text, category, company, colors} ,all_products ,updateFilterValue} = useFilterContext();

  // To get the unique data of each fields
  const getUniqueData = (data, attribute) =>{
      let newVal = data.map((curElmt)=>{
        return curElmt[attribute];
      });
      if(attribute === 'colors'){
        // return newVal = ['all', ...new Set([].concat(...newVal))];
        newVal = newVal.flat()
      }
        return newVal = ['all',...new Set(newVal)];   
  }

  // We need unique data
  const categoryData = getUniqueData(all_products, 'category');
  console.log(categoryData)

  const companyData = getUniqueData(all_products, 'company')
  console.log(companyData)

  const colorsData = getUniqueData(all_products, 'colors')
  console.log(colorsData);

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
          type='text' 
          name='text' 
          value={text} 
          onChange={updateFilterValue}
          placeholder='Search'
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElm)=>{
            return<button className='btn' key={curElm.id} type='button' onClick={updateFilterValue} name='category' value={curElm}>
               {curElm}
            </button>
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form action=''>
          <select name='company' className='filter-company-select' onClick={updateFilterValue}>
            {
              companyData.map((curCompany)=> {
              return(
                <option key={curCompany.id} value={curCompany} name='company'>{curCompany}</option>
              )
            })
            }
          </select>
        </form>
      </div>

      <div className="filter-colors">
        <h3>Colors</h3>
        <div className='filter-color-style'>
          {colorsData.map((curColors) => {
            return(
              <button
               type='button'
               value={curColors}
               name='colors'
                style={{backgroundColor: curColors}} className='btnStyle'
                onClick={updateFilterValue}>
                {colors === curColors ? '' : null}
              </button>
            ) 
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;
gap: 3rem;


h3{
  padding: 1rem 0 .2rem 0;
  font-size: bold;
}

.filter-search{
  input{
    padding: .5rem .8rem;
    width: 80%;
    border: 2px solid black;
    border-radius: 5px;
  }
}

.btn{
  display: flex;
  align-items: center;
  margin: 1rem;
  background: none;
  border: none;
  text-transform: capitalize;
}

.filter-company-select option{
  text-transform: capitalize;
}

.filter-color-style{
  display: flex;
}


.btnStyle{
    width: 1rem;
    height: 1rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: .5rem;
    border: none;
    outline: none;
    cursor: pointer;
}

${'' /* .active{
    opacity: 1;
} */}

@media(max-width: ${({theme})=> theme.media.mobile}){
  margin: 0 2rem;
}
`;

export default FilterSection