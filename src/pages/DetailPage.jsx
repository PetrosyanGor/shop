import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getMealById} from '../api';

const DetailPage = () => {

  const [meal, setMeal] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getMealById(id).then(data=>{
      console.log(data.meals[0]);
      setMeal(data.meals[0]);
    });
  }, []);

  return (
    <div className='DetailPage'>
      <button onClick={()=> navigate(-1)}>GO BACK</button>
        <img src={meal.strMealThumb} />
        <h3>Area:  {meal.strArea}</h3>
        <h3>Category: {meal.strCategory}</h3>
        <h3>Tags: {meal.strTags}</h3>
    </div>
  )
}

export default DetailPage