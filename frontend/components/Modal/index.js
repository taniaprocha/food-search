import React, { useState } from "react";
import PropTypes from "prop-types";
import { createFood, deleteFood, updateFood } from "root/api/foods";

import { update } from "lodash";

import styles from "./index.module.css";

const Modal = ({ onClose, data }) => {
  const [name, setName] = useState(data ? data.name : null);
  const [energy, setEnergy] = useState(data ? data.energy : null);
  const [fat, setFat] = useState(data ? data.fat : null);
  const [carbohydrates, setCarbohydrates] = useState(
    data ? data.carbohydrates : null
  );
  const [protein, setProtein] = useState(data ? data.protein : null);

  const handleRemove = async () => {
    await deleteFood(data.id);
    onClose(true);
  };

  const handleCreate = async () => {
    const newInfo = {};
    if (name !== data.name) {
      newInfo.name = name;
    }
    if (energy !== data.energy) {
      newInfo.energy = energy;
    }
    if (fat !== data.fat) {
      newInfo.fat = fat;
    }
    if (carbohydrates !== data.carbohydrates) {
      newInfo.carbohydrates = carbohydrates;
    }
    if (protein !== data.protein) {
      newInfo.protein = protein;
    }
    await createFood(newInfo);
    onClose(true);
  };

  const handleSave = async () => {
    await updateFood(data.id, {
      name,
      energy,
      fat,
      carbohydrates,
      protein,
    });
    onClose(true);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEnergy = (event) => {
    setEnergy(event.target.value);
  };

  const handleChangeFat = (event) => {
    setFat(event.target.value);
  };

  const handleChangeCarbo = (event) => {
    setCarbohydrates(event.target.value);
  };

  const handleChangeProtein = (event) => {
    setProtein(event.target.value);
  };

  const renderCreateOrUpdate = () => {
    if (data) {
      return (
        <button
          disabled={
            name === data.name &&
            energy === data.energy &&
            fat === data.fat &&
            protein === data.protein &&
            carbohydrates === data.carbohydrates
          }
          onClick={handleSave}
        >
          Gravar e fechar
        </button>
      );
    }

    return (
      <button
        disabled={
          !name || energy < 0 || fat < 0 || protein < 0 || carbohydrates < 0
        }
        onClick={handleCreate}
      >
        Criar e fechar
      </button>
    );
  };

  return (
    <div className={styles.root}>
      <button className={styles.close} onClick={onClose} type="button"></button>

      <div className={styles.container}>
        <div className={styles.title}>Informações do alimento</div>
        <div className={styles.subtitle}>
          Consulte e altere as informações do alimento
        </div>
        <div>
          <div>
            Nome:{" "}
            <input onChange={handleChangeName} type="text" value={name}></input>
          </div>
          <div>
            Quantidade: <input></input>
          </div>
        </div>
        <div>
          <div className="title">Macronutrientes</div>
          <div className="grid">
            <div className="energy">
              Energia:{" "}
              <input
                onChange={handleChangeEnergy}
                type="number"
                value={energy}
              ></input>{" "}
              kcal
            </div>
            <div className="fat">
              Gordura:{" "}
              <input
                onChange={handleChangeFat}
                type="number"
                value={fat}
              ></input>{" "}
              g
            </div>
            <div className="hcarb">
              H. Carbono:{" "}
              <input
                onChange={handleChangeCarbo}
                type="number"
                value={carbohydrates}
              ></input>{" "}
              g
            </div>
            <div className="protein">
              Proteína:{" "}
              <input
                onChange={handleChangeProtein}
                type="number"
                value={protein}
              ></input>{" "}
              g
            </div>
          </div>
        </div>
        <div className={styles.button}>
          {data && <button onClick={handleRemove}>Eliminar</button>}
          <button onClick={onClose}>Cancelar</button>
          {renderCreateOrUpdate()}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    energy: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    protein: PropTypes.number.isRquired,
  }),
};

export default Modal;
