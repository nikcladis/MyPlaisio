import React from "react";
import styles from "./Header.module.css";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { GrPhone } from "react-icons/gr";
import { GrCart } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from "../Logo/Logo";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav_group}>
          <GrMenu fontSize={30} />
          <GrPhone fontSize={25} />
        </div>
        <Logo width={130} />
        <div className={styles.nav_group}>
          <FaRegCircleUser fontSize={25} />
          <GrCart fontSize={25} />
        </div>
      </nav>
    </header>
  );
};
export default Header;
