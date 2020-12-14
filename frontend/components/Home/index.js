import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "root/hooks/useAuth";
import {
  getFood,
  searchResults,
  orderResults,
  searchAndOrder,
} from "root/api/foods";
import Search from "root/components/Search";

import Food from "root/components/Food";
import styles from "./index.module.css";
import { async } from "regenerator-runtime";

export default function Home() {
  const { user, handleLogout } = useAuth();
  const [food, setFood] = useState([]);

  async function getAllFood() {
    const response = await getFood();
    console.log(response);

    setFood(response);
  }

  async function handleFilter(search, order) {
    let response;
    if (search && order) {
      response = await searchAndOrder(search, order);
    } else if (order) {
      response = await orderResults(order);
    } else {
      response = await searchResults(search);
    }
    console.log(response);
    setFood(response);
  }

  useEffect(() => {
    getAllFood();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div>Alimentos</div>
        <div>Pesquise, consulte e adicione novos alimentos ao sistema</div>
        <Search onFilter={handleFilter} />
        <Food onUpdate={getAllFood} data={food}></Food>
      </div>

      <div className={styles.links}>
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
