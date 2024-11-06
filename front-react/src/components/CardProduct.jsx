import React from "react";
import { Link } from "react-router-dom";

export const CardProduct = ({ product }) => {
  return (
    <>
      <div key={product.id} className="col-lg-4 col-md-12 mb-4">
        <div className="card shadow mx-2" style={{ overflow: "hidden" }}>
          <div className="bg-image">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
              className="w-100"
            />
          </div>
          <div className="card-body">
            <Link to="/ProductDetails" className="text-reset">
              <h5 className="card-title mb-3">{product.name}</h5>
            </Link>
            <hr />
            <p>{product.description}</p>
            <hr />
            <p className="text-danger">{product.category.name}</p>
            <h6>Precio: S/.{product.price}</h6>
          </div>
          <Link to="/ProductDetails" className="text-light py-3 btn-details">
            <strong>VER DETALLES</strong>
          </Link>
        </div>
      </div>
    </>
  );
};
