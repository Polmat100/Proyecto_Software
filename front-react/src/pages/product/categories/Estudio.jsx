import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Usaremos íconos para las flechas
import Accordion from "react-bootstrap/Accordion"; // Bootstrap para los acordeones

{
  /* Declaración del componente Estudio*/
}
export const Estudio = () => {
  const [productsEstudio, setProductEstudio] = useState([]);
  const [productImages, setProductImages] = useState([]); //Almacena las images como un objeto mapeado por ID de producto
  
  useEffect(() =>{
    const fetchProductsAndImages = async () => {
      try {
        const [responseProducts, responseImages] = await Promise.all([        
          fetch("http://localhost:8080/api/products"),
          fetch("http://localhost:8080/api/product_images")
        ]);
        
        if (!responseProducts.ok || !responseImages.ok) {
          throw new Error("Network response was not ok");
        }

        const dataProducts = await responseProducts.json();
        const dataImages = await responseImages.json(); 

         // Filtra solo los productos de la categoría "Deporte"
        const filteredProducts = dataProducts.filter(
          (product) => product.category && product.category.name=== "Estudio"
        );

        //setProductsDeporte(dataProducts);
        setProductEstudio(filteredProducts);
        
        //Mapea las imagenes por ID de producto
         const imagesByProductId = dataImages.reduce((acc, image) => {
          const productId = image.product.id; // Asegúrate de que tu API incluye el producto relacionado en cada imagen
          if (!acc[productId]) {
            acc[productId] = [];
          }
          acc[productId].push(image.imageUrl);
          return acc;
        }, {});

        setProductImages(imagesByProductId);        

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProductsAndImages();
  }, []);



  return (
    <>
      <div className="container-fluid">
        {/*Usa una clase Bootstrap para crear un contenedor que abarca todo el ancho de la pantalla(fluido)*/}
        <div className="row">
          {" "}
          {/*Organizamos el contenido en columnas*/}
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
          <div className="col-lg-9 mt-4">
            <div className="row">
              {productsEstudio.map((producte) => (
                <div key={producte.id} className="col-lg-4 col-md-6 mb-4">
                  <div
                    className="card shadow mx-2"
                    style={{ overflow: "hidden" }}
                  >
                    {/* Muestra la primera imagen del producto si esta disponible*/}
                    <div className="bg-image">
                      <img
                        src={productImages[producte.id]?.[0] || "https://eurelec.pt/img/noimage.jpg"}
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
                    <a
                      href="/add-to-cart"
                      className="text-light py-3 btn-add-to-cart"
                    >
                      <strong>Hablar con el vendedor</strong>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
