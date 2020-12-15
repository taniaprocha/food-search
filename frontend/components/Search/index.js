import React, { useState } from "react";
import PropTypes from "prop-types";
import deburr from "lodash/deburr";

import styles from "./index.module.css";

const Search = ({ onFilter }) => {
  const [search, setSearch] = useState();
  const [order, setOrder] = useState();

  const handleChange = (event) => {
    const value = deburr(event.target.value);
    console.log(value);
    setSearch(value);
    onFilter(value.toLowerCase(), order);
  };

  const handleListChange = (event) => {
    setOrder(event.target.value);
    onFilter(search, event.target.value);
  };

  return (
    <div className={styles.root}>
      <form>
        <input
          className={styles.search}
          value={search}
          onChange={handleChange}
          placeholder="Pesquisar alimento"
        />

        <select onChange={handleListChange} name="cars" id="cars">
          <option value="">Ordenar por nutriente</option>
          <option value="energy">Energia</option>
          <option value="fat">Gordura</option>
          <option value="carbohydrates">H. Carbono</option>
          <option value="protein">Proteína</option>
        </select>
      </form>
    </div>
  );
};

Search.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Search;
