import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
    

    return (
        <div className="container mt-2">
           <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="110"
              fill="currentColor"
              className="bi bi-shop-window mb-4"
              viewBox="0 0 16 16"
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5" />
            </svg>
            <h2 className="text-center mb-4">Registrate para empezar a comprar y vender!</h2>

<form className="w-50 mx-auto">
    <div className="row">
        <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">Nombre</label>
            <input
                type="text"
                className="form-control"
                id="firstName"
                required
            />
        </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">Apellido</label>
            <input
                type="text"
                className="form-control"
                id="lastName"
                required
            />
        </div>
    </div>

    <div className="row">
        <div className="col-md-6 mb-3">
            <label htmlFor="phone" className="form-label">Teléfono</label>
            <input
                type="tel"
                className="form-control"
                id="phone"
                required
            />
        </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
                type="email"
                className="form-control"
                id="email"
                required
            />
        </div>
    </div>

    <div className="row">
        <div className="col-md-6 mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
                type="password"
                className="form-control"
                id="password"
                required
            />
        </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
            <input
                type="password"
                className="form-control"
                id="confirmPassword"
                required
            />
        </div>
    </div>

    <div className="row">
        <div className="col-md-6">
            <button type="submit" className="btn bg-header-custom pt-2 btn-primary w-100 mb-4">Registrarse</button>
        </div>
        <div className="col-md-6">
            <Link to="/login" className="btn btn-secondary w-100 mb-4 text-light">Volver</Link> 
        </div>
    </div>
</form>
</div>
    );
};