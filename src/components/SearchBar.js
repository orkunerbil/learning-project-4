import {useState} from 'react'
import './SearchBar.css'

function SearchBar({onSubmit}) {

    const[term,setTerm] = useState("");

    const handleForSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleForSubmit}>
                <label>Enter Search Term</label>
                <input value={term} onChange={handleChange}/> 
            </form>

        </div>
    )

}

export default SearchBar;