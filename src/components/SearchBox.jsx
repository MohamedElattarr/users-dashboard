// src/components/SearchBox.jsx
import React from "react";

export default function SearchBox({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  );
}
