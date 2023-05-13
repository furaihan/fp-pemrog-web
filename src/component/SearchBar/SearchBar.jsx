import { useState } from "react";
import "./SearchBar.css";
import searchlogo from "../../assets/image/search.svg";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You searched for "${query}"`);
  };

  const handleToggle = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className={showInput ? "show" : "hide"}
        />
        <button type="button" onClick={handleToggle}>
          <img src={searchlogo} alt="Search" className="search-logo" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
