import React, { useState } from "react";
import { getDatabase, ref, set, } from "firebase/database";
import { database } from "../utils/firebase-config";

import "./styles/ButtonRele.scss";

const RemoteControl = () => {
  const [releState, setReleState] = useState("off");

  const handleUpdate = () => {
    if (releState === "on") {
      setReleState("off");
    } else {
      setReleState("on");
    }

    const remoteControlRef = ref(database, "remote_control/rele_1");

    set(remoteControlRef, releState)
      .then(() => {
        console.log("Estado actualizado correctamente");
      })
      .catch((error) => {
        console.error("Error al actualizar el estado: ", error);
      });
  };

  return (
    <div>
      <button onClick={handleUpdate}>{releState === 'off' ? "Apagar" : "Encender"}</button>
    </div>
  );
};

export default RemoteControl;
