import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm, setSearchTerm } from "../../../features/songSlice";
import "./Search.scss";

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const handleSearch = (event) => {
    const searchKeys = event.target.value;
    dispatch(setSearchTerm(searchKeys));
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="What do you want to listen to?"
        className="search-box"
        value={searchTerm}
        onChange={handleSearch}
      />
      <i
        className="fas fa-search search-icon"
        id="icon"
        onClick={handleSearch}
      ></i>
    </div>
  );
};

export default Search;
