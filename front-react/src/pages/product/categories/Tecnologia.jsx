import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { CardProduct } from "../../../components/CardProduct";

export const Tecnologia = () => {
  const URLPRODUCTS = "http://localhost:8080/api/products";
  const CATEGORYNAME = "Tecnología";
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
                <Accordion.Header>Marcas y Tipos</Accordion.Header>
                <Accordion.Body>
                <ul className="list-unstyled">
                  {categoryProducts.map((product) => (
                  <li key={product.id}>
                      <input type="checkbox" id={`product-${product.id}`} />
                      <label htmlFor={`product-${product.id}`}>{product.name}</label>
                  </li>))}                                                            
                </ul> 
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>Precio</Accordion.Header>
                <Accordion.Body>  
                  <ul className="list-unstyled">
                    {/* Ordenar los productos por precio antes de mapear */}
                    {categoryProducts
                      .slice() // Hacemos una copia del array para evitar mutar el estado original
                      .sort((a, b) => a.price - b.price) // Ordenar por precio ascendente
                      .map((product) => (
                        <li key={product.id}>
                          <input type="checkbox" id={`price-${product.id}`} />
                          <label htmlFor={`price-${product.id}`}>S/. {product.price}</label>
                        </li>
                      ))}
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
