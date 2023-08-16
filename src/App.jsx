import "./App.scss";

import React from "react";
import SearchForm from "./components/SearchForm";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <SearchForm />
      <Outlet />
    </div>
  );
}

export default App;
