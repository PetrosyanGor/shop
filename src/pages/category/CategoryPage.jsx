import './Category.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {getFilteredCategory} from '../../api';
import MealList from './../../components/mealList/MealList';

const CategoryPage = () => {
  
  const {name} = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    getFilteredCategory(name).then(data=>{
      console.log(data.meals);
      setMeals(data.meals);
    });
  } ,[]);
  
  return (
    <div className='CategoryPage'>
      <button onClick={()=> navigate(-1)}>GO BACK</button>
      <MealList meals={meals} />
    </div>
  )
}

export default CategoryPage