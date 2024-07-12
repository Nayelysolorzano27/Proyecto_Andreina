import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logou from '../img/logouleam.jpg';
import '../styles/style.css';
import '../styles/login-studen.css';

function LoginT() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        correo: '',
        contraseña: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const storedData = JSON.parse(localStorage.getItem('userDataT'));
        if (!storedData) {
            alert('No hay usuarios registrados. Regístrate primero.');
            return;
        }

        const { correo, contraseña } = formData;

        if (correo === storedData.correo && contraseña === storedData.contraseña) {
            alert('Inicio de sesión exitoso.');
            navigate('/MenuT');
        } else {
            alert('Correo o contraseña incorrectos. Inténtalo de nuevo.');
        }
    };

    return (
        <div>
            <header>
                <div className="LogoUleam">
                    <img src={logou} alt="logoU" />
                </div>
                <nav>
                    <NavLink to="/"><center><h3>Pagina Principal</h3></center></NavLink>
                    <NavLink to="/loginini"><center><h3>Atras</h3></center></NavLink>
                </nav>
                
                <div className="login-form">
                    <h1>Iniciar Sesión</h1>
                    <h1>DOCENTE</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                id="UserName"
                                name="correo"
                                value={formData.correo}
                                onChange={handleChange}
                                required
                            />
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="form-group log-status">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                id="Passwod"
                                name="contraseña"
                                value={formData.contraseña}
                                onChange={handleChange}
                                required
                            />
                            <span className="icon-eye">
                                <i className="fa-solid fa-eye-slash"></i>
                            </span>
                        </div>
                        <a className="link" href="#">Forgot your password?</a>
                        <NavLink to="/registr">Registro</NavLink>
                        <div className="button-container">
                            <button type="submit" className="log-btn">Iniciar sesión</button>
                        </div>
                    </form>
                </div>
            </header>
        </div>
    );
}

export default LoginT;
