import styles from "./CityList.module.css";
import Spinner from "../Spinner/Spinner";
import CityItem from "./CityItem";
import Message from "../Message/Message";
import { useCities } from "../../contexts/CitiesContext";

export default function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    console.log("Renderizando no CityList");
    return <Spinner />;
  }
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
