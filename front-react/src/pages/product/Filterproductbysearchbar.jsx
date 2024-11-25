import React from "react";
import { useLocation } from "react-router-dom";

export const Filterproductbysearchbar = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Obtenemos el producto del estado pasado por `navigate`

  // Validamos si existe un producto seleccionado
  if (!product) {
    return (
      <div className="container mt-5">
        <h3>No se seleccionó ningún producto</h3>
        <p>Por favor, selecciona un producto desde la barra de búsqueda.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow">
            <div className="bg-image">
              <img
                src={product.image || "https://eurelec.pt/img/noimage.jpg"}
                alt={product.name}
                className="card-img-top"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">{product.description}</p>
              <h5 className="text-primary">Precio: S/. {product.price}</h5>
              <a href="/add-to-cart" className="btn btn-primary mt-3">
                Hablar con el vendedor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
