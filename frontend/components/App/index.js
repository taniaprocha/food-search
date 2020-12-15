import React, { useEffect, useState } from "react";
import { getFood, searchAndOrder } from "root/api/foods";
import Search from "root/components/Search";
import Food from "root/components/Food";
import Typography from "root/components/Typography";
import isEmpty from "lodash/isEmpty";
import styles from "./index.module.css";

const App = () => {
  const [food, setFood] = useState();

  async function getAllFood() {
    const response = await getFood();

    setFood(response);
  }

  async function handleFilter(search, order) {
    const response = await searchAndOrder(search, order);
    setFood(response);
  }

  useEffect(() => {
    getAllFood();
  }, []);

  const renderFood = () => {
    if (!food) {
      return <Typography>Loading</Typography>;
    }

    if (isEmpty(food)) {
      return <Typography>Não existem alimentos para a pesquisa.</Typography>;
    }

    return <Food onUpdate={getAllFood} data={food}></Food>;
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Typography variant="h3">Alimentos</Typography>
        <Typography variant="body">
          Pesquise, consulte e adicione novos alimentos ao sistema
        </Typography>
        <Search onFilter={handleFilter} />
        {renderFood()}
      </div>
    </div>
  );
};

export default App;
