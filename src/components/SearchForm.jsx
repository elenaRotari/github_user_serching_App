import React from "react";
import { Form } from "react-router-dom";

const SearchForm = () => {
  return (
    <Form method="post" action="/user">
      <label>Name</label>
      <input type="text" name="user" />
      <button type="submit">Search</button>
    </Form>
  );
};

export default SearchForm;
