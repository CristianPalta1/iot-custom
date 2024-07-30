import React from "react";
import RemoteControl from "../components/ButtonRele";

import "./styles/Remote.scss";

export const RemotePage = () => {
  return (
    <>
      <RemoteControl />
      <div className="iframe-container">
        <iframe
          src="https://ipphonecamera.deskshare.com"
          title="IP Phone Camera"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
};
