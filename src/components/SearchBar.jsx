
import { useState } from "react";

function SearchBar({ onSearch }) {

  
  
    const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
     setSearchTerm(value);

    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}



export default SearchBar;


