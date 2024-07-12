import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logou from '../img/logouleam.jpg';
import '../styles/registro.css';

function Registro() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        cedula: '',
        celular: '',
        correo: '',
        contraseña: '',
        confirmarContraseña: '',
        tipoUsuario: 'estudiante'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validarCedula = (cedula) => {
        if (cedula.length !== 10) return false;
        const digits = cedula.split('').map(Number);
        const verifier = digits.pop();
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            let num = digits[i];
            if (i % 2 === 0) {
                num *= 2;
                if (num > 9) num -= 9;
            }
            sum += num;
        }
        const calculatedVerifier = (10 - (sum % 10)) % 10;
        return verifier === calculatedVerifier;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let warnings = '';
        let entrar = false;

        if (!/^[a-zA-Z\s]+$/.test(formData.nombres)) {
            warnings += 'Los nombres solo deben contener letras\n';
            entrar = true;
        }

        if (!/^[a-zA-Z\s]+$/.test(formData.apellidos)) {
            warnings += 'Los apellidos solo deben contener letras\n';
            entrar = true;
        }

        if (!/^\d{10}$/.test(formData.celular)) {
            warnings += 'El número de teléfono debe tener 10 dígitos\n';
            entrar = true;
        }

        if (!validarCedula(formData.cedula)) {
            warnings += 'La cédula no es válida\n';
            entrar = true;
        }

        if (formData.contraseña !== formData.confirmarContraseña) {
            warnings += 'Las contraseñas no coinciden\n';
            entrar = true;
        }

        if (entrar) {
            alert(warnings);
            return;
        }

        const userData = {
            nombres: formData.nombres,
            apellidos: formData.apellidos,
            cedula: formData.cedula,
            celular: formData.celular,
            correo: formData.correo,
            contraseña: formData.contraseña,
            tipoUsuario: formData.tipoUsuario
        };

        if (formData.tipoUsuario === 'estudiante') {
            localStorage.setItem('userDataE', JSON.stringify(userData));
            console.log('Datos almacenados en localStorage:', userData);
            alert("Registro exitoso. Redirigiendo al inicio de sesión.");
            navigate('/login-studen');
        } else if (formData.tipoUsuario === 'tutor') {
            localStorage.setItem('userDataT', JSON.stringify(userData));
            console.log('Datos almacenados en localStorage:', userData);
            alert("Registro exitoso. Redirigiendo al inicio de sesión.");
            navigate('/login-teacher');
        }

    };

    return (
        <div>
            <header>
                <div className="LogoUleam">
                    <img src={logou} alt="logoU" />
                </div>
                <nav>
                    <center>
                        <NavLink to="/"><h3>Pagina Principal</h3></NavLink>
                        <NavLink to="/loginini"><h3>Atras</h3></NavLink>
                    </center>
                </nav>
            </header>
            <div className="contenedor-form">
                <div className="img-titulo-E">
                    <div className="contenedor-titulo">
                        <p className="titulo"><span>Registro</span> Usuario</p>
                    </div>
                </div>
                <div className="formulario">
                    <form id="form" onSubmit={handleSubmit}>
                        <div className="form-title">
                            <p><span className="registro">Registro</span> de <span className="estudiante">Estudiantes</span></p>
                            <p>Crea una cuenta para ingresar</p>
                        </div>
                        <div className="tipo-usuario">
                            <p>Seleccionar tipo de usuario:</p>
                            <select id="tipo-usuario" name="tipoUsuario" value={formData.tipoUsuario} onChange={handleChange} required>
                                <option value="estudiante">Estudiante</option>
                                <option value="tutor">Tutor</option>
                            </select>
                        </div>
                        <div>
                            <p>Ingresar Nombres:</p>
                            <input id="nombre" type="text" name="nombres" placeholder="Nombres" value={formData.nombres} onChange={handleChange} required />
                        </div>
                        <div>
                            <p>Ingresar Apellido:</p>
                            <input id="apellido" type="text" name="apellidos" placeholder="Apellido" value={formData.apellidos} onChange={handleChange} required />
                        </div>
                        <div>
                            <p>Ingresar Cedula:</p>
                            <input id="cedula" type="text" name="cedula" placeholder="N. de cedula" value={formData.cedula} onChange={handleChange} required />
                        </div>
                        <div>
                            <p>Ingresar Celular:</p>
                            <input id="celular" type="text" name="celular" placeholder="N. de celular" value={formData.celular} onChange={handleChange} required />
                        </div>
                        <div className="correo-password">
                            <p>Ingresar Correo electronico:</p>
                            <input id="correo" type="email" name="correo" placeholder="Correo electronico" value={formData.correo} onChange={handleChange} required />
                            <div className="pass">
                                <p>Ingrese Contraseña:</p>
                                <input id="password" type="password" name="contraseña" placeholder="Contraseña" value={formData.contraseña} onChange={handleChange} required />
                                <p>Confirmar Contraseña:</p>
                                <input id="passwordC" type="password" name="confirmarContraseña" placeholder="Confirmar contraseña" value={formData.confirmarContraseña} onChange={handleChange} required />
                            </div>
                        </div>
                        <p className="condiciones">Al registrarse aceptas nuestras <b>Condiciones</b> y <b>politicas de datos</b></p>
                        <div className="boton">
                            <button className="enviar" id="enviar" type="submit">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registro;
