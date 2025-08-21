// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import UserCard from "../components/userCard.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Modal from "../components/Modal.jsx";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("API Error");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const lower = search.toLowerCase();
    setFiltered(
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(lower) ||
          user.email.toLowerCase().includes(lower)
      )
    );
  }, [search, users]);

  if (loading) return <div className="text-center mt-10">Loading ...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">Error in data </div>;

  return (
    <div className="container mx-auto p-4">
      <SearchBox search={search} setSearch={setSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {filtered.map((user) => (
          <UserCard key={user.id} user={user} onView={() => setSelectedUser(user)} />
        ))}
      </div>
      {selectedUser && (
        <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};
