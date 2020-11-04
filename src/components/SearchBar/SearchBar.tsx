import classes from "./SearchBar.module.css";
import React from "react";

interface SearchBarProps {
  change: (e) => void;
  click: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ change, click }) => {
  return (
    <div className={classes.SearchBar}>
      <input
        className={classes.SearchInput}
        type="text"
        name="search"
        placeholder="Please enter city."
        onChange={(e) => change(e)}
      />
      <button className={classes.SearchButton} onClick={click}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
