import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logouleam from '../img/logouleam.jpg'; // Asegúrate de importar la imagen correcta
import '../styles/style.css'; // Asegúrate de importar el archivo de estilos CSS correcto

function AsistenciaTutorias() {
    const [tutorias, setTutorias] = useState([]);
    const [nombreEstudiante, setNombreEstudiante] = useState('');
    const [cedulaEstudiante, setCedulaEstudiante] = useState('');
    const [nombreProfesor, setNombreProfesor] = useState('');
    useEffect(() => {
        // Obtener tutorías almacenadas en localStorage
        const storedTutorias = JSON.parse(localStorage.getItem('tutorias')) || [];
        setTutorias(storedTutorias);

        // Obtener datos del estudiante desde localStorage
        const userDataE = JSON.parse(localStorage.getItem('userDataE'));
        if (userDataE) {
            setNombreEstudiante(`${userDataE.nombres} ${userDataE.apellidos}`);
            setCedulaEstudiante(userDataE.cedula);
        }
        const tutorData = JSON.parse(localStorage.getItem('userDataT'));
        if (tutorData) {
            setNombreProfesor(`${tutorData.nombres} ${tutorData.apellidos}`);
        }
    }, []);

    return (
        <div>
            <header>
                <div className="logo">
                    <img src={logouleam} alt="Logo ULEAM" />
                </div>
                <nav>
                    <NavLink to="/MenuE"><button><h3>Estudiante</h3></button></NavLink>
                </nav>
            </header>
            <div className="cuerpo">
                <br /><br /><br />
                <h1>
                    <center><strong>Asistencia a Tutorías</strong></center>
                </h1>
                <br />
                <center>
                    <div className="Tutorias">
                        <div id="main">
                            <table border="3">
                                <thead>
                                    <tr>
                                        <th className="colm1">Cédula</th>
                                        <th className="colm2">Nombre</th>
                                        <th className='colm3'>Tareas</th>
                                        <th className="colm5">Fecha Tutoría</th>
                                        <th className="colm6">Modalidad</th>
                                        <th className="colm7">Tipo Tutoría</th>
                                        <th className="colm8">Tutor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tutorias.map((tutoria, index) => (
                                        <tr key={index}>
                                            <td>{cedulaEstudiante}</td>
                                            <td>{nombreEstudiante}</td>
                                            <td>{tutoria.tareas}</td>
                                            <td>{tutoria.date}</td>
                                            <td>{tutoria.tipo}</td>
                                            <td>{tutoria.tiempo}</td>
                                            <td>{nombreProfesor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </center>
            </div>
            <div className="Botones">
                <br />
            </div>
            <footer>
                <div className="logo2">
                    <img src={logouleam} alt="Logo ULEAM" />
                </div>
                <nav className="navv">
                    <a href="#"><pre><center>ULEAM @ Copyright 2022, Todos los derechos reservados - Universidad Laica Eloy Alfaro de Manabí</center></pre></a>
                    <a href="#"><pre><center>Dirección: Av. Circunvalación - Vía a San Mateo</center></pre></a>
                    <a href="#"><pre><center>Manta - Manabí - Ecuador</center></pre></a>
                </nav>
            </footer>
        </div>
    );
}

export default AsistenciaTutorias;
