
import React, { useState, useEffect } from "react";
import { Header } from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Usaremos íconos para las flechas
import Accordion from 'react-bootstrap/Accordion'; // Bootstrap para los acordeones

{/*Declaración del componente Deporte*/ }
export const Deporte = () => {
  const [productsDeporte, setProductsDeporte] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProductsDeporte(data);
      } catch (error) {
        console.error('Error fetching sports products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
    <Header />
    <div className="container-fluid">{/*Usa una clase Bootstrap para crear un contenedor que abarca todo el ancho de la pantalla(fluido)*/}
      <div className="row"> {/*Organizamos el contenido en columnas*/}
        {/*Menú lateral de categorias*/}
        <div className="col-lg-3">
          <h3>Filtros</h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Marcas</Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li>
                    <input type="checkbox" id="brand1" />
                    <label htmlFor="brand1">Adidas</label>
                  </li>
                  <li>
                    <input type="checkbox" id="brand2" />
                    <label htmlFor="brand2">Diadora</label>
                  </li>
                  <li>
                    <input type="checkbox" id="brand2" />
                    <label htmlFor="brand2">Puma</label>
                  </li>
                  <li>
                    <input type="checkbox" id="brand2" />
                    <label htmlFor="brand2">Nike</label>
                  </li>
                  {/* Agregar más marcas según sea necesario */}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Precio</Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li>
                    <input type="checkbox" id="price1" />
                    <label htmlFor="price1">S/. 0 - 50</label>
                  </li>
                  <li>
                    <input type="checkbox" id="price2" />
                    <label htmlFor="price2">S/. 50 - 100</label>
                  </li>
                  {/* Agregar más rangos de precios si es necesario */}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="col-lg-9">
          <div className="row">
            {productsDeporte.map((producte) => (
              <div key={producte.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card shadow mx-2" style={{ overflow: "hidden" }}>
                  <div className="bg-image">
                    <img
                      src={producte.imageUrl}
                      width="300"
                      height="200"
                      alt={producte.name}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title mb-3">{producte.name}</h5>
                    <p>{producte.description}</p>
                    <h6>Precio: S/.{producte.price}</h6>
                  </div>
                  <a href="/add-to-cart" className="text-light py-3 btn-add-to-cart">
                    <strong>Agregar al carro</strong>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};
