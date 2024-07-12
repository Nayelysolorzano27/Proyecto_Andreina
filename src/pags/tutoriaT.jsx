import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logouleam from '../img/logouleam.jpg';

function RegistroTutorias() {
    const [formulario, setFormulario] = useState({
        tema: '',
        horas: '',
        tareas: '',
        grupo: '',
        date: '',
        proxdate: '',
        observaciones: '',
        tipo: '',
        tiempo: ''
    });

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validación de campos (manten tu validación actual)

        // Guardar en localStorage
        const tutoria = {
            tema: formulario.tema,
            horas: formulario.horas,
            tareas: formulario.tareas,
            grupo: formulario.grupo,
            date: formulario.date,
            proxdate: formulario.proxdate,
            observaciones: formulario.observaciones,
            tipo: formulario.tipo,
            tiempo: formulario.tiempo
        };

        let tutorias = JSON.parse(localStorage.getItem('tutorias')) || [];
        tutorias.push(tutoria);
        localStorage.setItem('tutorias', JSON.stringify(tutorias));

        // Reiniciar el formulario
        setFormulario({
            tema: '',
            horas: '',
            tareas: '',
            grupo: '',
            date: '',
            proxdate: '',
            observaciones: '',
            tipo: '',
            tiempo: ''
        });

        alert('Tutoría registrada correctamente');
    };

    return (
        <div>
            <header className="nav">
                <div className="LogoUleam">
                    <img src={logouleam} alt="Logo ULEAM" />
                </div>
                <nav>
                    <NavLink to="/MenuT"><center><h3>Atras</h3></center></NavLink>
                </nav>
            </header>

            <div className="activities">
                <div className="title-activities">
                    <h1><center>Registro de tutorías</center></h1>
                </div>
                <div className="content_formulario">
                    <form className="formulario" onSubmit={handleSubmit}>
                        <div className="formulario__grupo" id="grupo__tema">
                            <div className="formulario__grupo-input">
                                <p className="formulario__input-error">Ingrese el tema</p>
                                <input
                                    type="text"
                                    name="tema"
                                    placeholder="Tema"
                                    className="formulario-input"
                                    id="tema"
                                    value={formulario.tema}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="formulario__grupo" id="grupo__time">
                            <div className="formulario__grupo-input">
                                <p className="formulario__input-error">Describa las horas trabajadas</p>
                                <input
                                    type="text"
                                    name="horas"
                                    placeholder="Horas de trabajo"
                                    className="formulario-input"
                                    id="horas"
                                    value={formulario.horas}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="formulario__grupo" id="grupo__tareas">
                            <div className="formulario__grupo-input">
                                <p className="formulario__input-error">Describa las tareas designadas</p>
                                <input
                                    type="text"
                                    name="tareas"
                                    placeholder="Tareas asignadas"
                                    className="formulario-input"
                                    id="tareas"
                                    value={formulario.tareas}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="formulario__grupo" id="grupo__group">
                            <div className="formulario__grupo-select">
                                <p className="formulario__input-error">Seleccione un grupo</p>
                                <label className="formulario__label"></label>
                                <select
                                    name="grupo"
                                    id="select"
                                    className="formulario-select"
                                    value={formulario.grupo}
                                    onChange={handleChange}
                                >
                                    <option value="">Grupos</option>
                                    <option value="Grupo 1">Grupo 1</option>
                                    <option value="Grupo 2">Grupo 2</option>
                                    <option value="Grupo 3">Grupo 3</option>
                                    <option value="Grupo 4">Grupo 4</option>
                                    <option value="Grupo 5">Grupo 5</option>
                                </select>
                            </div>
                        </div>

                        <div className="formulario__grupo" id="grupo__tutoria">
                            <div className="formulario__grupo-input">
                                <p className="formulario__input-error">Fecha de tutoría</p>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    className="formulario-input"
                                    value={formulario.date}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="formulario__grupo" id="grupo__proxtutoria">
                            <div className="formulario__grupo-input">
                                <p className="formulario__input-error">Fecha de próxima tutoría</p>
                                <input
                                    type="date"
                                    name="proxdate"
                                    id="proxdate"
                                    className="formulario-input"
                                    value={formulario.proxdate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="formulario__grupo" id="grupo__observaciones">
                            <div className="formulario__grupo-input">
                                <p className="formulario__input-error">Escriba las observaciones</p>
                                <input
                                    type="text"
                                    name="observaciones"
                                    placeholder="Observaciones"
                                    className="formulario-input"
                                    id="observaciones"
                                    value={formulario.observaciones}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="formulario__grupo" id="grupo__tipotutoria">
                            <div className="formulario__grupo-checkbox">
                                <h2>Tipo de tutoría</h2>
                                <div className="formulario__checkbox">
                                    <div className="formulario__checkbox-select">
                                        <p className="formulario__label">Presencial</p>
                                        <input
                                            type="radio"
                                            name="tipo"
                                            id="checkbox__presencial"
                                            className="formulario-input"
                                            value="Presencial"
                                            checked={formulario.tipo === 'Presencial'}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="formulario__checkbox-select">
                                        <p className="formulario__label">Virtual</p>
                                        <input
                                            type="radio"
                                            name="tipo"
                                            id="checkbox__virtual"
                                            className="formulario-input"
                                            value="Virtual"
                                            checked={formulario.tipo === 'Virtual'}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="formulario__grupo-checkbox">
                                <h2>Tiempo de tutoría</h2>
                                <div className="formulario__checkbox">
                                    <div className="formulario__checkbox-select">
                                        <p className="formulario__label">Total</p>
                                        <input
                                            type="radio"
                                            name="tiempo"
                                            id="checkbox-total"
                                            className="formulario-input"
                                            value="Total"
                                            checked={formulario.tiempo === 'Total'}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="formulario__checkbox-select">
                                        <p className="formulario__label">Parcial</p>
                                        <input
                                            type="radio"
                                            name="tiempo"
                                            id="checkbox-parcial"
                                            className="formulario-input"
                                            value="Parcial"
                                            checked={formulario.tiempo === 'Parcial'}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="formulario__grupo" id="grupo__button">
                            <div className="contenedor-button">
                                <div className="formulario__grupo-button">
                                    <div className="formulario__button">
                                        <input
                                            type="submit"
                                            name="confirmar"
                                            value="Confirmar"
                                            className="formulario-button"
                                            id="button-send"
                                        />
                                        <NavLink to="/MenuT">
                                            <input
                                                type="button"
                                                name="regresar"
                                                value="Regresar"
                                                className="formulario-button"
                                                id="button-back"
                                            />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegistroTutorias;
