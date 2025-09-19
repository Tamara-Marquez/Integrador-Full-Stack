import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <nav class="section_nav">
            <ul class="nav">
                <li class="nav_item">
                    <Link to="/">🏠 Home</Link>
                </li>
                <li className="nav_item">
                    <Link to="/catalogo">📚 Catálogos</Link>
                <ul className="sub_nav">
                    <li className="sub_nav-item">
                        <Link to="/catalogo/autos">🏎️ Autos</Link>
                    </li>
                    <li className="sub_nav-item">
                        <Link to="/catalogo/motos">🛵 Motos</Link>
                    </li>
                </ul>
                </li>    
                <li className="nav_item">
                    <Link to="/carrito">🛒 Carrito</Link>
                </li>
                <li className="nav_item">
                    <Link to="/login">🔑 Login</Link>
                </li>
                <li className="nav_item">
                    <Link to="/nosotros">🫂 Nosotros</Link>
                </li>
                <li className="nav_item">
                    <Link to="/ayuda">❓ Ayuda</Link>
                </li>
        </ul>
    </nav>
);
}