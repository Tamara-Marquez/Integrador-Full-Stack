import { Outlet } from "react-router-dom";

export default function Catalogo() {
return (
    <div>
        <h2>Catálogo General</h2>
        <p>Selecciona una categoría:</p>
      <Outlet /> {/* Aquí se renderiza Autos o Motos */}
    </div>
  );
}
