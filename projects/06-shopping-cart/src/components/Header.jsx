import React from "react";
import { Filters } from "./Filters";

export function Header({ changeFilters }) {
  return (
    <header>
      <h1>Header 🛒</h1>
      <Filters onChangeFilters={changeFilters} />
    </header>
  );
}
