import React from "react";
import logo from "/logo.svg";

type LogoProps = {
  width: number;
};

const Logo: React.FC<LogoProps> = ({ width }) => {
  return <img src={logo} alt="Logo" width={width} />;
};

export default Logo;
