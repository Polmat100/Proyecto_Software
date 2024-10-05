import { Header } from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export const Home = () => {
  //Cuando el back este listo, se realizaran las peticiones para obtener estos datos
  //Array ejemplo de PRODUCTOS para crear las cards
  const products = [
    {
      i: 1,
      name: "PRODUCT 1",
      description:
        "This is a great product, it's what you need. Please buy it! I need money",
      price: 20.3,
    },
    {
      i: 2,
      name: "PRODUCT 2",
      description:
        "This is a great product, it's what you need. Please buy it! I need money",
      price: 20.3,
    },
    {
      i: 3,
      name: "PRODUCT 3",
      description:
        "This is a great product, it's what you need. Please buy it! I need money",
      price: 20.3,
    },
    {
      i: 4,
      name: "PRODUCT 4",
      description:
        "This is a great product, it's what you need. Please buy it! I need money",
      price: 20.3,
    },
    {
      i: 5,
      name: "PRODUCT 5",
      description:
        "This is a great product, it's what you need. Please buy it! I need money",
      price: 20.3,
    },
    {
      i: 6,
      name: "PRODUCT 6",
      description:
        "This is a great product, it's what you need. Please buy it! I need money",
      price: 20.3,
    },
    {
      i: 7,
      name: "PRODUCT 7",
      description:
        "This is a great product, it's what you need. Please buy it! I need money",
      price: 20.3,
    },
    {
      i: 8,
      name: "PRODUCT 8",
      description:
        "This is a great product, it's what you need. Please buy it! I need money",
      price: 20.3,
    },
  ];
  //Array ejemplo para CATEGORIAS
  const categories = [
    {
      id: 1,
      name: "Deporte",
      description:
        "This is a description about the category. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, soluta.",
    },
    {
      id: 2,
      name: "Estudio",
      description:
        "This is a description about the category. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, soluta.",
    },
    {
      id: 3,
      name: "Hogar",
      description:
        "This is a description about the category. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, soluta.",
    },
    {
      id: 4,
      name: "Moda",
      description:
        "This is a description about the category. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, soluta.",
    },
    {
      id: 5,
      name: "Tecnologia",
      description:
        "This is a description about the category. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, soluta.",
    },
  ];

  return (
    <>
      <Header></Header>

      <div className="text-center container py-5">
        <h3 className="mt-4 mb-5">
          <strong>PRODUCTOS</strong>
        </h3>
        <div className="row">
          {products.map((product) => (
            <div key={product.i} className="col-lg-4 col-md-12 mb-4">
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
                  <p className="text-danger">Category A</p>
                  <h6>Precio: S/.{product.price}</h6>
                </div>
                <Link
                  to="/ProductDetails"
                  className="text-light py-3 btn-details"
                >
                  <strong>VER DETALLES</strong>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary btn-sm px-5 mt-3">
          Cargar Mas ...
        </button>
      </div>
      <div className="bg-custom p-5 d-flex align-items-center">
        <div className="px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="600"
            height="400"
            fill="currentColor"
            className="bi bi-image"
            viewBox="0 0 16 16"
          >
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
          </svg>
        </div>
        <div className="container d-flex flex-column align-items-center">
          <h4>
            <strong className="lh-base">
              CONÉCTATE CON DISTINTAS PERSONAS DESCUBRE UNA NUEVA FORMA DE
              COMERCIO CON NUESTRA PLATAFORMA
            </strong>
          </h4>
          <ul className="lh-lg fw-light my-4">
            <li>✔ Conectate fácilmente con vendedores y compradores.</li>
            <li>✔ Explora una amplia variedad de productos.</li>
            <li>✔ Vende tus productos de forma rápida y sencilla</li>
            <li>
              ✔ Disfruta de un espacio seguro y amigable para tus intercambios.
            </li>
          </ul>
          <div className="d-grid col-6 mx-auto my-3">
            <p>¡Empieza hoy y disfruta vender y comprar!</p>
            <Link
              to={"/UserImbox"}
              className="btn btn-warning py-3"
              type="button"
            >
              <strong> Ir a mi IMBOX</strong>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-5 border-top">
        <h3>
          <strong>Categorias</strong>
        </h3>
        <div
          className="row m-4 pt-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "30px",
          }}
        >
          {categories.map((category, key) => (
            <Link
              to={`/${category.name}`}
              key={category.id}
              className="card text-center border-0 shadow rounded-0 p-4 card-custom"
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-bookmark mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                </svg>
              </div>
              <div className="card-body my-4">
                <h4 className="card-title fw-bold my-4">{category.name}</h4>
                <p className="card-text mt-4">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
