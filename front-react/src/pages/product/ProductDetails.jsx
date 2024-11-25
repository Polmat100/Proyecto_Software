import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ImgStyle.css";

export const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(
    "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
  );

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  return (
    <>
      <div className="m-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Hogar</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Tecnologia</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Product 1
            </li>
          </ol>
        </nav>
      </div>
      <div className="container mb-5 ">
        <div className="row d-flex flex-row">
          <div className="col-md-6 product-image ">
            <img
              className="img-fluid main-image"
              src={mainImage}
              alt="Product"
            />
          </div>
          <div className=" col-md-2 product-small d-flex order-md-first flex-md-column justify-content-center">
            <img
              className="touchme img-fluid border border-dark-subtle rounded-4 "
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
              alt="Product Small 1"
              onClick={() =>
                handleImageClick(
                  "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
                )
              }
            />
            <img
              className="img-fluid border border-dark-subtle rounded-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
              alt="Product Small 2"
              onClick={() =>
                handleImageClick(
                  "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                )
              }
            />
            <img
              className="img-fluid border border-dark-subtle rounded-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/14.webp"
              alt="Product Small 3"
              onClick={() =>
                handleImageClick(
                  "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/14.webp"
                )
              }
            />
          </div>
          <div className="col-md-5 p-5 shadow-lg p-3 mb-5 bg-white rounded text-start">
            <div>
              <h6 className="mb-3 text-secondary">
                Fecha de publicacion XX/XX/XXXX
              </h6>
              <h2 className="mb-3 card border border-light-subtle fw-bold rounded p-3 shadow bg-warning">
                Product 1
              </h2>
              <h5 className="mb-3 text-secondary">Precio S/.</h5>
              <Link to="/UserImbox">
                <div className="btn text-light py-2 btn-details">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-chat-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                  </svg>{" "}
                  Iniciar Chat{" "}
                </div>
              </Link>
              <div className="text-start">
                <h2 className="mb-4">Detalles</h2>
                <div
                  className="accordion accordion-border-color-black"
                  id="accordionExample"
                >
                  <div className="accordion-item ">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Descripción
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        This is a great product, it's what you need. Please buy
                        it! I need money.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Categoria: A
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Odit, error.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Estado: Nuevo
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid, inventore.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">Informacion del vendedor: </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "400px" }}>ProductDetails</div>
    </>
  );
};