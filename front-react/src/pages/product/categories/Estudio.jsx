import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { CardProduct } from "../../../components/CardProduct";

export const Estudio = () => {
  const URLPRODUCTS = "http://localhost:8080/api/products";
  const CATEGORYNAME = "Estudio";
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchProductsAndImages = async () => {
      try {
        const response = await fetch(URLPRODUCTS);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();

        // Filter category
        const filteredProducts = data.filter(
          (product) => product.category.name === CATEGORYNAME
        );

        setCategoryProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProductsAndImages();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/*Filter's options*/}
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
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-lg-9 mt-4">
            <div className="row">
              {categoryProducts.map((product) => (
                <CardProduct key={product.id} product={product}></CardProduct>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
