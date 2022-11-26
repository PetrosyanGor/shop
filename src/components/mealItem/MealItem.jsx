import './MealItem.css'
import { Link, useNavigate } from 'react-router-dom'

const MealItem = ({idMeal, strMeal, strMealThumb}) => {

  const navigate = useNavigate();

  return (
    <div className='MealItem'>
      <img src={strMealThumb} />
      <h3>{strMeal}</h3>
      {/* <Link to={'/meal/' + idMeal}>Detail {strMeal}...</Link> */}
      <button onClick={()=> navigate('/meal/' + idMeal)}>Detail {strMeal}...</button>
    </div>
  )
}

export default MealItem