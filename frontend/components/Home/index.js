import React, { useEffect, useState } from "react";
import asyncImport from "react-imported-component";
import { Link } from "react-router-dom";

import { useAuth } from "root/hooks/useAuth";
import { getFood } from "root/api/foods";

import Food from "root/components/Food";
import "./index.css";

export default function Home() {
  const { user, handleLogout } = useAuth();
  const [food, setFood] = useState();

  async function getAllFood() {
    const response = await getFood();
    console.log(response);
    setFood(response);
  }

  useEffect(() => {
    getAllFood();
  }, []);

  return (
    <div className="root">
      <div>Wow, an Async Component</div>

      {user && <div>Hello {user.name}!</div>}

      <Food onUpdate={getAllFood} data={food}></Food>

      <div className="links">
        {user && user.role === "admin" && <a href="/admin">Admin Area</a>}

        {user ? (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}
