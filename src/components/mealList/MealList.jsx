import './MealList.css'
import MealItem from '../mealItem/MealItem'

const MealList = ({meals}) => {

  return (
    <div className='MealList'>
      {
        meals.map(item => <MealItem key={item.idMeal} {...item} /> )
      }
    </div>
  )
}

export default MealList