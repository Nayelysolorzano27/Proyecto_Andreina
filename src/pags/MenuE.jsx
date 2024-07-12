import React from 'react';
import { NavLink } from 'react-router-dom';
import logouleam from '../img/logouleam.jpg'; // Asegúrate de importar la imagen correcta

import '../styles/style.css'; // Si necesitas estilos adicionales

function MenuEstudiante() {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src={logouleam} alt="Logo ULEAM" />
                </div>
                <nav>

                    <NavLink className="uno" to='/'><button className="fbutton"><h3>Salir</h3></button></NavLink>
                </nav>
            </header>
            <div className="cuerpo">
                <br /><br /><br />
                <h1>
                    <strong>Bienvenido/a Estudiante</strong>
                </h1>
                <h1>
                    <strong>Menú</strong>
                </h1>
                <div className="menu">
                    <NavLink className="dos" to="/actividadesE"><button className="sbutton"><h2>Actividades</h2></button></NavLink>
                    <NavLink className="dos" to="/tutoriaE"><button className="sbutton"><h2>Tutorias</h2></button></NavLink>
                </div>
            </div><br /><br /><br /><br /><br /><br />
            <footer>
                <div className="logo2">
                    <img src={logouleam} alt="Logo ULEAM" />
                </div><br/>
                <nav className="navv">
                    <NavLink to="#"><pre><center>ULEAM @ Copyright 2022, Todos los derechos reservados - Universidad Laica Eloy Alfaro de Manabí</center></pre></NavLink>
                    <NavLink to="#"><pre><center>Dirección: Av. Circunvalación - Vía a San Mateo</center></pre></NavLink>
                    <NavLink to="#"><pre><center>Manta - Manabí - Ecuador</center></pre></NavLink>
                </nav>
            </footer>
        </div>
    );
}

export default MenuEstudiante;
