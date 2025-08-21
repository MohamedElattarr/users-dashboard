// src/components/UserCard.jsx
import React from "react";

export default function UserCard({ user, onView }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <button
        onClick={onView}
        className="mt-2 px-3 py-1 bg-[#00A7E1] text-white rounded hover:bg-blue-600"
      >
        Show more
      </button>
    </div>
  );
}
