import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logouleam from '../img/logouleam.jpg'; // Asegúrate de importar la imagen correcta
import '../styles/style.css'; // Asegúrate de importar el archivo de estilos CSS correcto
import '../styles/EstilosAE2.css'; // Si necesitas estilos adicionales

function SubirActividades() {
    const [descripcion, setDescripcion] = useState('');

    const handleDescripcionChange = (e) => {
        setDescripcion(e.target.value);
    };

    const handleAceptarClick = () => {
        const tarea = {
            descripcion: descripcion,
            // Puedes agregar más campos aquí si es necesario
        };

        // Guardar tarea en localStorage o enviar a la página anterior de tareas
        const storedTareas = JSON.parse(localStorage.getItem('tareas')) || [];
        const nuevasTareas = [...storedTareas, tarea];
        localStorage.setItem('tareas', JSON.stringify(nuevasTareas));

        alert('Tarea subida exitosamente');
        setDescripcion(''); // Limpiar el estado después de subir la tarea
    };

    return (
        <div>
            <header>
                <div className="LogoUleam">
                    <img src={logouleam} alt="Logo ULEAM" />
                </div>
                <nav>
                    <NavLink to="#"><center><h3>Inicio</h3></center></NavLink>
                    <NavLink to="/MenuE"><button><h3>Estudiante</h3></button></NavLink>
                </nav>
            </header>
            <section className="Subir_Actividades">
                <div className="Titulo-Subir_Actividades">
                    <h1><center>Subir Actividades</center></h1>
                </div>
                <div className="Contenido-Subir_Actividad">
                    <form>
                        <div className="Descripcion">
                            <label htmlFor="idescripcion"><center>Descripción</center></label> <br />
                            <textarea
                                name="areadescripcion"
                                id="idescripcion"
                                value={descripcion}
                                onChange={handleDescripcionChange}
                            ></textarea>
                        </div>
                    </form>
                    <div className="Botones-Aceptar-Regresar">
                        <div className="B2-Regresar">
                            <NavLink to="/actividadesE"><button className="B2">Regresar</button></NavLink>
                        </div>                        
                        <div className="B1-Aceptar">
                            <NavLink to='/actividadesE'><button className="B1" onClick={handleAceptarClick}>Aceptar</button></NavLink>
                        </div>
                    </div>
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

export default SubirActividades;
