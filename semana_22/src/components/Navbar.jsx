import React from 'react';
import './../styles/styles.css';



export default function navbar() {
    return (
        <>
        <div className='grid'>
        <nav className='section_nav'>
            <ul className='nav'>
                <li className='nav_item'>
                    <a href="#home"> 🏠 Home </a>
                </li>
                <li className='nav_item'>
                    <a href="#categorias"> 📁 Categorias</a>
                    <ul className='sub_nav'>
                        <li className='sub_nav-item'>
                            <a href="#autos" > 🏎️ Autos </a>
                        </li>
                        <ul className='sub_nav'>
                        <li className='sub_nav-item'>
                            <a href="#motos" > 🛵 Motos </a>
                        </li>
                        </ul>
                    </ul>
                </li>
                <li className='nav_item'>
                    <a href="#carrito"> 🛒 Carrito </a>
                </li>
                <li className='nav_item'>
                    <a href="#nosotros"> 🫂 Nosotros </a>
                </li>
                <li className='nav_item'>
                    <a href="#ayuda"> ❓ Ayuda </a>
                </li>
            </ul>
        </nav>
        </div>
        </>
);
}
