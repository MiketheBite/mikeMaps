import Map from "../components/Map/Map";
import Sidebar from "../components/SideBar/Sidebar";
import User from "../components/User/User";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}