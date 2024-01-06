import React from "react";
import { GrMenu, GrPhone, GrCart } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from "../../../Logo/Logo";
import styles from "./MobileNav.module.css";

const MobileNav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_group}>
        <GrMenu fontSize={30} className={styles.nav_icon} />
        <GrPhone fontSize={25} className={styles.nav_icon} />
      </div>
      <Logo width={130} />
      <div className={styles.nav_group}>
        <FaRegCircleUser fontSize={25} className={styles.nav_icon} />
        <GrCart fontSize={25} className={styles.nav_icon} />
      </div>
    </nav>
  );
};

export default MobileNav;
