import React, { useState } from "react";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";

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
            <div className={styles.name}>
              <Typography variant="h5">{name}</Typography>
            </div>
            <div className={styles.column}>
              <Typography variant="h5">{`${energy}kcal`}</Typography>
              <Typography className={styles.columntitle}>Energia</Typography>
            </div>
            <div className={styles.column}>
              <Typography variant="h5">{`${fat}g`}</Typography>
              <Typography className={styles.columntitle}>Gordura</Typography>
            </div>
            <div className={styles.column}>
              <Typography variant="h5">{`${carbohydrates}g`}</Typography>
              <Typography className={styles.columntitle}>H. Carbono</Typography>
            </div>
            <div className={styles.column}>
              <Typography variant="h5">{`${protein}g`}</Typography>
              <Typography className={styles.columntitle}>Proteína</Typography>
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
