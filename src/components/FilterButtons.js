import React from "react";

function FilterButtons({ filter, setFilter }) {
  const filters = ["All", "Pending", "Completed"];

  return (
    <div className="filter-buttons">
      {filters.map((item) => (
        <button
          key={item}
          className={filter === item ? "active" : ""}
          onClick={() => setFilter(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;