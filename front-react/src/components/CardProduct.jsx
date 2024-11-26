import React from "react";
import { Link } from "react-router-dom";

export const CardProduct = ({ product }) => {
  return (
    <>
      <div key={product.id} className="col-lg-4 col-md-12 mb-4">
        <div className="card shadow mx-2" style={{ overflow: "hidden" }}>
          <div className="bg-image">
            <img
              src={product.imageUrls[0] || "https://eurelec.pt/img/noimage.jpg"}
              className="p-3"
              style={{ height: "200px" }}
            />
          </div>
          <div className="card-body">
            <Link to={`/ProductDetails/${product.id}`} className="text-reset">
              <h5 className="card-title mb-3">{product.name}</h5>
            </Link>
            <hr />
            <p>{product.description}</p>
            <hr />
            <p className="text-danger">{product.category.name}</p>
            <h6>Precio: S/.{product.price}</h6>
          </div>
          <Link
            to={`/ProductDetails/${product.id}`}
            className="text-light py-3 btn-details"
          >
            <strong>VER DETALLES</strong>
          </Link>
        </div>
      </div>
    </>
  );
};
