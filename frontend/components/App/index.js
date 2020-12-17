import React, { useEffect, useState } from "react";
import { getFood, searchAndOrder } from "root/api/foods";
import Search from "root/components/Search";
import Food from "root/components/Food";
import Typography from "root/components/Typography";
import Page from "root/components/Page";
import isEmpty from "lodash/isEmpty";
import styles from "./index.module.css";

const App = () => {
  const [food, setFood] = useState();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState(null);
  const [order, setOrder] = useState(null);

  async function getAllFood() {
    const response = await getFood(page);
    if (total === 0) {
      setTotal(response.total);
    }
    setFood(response.data);
  }

  async function getFilteredFood() {
    const response = await searchAndOrder(search, order, page);
    setFood(response.data);
  }

  const handleFilter = (search, order) => {
    setSearch(search);
    setOrder(order);
  };

  useEffect(() => {
    getAllFood();
  }, []);

  useEffect(() => {
    if (food) {
      if (!order && !search) {
        getAllFood();
      } else {
        getFilteredFood();
      }
    }
  }, [page, order, search]);

  const handlePage = (value) => {
    setPage(value);
  };

  const handleUpdate = () => {
    setPage(1);
  };

  const renderFood = () => {
    if (!food) {
      return <Typography>Loading</Typography>;
    }

    if (isEmpty(food)) {
      return <Typography>Não existem alimentos para a pesquisa.</Typography>;
    }

    return (
      <div>
        <Food onUpdate={handleUpdate} data={food}></Food>
        <Page page={page} total={total} onSelect={handlePage} />
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Typography variant="h3">Alimentos</Typography>
        <Typography variant="h5">
          Pesquise, consulte e adicione novos alimentos ao sistema
        </Typography>
        <Search search={search} order={order} onFilter={handleFilter} />
        {renderFood()}
      </div>
    </div>
  );
};

export default App;
