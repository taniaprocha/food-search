import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "root/components/Modal";
import find from "lodash/find";

import "./index.css";

const Food = ({ data }) => {
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

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  if (!data) {
    return null;
  }

  return (
    <div>
      {isOpen ? (
        <Modal
          data={selectedId && find(data, ["id", selectedId])}
          onClose={handleCloseModal}
        />
      ) : null}
      <div className="food-list">
        {data.map(({ id, name, energy, fat, carbohydrates, protein }) => {
          return (
            <button className="food-item" onClick={handleEdit(id)}>
              <div>{name}</div>
              <div>{`${energy}kcal`}</div>
              <div>{`${fat}g`}</div>
              <div>{`${carbohydrates}g`}</div>
              <div>{`${protein}g`}</div>
            </button>
          );
        })}
      </div>

      <button className="create-button" type="button" onClick={handleCreate}>
        Criar alimento
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
};

export default Food;
