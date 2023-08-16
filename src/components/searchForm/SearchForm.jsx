import React from "react";
import { Form } from "react-router-dom";
import "./search.scss";

const SearchForm = () => {
  return (
    <Form method="post" action="/user" className="form">
      <input type="text" name="user" placeholder="Search" />
      <button type="submit">Search</button>
    </Form>
  );
};

export default SearchForm;
