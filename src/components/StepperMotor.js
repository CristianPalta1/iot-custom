import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { database } from "../utils/firebase-config";
import "./styles/StepperControl.scss";

const StepperControl = () => {
  const handlePositionChange = (event) => {
    const selectedPosition = +event.target.value;
    const motorControlRef = ref(database, "remote_control/motor_direction");

    set(motorControlRef, selectedPosition)
      .then(() => {
        console.log("Posición del motor actualizada correctamente");
      })
      .catch((error) => {
        console.error("Error al actualizar la posición del motor: ", error);
      });
  };

  return (
    <div className="stepper-control">
      <label htmlFor="motor-position">Selecciona la posición del motor:</label>
      <select id="motor-position" onChange={handlePositionChange}>
        <option value="0">0 grados</option>
        <option value="600">45 grados</option>
        <option value="1200">90 grados</option>
        <option value="1800">135 grados</option>
        <option value="2400">180 grados</option>
        <option value="3000">225 grados</option>
        <option value="3600">270 grados</option>
      </select>
    </div>
  );
};

export default StepperControl;