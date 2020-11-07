import React, { memo } from "react";

import logo from "../images/logo.svg";
import styles from "./header.module.css";

export interface HeaderProps {
  label: string;
}

const Header: React.FC<HeaderProps> = ({ label }) => (
  <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      {label}
  </div>
);

export default memo(Header);
