import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import "./filters.scss";

export default function Filters(props) {
  const { pathname } = props.history.location;
  const pathArr = pathname.split("/");
  const path = pathArr[2];
  const [filterClassName, setFilterClassName] = useState(getClassName());

  function getClassName() {
    if (path === "discover") {
      if (window.pageYOffset >= 630) {
        return "filter sticky";
      } else {
        return "filter";
      }
    } else {
      if (window.pageYOffset >= 4) {
        return "filter sticky";
      } else {
        return "filter";
      }
    }
  }
  function onScroll() {
    setFilterClassName(getClassName());
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className={filterClassName}>
      <Categories {...props} />
    </div>
  );
}
