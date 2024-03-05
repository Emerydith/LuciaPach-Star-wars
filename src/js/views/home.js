import "../../styles/home.css";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext"; // Suponiendo que has definido tu contexto en un archivo llamado "context.js"
import PlanetCard from "../component/planetcard"; // Importa el componente PlanetCard

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadSomeData(); 
    actions.getplanetas();// Llama a la acción para cargar los planetas cuando se monta el componente Home
    actions.getvehiculos(); 
  }, []);
  console.log(store.vehiculos)
  return (
    <div className="container">  
      <h1>Planetas:</h1>
      <div className="card-container">
        {store.planets &&
          store.planets.map((planet, index) => (
            <PlanetCard key={index} planet={planet} />
          ))}
      </div>
    </div>
  );
};