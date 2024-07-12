import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logouleam from '../img/logouleam.jpg';
import '../styles/style.css';
import '../styles/EstilosAE1.css';

function ActividadesEstudiante() {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        const storedTareas = JSON.parse(localStorage.getItem('tareas')) || [];
        setTareas(storedTareas);
    }, []);

    const handleSubirTarea = () => {
        
        if (descripcion) {
            const newTarea = {
                id: new Date().getTime(), // Genera un ID único basado en la hora actual
                descripcion: descripcion
            };
            const newTareas = [...tareas, newTarea];
            setTareas(newTareas);
            localStorage.setItem('tareas', JSON.stringify(newTareas));
        }
    };

    const handleEliminarTarea = (id) => {
        const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
        setTareas(nuevasTareas);
        localStorage.setItem('tareas', JSON.stringify(nuevasTareas));
    };

    return (
        <div>
            <header>
                <div className="LogoUleam">
                    <img src={logouleam} alt="Logo ULEAM" />
                </div>
                <nav className="NAV">
                    <NavLink to="/MenuE"><button><h3>Estudiante</h3></button></NavLink>
                </nav>
            </header>
            <section className="Actividades">
                <div className="Titulo-Actividades">
                    <h1>Actividades</h1>
                </div>
                <div className="Contenedores">
                    {tareas.map((tarea) => (
                        <div key={tarea.id} className={`Contenedor-${tarea.id}`}>
                            <form>
                                <input type="text" value={tarea.descripcion} readOnly />
                                <p className="borrar" onClick={() => handleEliminarTarea(tarea.id)}>Eliminar Tarea</p>
                            </form>
                        </div>
                    ))}
                    <NavLink to='/subirE'><button className="B1-AE" onClick={handleSubirTarea}>Subir Tarea</button></NavLink>
                </div>
            </section>
            <footer>
                <div className="LogoUleam2">
                    <img src={logouleam} alt="Logo ULEAM" />
                </div>
                <nav className="navv">
                    <NavLink to="#"><pre><center>ULEAM @ Copyright 2022, Todos los derechos reservados - Universidad Laica Eloy Alfaro de Manabí</center></pre></NavLink>
                    <NavLink to="#"><pre><center>Dirección: Av. Circunvalación - Vía a San Mateo</center></pre></NavLink>
                    <NavLink to="#"><pre><center>Manta - Manabí - Ecuador</center></pre></NavLink>
                </nav>
            </footer>
        </div>
    );
}

export default ActividadesEstudiante;
