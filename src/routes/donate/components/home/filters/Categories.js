import React, { useState, useEffect } from "react";

const categoriesList = [
  "all",
  "enviornment",
  "animals",
  "health",
  "humanitarian",
  "human services"
];

export default function Categories(props) {
  const [selectedCateg, setSelectedCateg] = useState(["all"]);

  function onCategoriesClick(val) {
    let newList = [];
    if (val === "all") {
      newList = ["all"];
    } else {
      if (selectedCateg.indexOf(val) > -1) {
        newList = selectedCateg.filter(c => c !== val);
      } else {
        newList = [...selectedCateg, ...[val]];
      }
    }
    if (!newList.length) {
      newList.push("all");
    } else if (newList.length > 1) {
      newList = newList.filter(l => l !== "all");
    }
    setSelectedCateg(newList);
  }

  const categories = categoriesList.map((c, i) => {
    const capilized = c.charAt(0).toUpperCase() + c.slice(1);
    const className = selectedCateg.indexOf(c) > -1 ? "active" : "";
    return (
      <span key={i} onClick={() => onCategoriesClick(c)} className={className}>
        {capilized}
      </span>
    );
  });

  useEffect(() => {
    props.actions.filterCards(selectedCateg);
  }, [selectedCateg]);

  return <div className="categories">{categories}</div>;
}
