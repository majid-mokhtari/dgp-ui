import React, { useEffect, useState, useRef } from "react";
import Categories from "./Categories";
import "./filters.scss";

export default function Filters(props) {
  const { pathname } = props.history.location;
  const pathArr = pathname.split("/");
  const path = pathArr[2];
  const stickyRef = useRef();

  const onScroll = () => {};

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div ref={stickyRef} className="filter">
      <Categories {...props} />
    </div>
  );
}
