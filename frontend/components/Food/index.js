import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "root/components/Modal";
import Typography from "root/components/Typography";
import find from "lodash/find";
import List from "./List";
import styles from "./index.module.css";

const Food = ({ data, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const handleCreate = () => {
    setSelectedId(null);
    setIsOpen(true);
  };

  const handleEdit = (id) => () => {
    setSelectedId(id);
    setIsOpen(true);
  };

  const handleCloseModal = (updateFood) => {
    setIsOpen(false);

    if (updateFood) {
      onUpdate();
    }
  };

  if (!data) {
    return null;
  }

  return (
    <div className={styles.root}>
      {isOpen ? (
        <Modal
          data={selectedId && find(data, ["id", selectedId])}
          onClose={handleCloseModal}
        />
      ) : null}
      <List data={data} onSelect={handleEdit} />

      <button className={styles.create} type="button" onClick={handleCreate}>
        <Typography>Criar alimento</Typography>
      </button>
    </div>
  );
};

Food.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      energy: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      protein: PropTypes.number.isRquired,
    })
  ),
  onUpdate: PropTypes.func.isRequired,
};

export default Food;
