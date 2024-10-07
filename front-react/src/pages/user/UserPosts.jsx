import React, { useState } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { ProductFormModal } from "../../components/ProductFormModal";

export const UserPosts = () => {
  //Array example for posts data
  const posts = [
    {
      id: 1,
      title: "Vintage Wooden Chair",
      description:
        "This beautifully crafted vintage wooden chair is a timeless piece that adds charm to any room. Made from high-quality oak, it features intricate carvings and a comfortable seat. Perfect for collectors or anyone looking to enhance their home decor.",
      price: 75.0,
      category: "Furniture",
      date: "2023-09-15",
    },
    {
      id: 2,
      title: "Mountain Bike",
      description:
        "Experience the thrill of the trails with this high-performance mountain bike. It features a lightweight aluminum frame, 21-speed gear system, and durable tires designed for rugged terrains. Ideal for both beginners and seasoned riders looking for adventure.",
      price: 350.0,
      category: "Sporting Goods",
      date: "2023-09-20",
    },
    {
      id: 3,
      title: "Smartphone - Latest Model",
      description:
        "Upgrade your tech with this brand new smartphone, still in its original box and never used. It boasts a stunning display, powerful processor, and an excellent camera for capturing life's moments. A perfect choice for anyone looking for a top-of-the-line device.",
      price: 800.0,
      category: "Electronics",
      date: "2023-09-25",
    },
    {
      id: 4,
      title: "Coffee Maker",
      description:
        "Brew your favorite coffee every morning with this top-rated coffee maker. It features multiple brewing options, a programmable timer, and a built-in grinder for fresh coffee grounds. Compact and stylish, it fits perfectly on any countertop, making it an essential kitchen appliance.",
      price: 40.0,
      category: "Home Appliances",
      date: "2023-09-30",
    },
  ];
  const [productModal, setProductModal] = useState(false);
  const showModal = () => setProductModal(true);
  const closeModal = () => setProductModal(false);

  return (
    <>
      <Header></Header>

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
                    src="https://i.imgur.com/HO8e9b8.jpg"
                  />
                </div>
                <div className="col-md-6 mt-1">
                  <h5>{post.title}</h5>
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
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                  <div className="d-flex flex-row align-items-center justify-content-center py-3">
                    <h4 className="">S/. {post.price}</h4>
                  </div>
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

      <Footer></Footer>
    </>
  );
};
