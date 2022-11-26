

const Search = ({searchByCategory}) => {


    
  return (
    <div className='Search'>
        <input type="text" placeholder='Search By Category...' onChange={e=> searchByCategory(e.target.value)} />
    </div>
  )
}

export default Search