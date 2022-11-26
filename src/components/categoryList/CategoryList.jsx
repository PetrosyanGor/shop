import './CategoryList.css';
import CategoryItem from '../categoryItem/CategoryItem';

const CategoryList = ({categories}) => {
  return (
    <div className='CategoryList'>
      {
        categories.map(item=> <CategoryItem key={item.idCategory} item={item} />)
      }
    </div>
  )
}

export default CategoryList