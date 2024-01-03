import { useState } from "react";
import Map from "../components/Map/Map";
import Sidebar from "../components/SideBar/Sidebar";
import User from "../components/User/User";
import styles from "./AppLayout.module.css";
import Button from "../components/Button/Button";

export default function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className={styles.app}>
      {isSidebarOpen && <Sidebar />}
      <Button
        onClick={toggleSidebar}
        type="toggleButton"
        tooltipText={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        |
      </Button>
      <Map toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <User />
    </div>
  );
}
