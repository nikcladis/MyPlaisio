import React from "react";
import { GrMenu, GrPhone, GrCart } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from "../../../Logo/Logo";
import styles from "./DesktopNav.module.css";

const DesktopNav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_group}>
        <Logo width={130} />
        <div className={styles.nav_group}>
          <GrMenu fontSize={20} className={styles.nav_icon} />
          <span className={styles.nav_text}>Προϊόντα</span>
        </div>
      </div>
      <div className={styles.nav_group}>
        <FaRegCircleUser fontSize={25} className={styles.nav_icon} />
        <GrCart fontSize={25} className={styles.nav_icon} />
      </div>
    </nav>
  );
};

export default DesktopNav;
