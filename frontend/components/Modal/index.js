import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.css";

const Modal = ({ onClose, data }) => {
  const [name, setName] = useState(data ? data.name : null);
  const [energy, setEnergy] = useState(data ? data.energy : null);
  const [fat, setFat] = useState(data ? data.fat : null);
  const [carbohydrates, setCarbohydrates] = useState(
    data ? data.carbohydrates : null
  );
  const [protein, setProtein] = useState(data ? data.protein : null);

  const handleRemove = () => {};

  const handleSave = () => {};

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

  return (
    <div className="modal">
      <button className="close" onClick={onClose} type="button"></button>

      <div className="container">
        <div className="title">Informações do alimento</div>
        <div className="subtitle">
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
        <div className="buttons">
          {data && <button onClick={handleRemove}>Eliminar</button>}
          <button onClick={onClose}>Cancelar</button>
          <button
            disabled={
              !name ||
              energy <= 0 ||
              fat <= 0 ||
              protein <= 0 ||
              carbohydrates <= 0
            }
            onClick={handleSave}
          >
            Gravar e fechar
          </button>
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
