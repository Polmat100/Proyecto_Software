import React, { useState, useEffect } from "react";
import { ProductFormModal } from "../../components/ProductFormModal";

export const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [productModal, setProductModal] = useState(false);

  const showModal = () => setProductModal(true);
  const closeModal = () => setProductModal(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="p-5 bg-body-secondary">
        <div className="mb-5 bg-light container border border-light-subtle rounded-4 py-5 shadow">
          <h5>Agrega un nuevo producto a la venta</h5>
          <br />
          <button
            type="button"
            className="btn btn-outline-success btn-lg"
            onClick={showModal}
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
          <ProductFormModal closeModal={closeModal}></ProductFormModal>
        )}
        {productModal && <div className="modal-backdrop fade show"></div>}

        <h3 className="card border border-light-subtle fw-bold rounded p-3 shadow bg-warning">
          MIS PUBLICACIONES
        </h3>
        <div className="d-flex justify-content-center row">
          <div className="col-md-10">
            {posts.map((post) => (
              <div
                key={post.id}
                className="row p-2 bg-white rounded-4 border border-3 my-5 shadow"
              >
                <div className="col-md-3 mt-1">
                  <img
                    className="img-fluid img-responsive rounded product-image"
                    src={post.imageUrl}
                    alt={post.title}
                    style={{ maxWidth: "80%", height: "auto" }}
                  />
                </div>
                <div className="col-md-6 mt-1 d-flex flex-column justify-content-between">
                  <div>
                    <h5>{post.name || post.title}</h5>
                    <div className="mt-1 mb-1 spec-1">
                      <p>{post.description}</p>
                    </div>
                    <div className="mt-1 mb-1 spec-1">
                      <p className="text-danger fw-bold">{post.category}</p>
                    </div>
                    <div className="mt-1 mb-1 spec-1">
                      <p className="text-success fw-semibold">{post.date}</p>
                    </div>
                  </div>
                  <div className="align-items-center align-content-center mt-2">
                    <h4 className="">S/. {post.price}</h4>
                  </div>
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                  <div className="d-flex flex-column">
                    <button
                      className="btn btn-primary my-2 border border-dark-subtle fw-bold"
                      type="button"
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger my-2 border border-dark-subtle fw-bold"
                      type="button"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
