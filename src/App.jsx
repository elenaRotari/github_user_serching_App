import React from "react";
import SearchForm from "./components/searchForm/SearchForm";
import { Outlet } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <SearchForm />
      <Outlet />
    </div>
  );
}

export default App;
