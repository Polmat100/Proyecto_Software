import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserData } from "../../scripts/getUserData";

export const UserProfile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = getUserData();
    if (userData) setUser(userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/Login");
  };

  return (
    <>
      <main className="container my-4 px-5">
        <div className="row px-5">
          <div className="col-md-12 px-5">
            <div className="card shadow-sm mb-4 mx-3">
              <h4 className="card border border-light-subtle fw-bold rounded p-3 shadow bg-warning">
                Perfil de Usuario
              </h4>
              <div className="card-body text-center">
                <img
                  // src="https://via.placeholder.com/150"
                  src={user.profile_picture}
                  alt="Foto de perfil"
                  className="rounded-circle mb-3"
                  style={{ width: "150px" }}
                />
                <h5 className="card-title my-4">
                  {user.name} {user.lastname}
                </h5>
                <p className="card-text my-4">
                  <strong>Correo: </strong> {user.email}
                </p>
                <p className="card-text my-4">
                  <strong>Celular: </strong> {user.phone}
                </p>
                <p className="card-text my-4">
                  <strong>Dirección: </strong> {user.address}
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  <a href="#" className="btn btn-primary">
                    Editar Perfil
                  </a>
                  <Link
                    to="/Login"
                    className="btn btn-danger"
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-md-12">
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
          </div> */}
        </div>
      </main>
    </>
  );
};
