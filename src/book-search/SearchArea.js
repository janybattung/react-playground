import React from 'react';

const SearchArea = (props) => {
    return(
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text" />
                <button type="submit">Search</button>
                <select defaultValue="Sort" onChange={props.handleSort}>
                    <option value="All">All</option>
                    <option value="Book">Books</option>
                    <option value="Magazine">Magazines</option>
                </select>
            </form>
        </div>
    )
}

export default SearchArea;