import React, { useState, useEffect } from "react";

export default function Categories(props) {
  const { categories } = props;
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
  const categoriesList = categories.map((c, i) => {
    const className = selectedCateg.indexOf(c.categoryID) > -1 ? "active" : "";
    return (
      <span
        key={i}
        onClick={() => onCategoriesClick(c.categoryID)}
        className={className}
      >
        {c.description}
      </span>
    );
  });
  useEffect(() => {
    props.actions.filterCards(selectedCateg);
  }, [selectedCateg]);

  return <div className="categories">{categoriesList}</div>;
}
