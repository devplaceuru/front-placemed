import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { BsBoxes } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { BsBag } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { PiListBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`${styles.container} ${
        isOpen ? styles.container : styles.containerClose
      }`}
    >
      <div className={styles.icons}>
        {!isOpen ? (
          <PiListBold
            size={25}
            className={styles.iconMenu}
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <IoClose
            size={25}
            className={styles.iconMenu}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>

      <div
        className={`${styles.sideBar} ${
          isOpen ? styles.sideBar : styles.sideClose
        }`}
      >
        <h1>Sofistikato Cosméticos</h1>

        <NavLink
          to="/dashboard"
          className={styles.link}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "white",
                  background: "#3787FE ",
                }
              : {}
          }
        >
          <RxDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/products"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "white",
                  background: "#3787FE ",
                }
              : {}
          }
        >
          <BsBoxes size={20} />
          Produtos
        </NavLink>

        <NavLink
          to="/orders"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "white",
                  background: "#3787FE ",
                }
              : {}
          }
        >
          <BsBag size={20} />
          Pedidos
        </NavLink>

        <NavLink
          to="/clients"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "white",
                  background: "#3787FE ",
                }
              : {}
          }
        >
          <IoPeopleOutline size={20} />
          Clientes
        </NavLink>

        <NavLink to="/" className={styles.logout}>
          Sair
        </NavLink>
      </div>
    </div>
  );
}
