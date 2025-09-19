import {Link} from "react-router-dom";
import { useState } from "react";
import React from 'react'
import '../Styles/Login.css'

export default function Login() {
        const [email,setEmail]= useState("");
        const [password, setPassword] = useState ("");
        const [error, setError] = useState ("");

        const handleSubmit = (e) => {
            e.preventDefault();
            if (email === "" || password === "") { 
                setError ("Usuario o contraseña incorrecta.")
            }
            else {
                setError ("");
                console.log ("Iniciando sesión con:" , {email, password});
            }
        };

    
    return (
        <section className="welcome-container">
        <div className="login">
            <h2> Iniciar Sesión </h2>
            {error && <p className="error">{error} </p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group" >
                    <label > Correo electrónico</label>
                    <input 
                    type="email" 
                    placeholder="tucorreo@gmail.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
        <div className="form-group" >
                    <label > Contraseña </label>
                    <input 
                    type="password" 
                    placeholder="Tu contraseña" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className='back-btn'> Acceder </button>
                <Link to='/registrarse'> Registrarse </Link>
            </form>
        </div>
        </section>
    );
}
