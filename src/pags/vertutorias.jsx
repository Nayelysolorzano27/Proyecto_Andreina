import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logou from '../img/logouleam.jpg';
import '../styles/style.css';

function VerTutorias() {
    const tutorias = JSON.parse(localStorage.getItem('tutorias')) || [];

    const handleEliminarTutoria = (index) => {
        // Clona el array de tutorias
        const nuevasTutorias = [...tutorias];
        // Elimina la tutoria en el indice proporcionado
        nuevasTutorias.splice(index, 1);
        // Actualiza localStorage con el nuevo array de tutorias
        localStorage.setItem('tutorias', JSON.stringify(nuevasTutorias));
        // Actualiza el estado para que React renderice de nuevo
        window.location.reload();
    };

    return (
        <div>
            <header>
                <div className="LogoUleam">
                    <img src={logou} alt="logoU" />
                </div>
                <nav>
                    <center>
                        <NavLink to="/MenuT"><h3>Atras</h3></NavLink>
                    </center>
                </nav>
            </header>
            <h1>Lista de Tutorías Registradas</h1>
            <ul className='cuadro'>
                {tutorias.map((tutoria, index) => (
                    <li key={index}>
                        <p>Tema: {tutoria.tema}</p>
                        <p>Horas: {tutoria.horas}</p>
                        <p>Tareas: {tutoria.tareas}</p>
                        <p>Grupo: {tutoria.grupo}</p>
                        <p>Fecha de tutoría: {tutoria.date}</p>
                        <p>Próxima fecha: {tutoria.proxdate}</p>
                        <p>Observaciones: {tutoria.observaciones}</p>
                        <p>Tipo de tutoría: {tutoria.tipo}</p>
                        <p>Tiempo de tutoría: {tutoria.tiempo}</p>
                        <button className='eliminar' onClick={() => handleEliminarTutoria(index)}>Eliminar</button>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VerTutorias;

