import React, { useState } from "react";
import PropTypes from "prop-types";
import { createFood, deleteFood, updateFood } from "root/api/foods";
import Typography from "root/components/Typography";

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
    await createFood({
      name,
      energy,
      fat,
      carbohydrates,
      protein,
    });
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
          className={styles.save}
          onClick={handleSave}
        >
          <Typography variant="h5" color="white">
            Gravar e fechar
          </Typography>
        </button>
      );
    }

    return (
      <button
        disabled={
          !name || energy < 0 || fat < 0 || protein < 0 || carbohydrates < 0
        }
        className={styles.save}
        onClick={handleCreate}
      >
        <Typography variant="h5" color="white">
          Criar e fechar
        </Typography>
      </button>
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.whitecontainer}>
        <div className={styles.closecontainer}>
          <button className={styles.close} onClick={onClose} type="button">
            <span className="material-icons">close</span>
          </button>
        </div>

        <div className={styles.container}>
          <div className={styles.title}>
            <Typography color="dark-grey" variant="h1">
              Informações do alimento
            </Typography>
          </div>
          <div className={styles.subtitle}>
            <Typography color="dark-grey" variant="h4">
              Consulte e altere as informações do alimento
            </Typography>
          </div>

          <div className={styles.valuescontainer}>
            <div className={styles.value}>
              <div className={styles.titlevalue}>
                <Typography variant="h4" color="dark-grey">
                  Nome
                </Typography>
              </div>
              <input
                onChange={handleChangeName}
                type="text"
                value={name}
              ></input>
            </div>
          </div>
          <div className={styles.macrotitle}>
            <Typography weight="light" variant="h2">
              Macronutrientes
            </Typography>
          </div>
          <div>
            <div className={styles.grid}>
              <div className={styles.microvalue}>
                <div className={styles.titlevalue}>
                  <Typography variant="h4" color="dark-grey">
                    Energia
                  </Typography>
                </div>
                <input
                  onChange={handleChangeEnergy}
                  type="number"
                  value={energy}
                ></input>
                <div className={styles.unit}>
                  <Typography variant="h4" color="dark-grey">
                    kcal
                  </Typography>
                </div>
              </div>
              <div className={styles.microvalue}>
                <div className={styles.titlevalue}>
                  <Typography variant="h4" color="dark-grey">
                    Gordura
                  </Typography>
                </div>
                <input
                  onChange={handleChangeFat}
                  type="number"
                  value={fat}
                ></input>
                <div className={styles.unit}>
                  <Typography variant="h4" color="dark-grey">
                    g
                  </Typography>
                </div>
              </div>
              <div className={styles.microvalue}>
                <div className={styles.titlevalue}>
                  <Typography variant="h4" color="dark-grey">
                    H. Carbono
                  </Typography>
                </div>
                <input
                  onChange={handleChangeCarbo}
                  type="number"
                  value={carbohydrates}
                ></input>
                <div className={styles.unit}>
                  <Typography variant="h4" color="dark-grey">
                    g
                  </Typography>
                </div>
              </div>
              <div className={styles.microvalue}>
                <div className={styles.titlevalue}>
                  <Typography variant="h4" color="dark-grey">
                    Proteína
                  </Typography>
                </div>
                <input
                  onChange={handleChangeProtein}
                  type="number"
                  value={protein}
                ></input>
                <div className={styles.unit}>
                  <Typography variant="h4" color="dark-grey">
                    g
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            {data && (
              <button className={styles.delete} onClick={handleRemove}>
                <Typography variant="h5" color="white">
                  Eliminar
                </Typography>
              </button>
            )}
            <div>
              <button className={styles.cancel} onClick={onClose}>
                <Typography variant="h5" color="dark-grey">
                  Cancelar
                </Typography>
              </button>
              {renderCreateOrUpdate()}
            </div>
          </div>
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
