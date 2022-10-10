import React, { Children } from "react";

const Search = (value, onChange, Children) => {
    return (
        <div>
            <label htmlFor="search">{Children}</label>
            <input id="search"
            type="text"
            value={value}
            onChange={onChange}/>
        </div>
    );
};

export default Search;