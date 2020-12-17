import React from "react";
import PropTypes from "prop-types";
import deburr from "lodash/deburr";
import Typography from "root/components/Typography";

import styles from "./index.module.css";

const Search = ({ onFilter, order, search }) => {
  const handleChange = (event) => {
    onFilter(deburr(event.target.value), order);
  };

  const handleListChange = (event) => {
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

        <select
          className={styles.order}
          onChange={handleListChange}
          name="micro"
          id="micro"
        >
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
