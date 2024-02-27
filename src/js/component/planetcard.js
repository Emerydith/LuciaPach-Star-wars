import React from "react";

const PlanetCard = ({ planet }) => {
  return (
    <div className="card">
      <h2>{planet.name}</h2>
      <p><strong>Diámetro:</strong> {planet.diameter}</p>
      <p><strong>Clima:</strong> {planet.climate}</p>
      {/* Agrega más propiedades del planeta aquí según sea necesario */}
    </div>
  );
};

export default PlanetCard;
