import {useState} from 'react'

const Search2 = ({search2}) => {

    const [input, setInput] = useState('');

    const clear = ()=>{
        setInput('');
        search2('strCategory', '');
    }

  return (

    <div className='Search'>
        <input type="text" placeholder='Search By...' value={input} onChange={e=> setInput(e.target.value)} />
        <button onClick={()=> search2('strCategory', input)}>Seatch By Category</button>
        <button onClick={()=> search2('strCategoryDescription', input)}>Seatch By Descr</button>
        <button onClick={clear}>Clear</button>
    </div>
  )
}

export default Search2