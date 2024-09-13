import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
      name: "CATEGORY 1",
      description:
        "This is a description about the category. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, soluta.",
    },
    {
      id: 2,
      name: "CATEGORY 2",
      description:
        "This is a description about the category. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, soluta.",
    },
    {
      id: 3,
      name: "CATEGORY 3",
      description:
        "This is a description about the category. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, soluta.",
    },
  ];

  return (
    <>
      <Header></Header>

      <div className="p-5">
        <h3>Productos</h3>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 my-4">
              <div className="card py-2 bg-warning-subtle">
                <div className="card-img-top">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="currentColor"
                    class="bi bi-laptop"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                  </svg>
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <strong>{product.name}</strong>
                  </div>
                  <div className="card-text">{product.description}</div>
                  <div className="card-text">
                    <strong>Precio: {product.price}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary btn-sm px-5">Cargar Mas ...</button>
      </div>
      <div className="p-5 border-top">
        <h3>Categorias</h3>
        <div className="row my-4">
          {categories.map((category) => (
            <div className="col-md-4">
              <div className="card d-flex flex-row p-4 bg-light">
                <div className="d-flex align-items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="currentColor"
                    class="bi bi-box"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                  </svg>
                </div>
                <div className="cardbody">
                  <div className="cart-title">
                    <strong>{category.name}</strong>
                  </div>
                  <br />
                  <div className="cart-title">{category.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border bg-secondary-subtle p-5">
        <h3>¿Cómo Vender?</h3>
        <div className="row gap-5 lh-lg pt-4">
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              class="bi bi-person-check"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
              <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
            </svg>
            <br />
            <strong>Paso 1</strong>
            <p>Crea una cuenta en nuestro portal, ingresa tus datos.</p>
          </div>
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              class="bi bi-images"
              viewBox="0 0 16 16"
            >
              <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z" />
            </svg>
            <br />
            <strong>Paso 2</strong>
            <p>Toma fotografias de tu producto</p>
          </div>
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              class="bi bi-card-checklist"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
              <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
            </svg>
            <br />
            <strong>Paso 3</strong>
            <p>
              Rellena todos los campos sugeridos sobre la informacion de tu
              producto
            </p>
          </div>
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              class="bi bi-clock-history"
              viewBox="0 0 16 16"
            >
              <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
              <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
              <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
            </svg>
            <br />
            <strong>Paso 4</strong>
            <p>Sube tu producto a la venta y espera un comprador</p>
          </div>
        </div>
      </div>
      <div className="border p-5">
        <h3>¿Cómo comprar?</h3>
        <div className="row gap-5 lh-lg pt-4">
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              class="bi bi-search-heart"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
              <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
            </svg>
            <br />
            <strong>Paso 1</strong>
            <p>Navega y descubre tus productos favoritos.</p>
          </div>
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              class="bi bi-cart-check"
              viewBox="0 0 16 16"
            >
              <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <br />
            <strong>Paso 2</strong>
            <p>
              Añade y edita tu carrito de compras la veces que sean necesarias
            </p>
          </div>
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              class="bi bi-list-check"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"
              />
            </svg>
            <br />
            <strong>Paso 3</strong>
            <p>Registra tus datos para ejecutar la compra.</p>
          </div>
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              class="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            <br />
            <strong>Paso 4</strong>
            <p>Acepta la compra y habras culminado</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
