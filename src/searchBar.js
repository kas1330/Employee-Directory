import React from "react";

const Search = (props) => {
  return (
    <>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        value={props.inp}
        onChange={(e) => props.searchFilterOnChange(e)}
      />
    </>
  );
};

export default Search;
