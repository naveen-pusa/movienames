import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setMovie }) => {
  const [search, setSearch] = useState("");

  const fetchMovie = async () => {
    if (!search) return;

    let res = await axios.get(
      `https://www.omdbapi.com/?apikey=61e576a4&t=${search}`
    );

    setMovie(res.data);
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={fetchMovie}>Search</button>
    </div>
  );
};

export default SearchBar;