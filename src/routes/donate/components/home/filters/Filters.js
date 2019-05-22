import React from "react";
import Sort from "./Sort";
import Categories from "./Categories";
import "./filters.scss";

export default function Filters(props) {
  return (
    <div className="filter">
      <Categories {...props} />
      <Sort {...props} />
    </div>
  );
}
