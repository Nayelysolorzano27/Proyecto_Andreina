import React from 'react';
import { NavLink } from 'react-router-dom';
import logou from '../img/logouleam.jpg';
import estu from '../img/estudiante.jpg';
import profe from '../img/profesor.jpg';
import '../styles/style.css';
import '../styles/login.css';

function Loginini() {
    return (
        <div>
            <header>
                <div className='LogoUleam'>
                    <img src={logou} alt="logoU" />
                </div>
                <nav>
                    <NavLink to='/'><center><h3>Pagina Principal</h3></center></NavLink>
                </nav>
            </header>
            <section className='about-services'>
                <div className='contenedor-1'>
                    <h1 className='titulo1'>ESTUDIANTE</h1>
                    <NavLink to='/login-studen'><img src={estu} alt="estudiante" /></NavLink>
                </div>
                <div className='contenedor-2'>
                    <h1>DOCENTE</h1>
                    <NavLink to='/login-teacher'><img src={profe} alt="profesor" /></NavLink>
                </div>
            </section>
            <footer>
                <div className='LogoUleam2'>
                    <img src={logou} alt="logu" />
                </div>
                <nav className='navv'>
                    <center><pre>ULEAM @ Copyright 2022, Todos los derechos reservados - Universidad Laica Eloy Alfaro de Manabí</pre></center>
                    <center><pre>Dirección: Av. Circunvalación - Vía a San Mateo</pre></center>
                    <center><pre>Manta - Manabí - Ecuador</pre></center>
                </nav>
            </footer>
        </div>
    );
}

export default Loginini;
