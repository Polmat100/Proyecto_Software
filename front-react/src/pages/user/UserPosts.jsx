import React, { useEffect, useState } from "react";
import { ProductFormModal } from "../../components/ProductFormModal";
import { Link } from "react-router-dom";

const URLUSERPOSTS = "http://localhost:8080/api/products";
const URLPRODUCTIMAGES = "http://localhost:8080/api/product_images";

export const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [productImages, setProductImages] = useState({});
  const [productModal, setProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const getUserPosts = async () => {
    try {
      const [responseProducts, responseImages] = await Promise.all([
        fetch(URLUSERPOSTS),
        fetch(URLPRODUCTIMAGES),
      ]);

      if (!responseProducts.ok || !responseImages.ok) {
        throw new Error("Error en la respuesta de la API");
      }

      const dataProducts = await responseProducts.json();
      const dataImages = await responseImages.json();

      setPosts(dataProducts);

      const imagesByProductId = dataImages.reduce((acc, image) => {
        const productId = image.product.id;
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

  useEffect(() => {
    getUserPosts();
  }, []);

  const showModal = (product = null) => {
    setEditingProduct(product);
    setProductModal(true);
  };

  const closeModal = () => {
    setProductModal(false);
    setEditingProduct(null);
  };

  const deleteProduct = async (productId) => {
    
    const confirmed = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (!confirmed) return;

    try {
      const response = await fetch(`${URLUSERPOSTS}/${productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPosts(posts.filter((post) => post.id !== productId));
      } else {
        console.error("Error al eliminar el producto");
      }
    } catch (error) {
      console.error("Error al eliminar el producto", error);
    }
  };

  return (
    <div className="p-5 bg-body-secondary">
      <div className="mb-5 bg-light container border border-light-subtle rounded-4 py-5 shadow">
        <h5>Agrega un nuevo producto a la venta</h5>
        <br />
        <button
          type="button"
          className="btn btn-outline-success btn-lg"
          onClick={() => showModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-plus-square-fill mb-2"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
          </svg>
          <h4>NUEVA PUBLICACION</h4>
        </button>
      </div>

      {productModal && (
        <ProductFormModal
          closeModal={closeModal}
          product={editingProduct} 
        ></ProductFormModal>
      )}
      {productModal && <div className="modal-backdrop fade show"></div>}

      <div className="container py-5">
        <h3 className="text-center mt-4 mb-5">
          <strong>Mis Publicaciones</strong>
        </h3>
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-lg-6 col-md-12 mb-4">
              <div className="card shadow-sm border-0 rounded-3 d-flex flex-row">
                <img
                  src={productImages[post.id]?.[0] || "https://via.placeholder.com/300x200"}
                  alt={post.name}
                  className="card-img-start rounded-start"
                  style={{ width: "200px", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5
                    className="card-title text-truncate"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {post.name}
                  </h5>
                  <p
                    className="card-text text-muted"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {post.description.slice(0, 100)}...
                  </p>
                  <p className="text-danger">{post.category.name}</p>
                  <h6 className="text-success">S/.{post.price}</h6>

                  <div className="mt-3">
                    <button
                      onClick={() => showModal(post)} 
                      className="btn btn-warning me-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteProduct(post.id)} 
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
