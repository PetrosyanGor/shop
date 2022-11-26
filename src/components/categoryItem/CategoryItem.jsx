import './CategoryItem.css';
import {Link} from 'react-router-dom';


const CategoryItem = ({item}) => {
  return (
    <div className='CategoryItem'>
      <img src={item.strCategoryThumb} />
      <h3>{item.idCategory}</h3>
      <h3>{item.strCategory}</h3>
      <p>{item.strCategoryDescription}</p>
      <Link to={'/category/' + item.strCategory}>Detail {item.strCategory} Category ...</Link>
    </div>
  )
}

export default CategoryItem