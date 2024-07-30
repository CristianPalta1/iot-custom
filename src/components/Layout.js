import React from "react";
import { Children } from "react";

import "./styles/Layout.scss";

import Logo from "../assets/images/logo-black-rz.png"

const Header = () => {
  return (
    <header>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={Logo}
        />
        <img src={Logo} alt="Logo" />
      </picture>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/sensors">Sensores</a>
          </li>
          <li>
            <a href="/remote-control">Control Remoto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return <footer>Desarollador Ing. Cristian Palta</footer>;
};

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {Children.map(children, (child) => (
        <>{child}</>
      ))}
      <Footer />
    </>
  );
};
