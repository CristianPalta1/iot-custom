import React, { useState, useEffect } from "react";
import { ref, set, get } from "firebase/database";
import { database } from "../utils/firebase-config";

import StepperControl  from "./StepperMotor";

import "./styles/ButtonRele.scss";

const RemoteControl = () => {
  const [releState, setReleState] = useState("off");

  useEffect(() => {
    const remoteControlRef = ref(database, "remote_control/rele_1");

    get(remoteControlRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setReleState(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching state: ", error);
      });
  }, []);

  const handleUpdate = () => {
    const newReleState = releState === "on" ? "off" : "on";
    setReleState(newReleState);

    const remoteControlRef = ref(database, "remote_control/rele_1");

    set(remoteControlRef, newReleState)
      .then(() => {
        console.log("Estado actualizado correctamente");
      })
      .catch((error) => {
        console.error("Error al actualizar el estado: ", error);
      });
  };

  return (
    <div className="button-rele">
      <p>Controla el estado del relé:</p>
      <button className={releState} onClick={handleUpdate}>
        {releState === "off" ? "Encender" : "Apagar"}
      </button>
      <StepperControl />
    </div>
  );
};

export default RemoteControl;
