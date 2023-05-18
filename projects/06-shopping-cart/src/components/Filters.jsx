import { useState } from "react";
import "./Filters.css";

export function Filters({ onChangeFilters }) {
  const [minPrice, setMinPrice] = useState(0);
  const [category, setCategory] = useState("");

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChangeFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    onChangeFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <laber htmlFor="price">Price</laber>
        <input
          type="range"
          name=""
          id="price"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Cell phones</option>
        </select>
      </div>
    </section>
  );
}
