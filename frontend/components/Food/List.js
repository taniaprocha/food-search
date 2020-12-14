import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const List = ({ data, onSelect }) => {
  if (!data) {
    return null;
  }

  return (
    <div className={styles.list}>
      {data.map(({ id, name, energy, fat, carbohydrates, protein }) => {
        return (
          <button key={id} className={styles.item} onClick={onSelect(id)}>
            <div className={styles.name}>{name}</div>
            <div className={styles.column}>
              <div>{`${energy}kcal`}</div>
              <div className={styles.columntitle}>Energia</div>
            </div>
            <div className={styles.column}>
              <div>{`${fat}g`}</div>
              <div className={styles.columntitle}>Gordura</div>
            </div>
            <div className={styles.column}>
              <div>{`${carbohydrates}g`}</div>
              <div className={styles.columntitle}>H. Carbono</div>
            </div>
            <div className={styles.column}>
              <div>{`${protein}g`}</div>
              <div className={styles.columntitle}>Proteína</div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      energy: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      protein: PropTypes.number.isRquired,
    })
  ),
  onSelect: PropTypes.func.isRequired,
};

export default List;
