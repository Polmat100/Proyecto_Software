import React from "react";
import { Link } from "react-router-dom";

export const UserProfile = () => {
  return (
    <>
      <main className="container my-4 ">
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow-sm mb-4">
              <h4 className="card border border-light-subtle fw-bold rounded p-3 shadow bg-warning">
                Perfil de Usuario
              </h4>
              <div className="card-body text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Foto de perfil"
                  className="rounded-circle mb-3"
                  style={{ width: "150px" }}
                />
                <h5 className="card-title">
                  <p>Pedro Martinez Molca</p>
                </h5>
                <p className="card-text">Correo: usuario@utp.edu.pe</p>
                <p className="card-text">Contraseña: ************</p>
                <p className="card-text">Fecha de Nacimiento: 25/13/2025</p>
                <p className="card-text">Género: ---------</p>
                <p className="card-text">Celular: 999444555</p>
                <p className="card-text">Dirección: Jiron San Juan, Arequipa</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  <a href="#" className="btn btn-primary">
                    Editar Perfil
                  </a>
                  <Link to="/Login" className="btn btn-danger">
                    Cerrar Sesión
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            {/* Historial de Compras y Ventas */}
            <div className="card shadow-sm">
              <h4 className="card border border-light-subtle fw-bold rounded p-3 shadow bg-warning">
                Historial de Compras
              </h4>
              <div className="card-body">
                <ul className="list-group mb-3">
                  <li className="list-group-item">
                    <div className="cart mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="/public/img/Electronica.jpeg"
                            className="img-fluid rounded-start "
                            alt="ImagenProducto"
                            style={{ width: "300px", height: "auto" }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="cart-body">
                            <h5 className="cart-title">
                              Producto 1 - PlayStation 5
                            </h5>
                            <p className="cart-text">
                              Consola de videojuegos PlayStation 5 desarrollada
                              por SONY
                            </p>
                            <p className="card-text">Fecha: 13/09/2024</p>
                            <p className="card-text">Cantidad: 1</p>
                            <p className="text-fin">
                              <strong>Precio Unitario: S/2200.00</strong>
                            </p>
                            <p
                              className="text-fin"
                              style={{ fontSize: "1.5rem" }}
                            >
                              <strong>Precio Total: S/2200.00</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="cart mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="/public/img/Samsung S24+.jfif"
                            className="img-fluid rounded-start"
                            alt="ImagenProducto"
                            style={{ width: "300px", height: "auto" }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="cart-body">
                            <h5 className="cart-title">
                              Producto 2 - Celular Samsung S24+
                            </h5>
                            <p className="cart-text">
                              Celular de última generación 256gb
                            </p>
                            <p className="card-text">Fecha: 13/09/2024</p>
                            <p className="card-text">Cantidad: 1</p>
                            <p className="text-fin">
                              <strong>Precio Unitario: S/2200.00</strong>
                            </p>
                            <p
                              className="text-fin"
                              style={{ fontSize: "1.5rem" }}
                            >
                              <strong>Precio Total: S/2200.00</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <h4 className="card border border-light-subtle fw-bold rounded p-3 shadow bg-warning">
                  Historial de Ventas
                </h4>
                <ul className="list-group mb-3">
                  <li className="list-group-item">
                    <div className="cart mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="/public/img/Electronica.jpeg"
                            className="img-fluid rounded-start"
                            alt="ImagenProducto"
                            style={{ width: "300px", height: "auto" }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="cart-body">
                            <h5 className="cart-title">
                              Producto 1 - PlayStation 5
                            </h5>
                            <p className="cart-text">
                              Consola de videojuegos PlayStation 5 desarrollada
                              por SONY
                            </p>
                            <p className="card-text">Fecha: 13/09/2024</p>
                            <p className="card-text">Cantidad: 1</p>
                            <p className="text-fin">
                              <strong>Precio Unitario: S/2200.00</strong>
                            </p>
                            <p
                              className="text-fin"
                              style={{ fontSize: "1.5rem" }}
                            >
                              <strong>Precio Total: S/2200.00</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item ">
                    <div className="cart mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="/public/img/Samsung S24+.jfif"
                            className="img-fluid rounded-start"
                            alt="ImagenProducto"
                            style={{ width: "300px", height: "auto" }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="cart-body">
                            <h5 className="cart-title">
                              Producto 2 - Celular Samsung S24+
                            </h5>
                            <p className="cart-text">
                              Celular de última generación 256gb
                            </p>
                            <p className="card-text">Fecha: 13/09/2024</p>
                            <p className="card-text">Cantidad: 1</p>
                            <p className="text-fin">
                              <strong>Precio Unitario: S/2200.00</strong>
                            </p>
                            <p
                              className="text-fin"
                              style={{ fontSize: "1.5rem" }}
                            >
                              <strong>Precio Total: S/2200.00</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
