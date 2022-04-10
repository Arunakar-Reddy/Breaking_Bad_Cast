import React,{ useState } from "react";


const Search = ({getQuery}) =>{

    const [inputtext,setText] = useState('');

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <section className="search">
            <form>
                <input 
                    type='text'
                    className="form-control"
                    placeholder="Serach Characters"
                    value={inputtext}
                    onChange ={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search;