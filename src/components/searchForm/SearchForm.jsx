import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./search.scss";

const SearchForm = () => {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="user"
        placeholder="Search"
        value={user}
        onChange={handleChange}
      />
      <Link className="button" onClick={() => setUser("")} to={`${user}`}>
        Search
      </Link>
    </form>
  );
};

export default SearchForm;
