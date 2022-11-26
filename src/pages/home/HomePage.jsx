import './Home.css';
import { useState, useEffect } from 'react';
import {getAllCategories} from '../../api';

import CategoryList from '../../components/categoryList';
import Search from '../../components/Search';
import Search2 from './../../components/Search2';


const HomePage = () => {

  const [categories, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [isEmptySearch, setEmptySearch] = useState(true);

  useEffect(()=>{
    getAllCategories().then(data=>{
      console.log(data.categories);
      setCategories(data.categories);
    });
  }, []);


  const searchByCategory = (value)=>{
    const newCategories = categories.filter(el=> el.strCategory.toLowerCase().indexOf(value.toLowerCase()) != -1);
    if(newCategories.length === 0 && value.length>0) setEmptySearch(false);
    else setEmptySearch(true);
    setFilteredCategory(newCategories);
  }


  const search2 = (searchBy, value)=>{
    const newCategories = categories.filter(el=> el[searchBy].toLowerCase().indexOf(value.toLowerCase()) != -1);
    if(newCategories.length === 0 && value.length>0) setEmptySearch(false);
    else setEmptySearch(true);
    setFilteredCategory(newCategories);
  }

  return (
    <div className=''>
      {/* <Search searchByCategory={searchByCategory} /> */}
      <Search2 search2={search2} />
      {
        isEmptySearch ? 
          <CategoryList categories={filteredCategory.length>0 ? filteredCategory : categories} />
        :
        <h3>NOT SEARCH</h3>
      }
      
    
    </div>
  )
}

export default HomePage