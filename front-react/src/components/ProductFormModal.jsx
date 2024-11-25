import React, { useState } from 'react';

export const ProductFormModal = (props) => {
  const { closeModal } = props;


  const [product, setProduct] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    condition: '',
    imageUrl: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Producto a enviar:', product);
    closeModal();
  };

  return (
    <>
      <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content bg-body-secondary">
            <div className="modal-header px-4 text-bg-dark">
              <h5 className="modal-title">PUBLICA UN NUEVO PRODUCTO</h5>
              <button type="button" className="btn-close bg-white" onClick={closeModal}></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="card-body px-4 text-black">
                    <div className="mb-4">
                      <h6 className="text-start">TITULO:</h6>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={product.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <h6 className="text-start">DESCRIPCION:</h6>
                      <textarea
                        className="form-control"
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <div className="row mb-4">
                      <div className="col">
                        <div className="mb-4">
                          <h6 className="text-start">CATEGORIA:</h6>
                          <select
                            className="form-select"
                            name="category"
                            value={product.category}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="Tecnologia">Tecnología</option>
                            <option value="Hogar">Hogar</option>
                            <option value="Moda">Moda</option>
                            <option value="Deportes">Deportes</option>
                            <option value="Estudio">Estudio</option>
                          </select>
                        </div>
                      </div>
                      <div className="col">
                        <h6 className="text-start">PRECIO:</h6>
                        <div className="input-group mb-4">
                          <span className="input-group-text">S/.</span>
                          <input
                            type="number"
                            className="form-control"
                            name="price"
                            value={product.price}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h6 className="text-start">ESTADO:</h6>
                      <div className="form-check form-check-inline mx-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="condition"
                          id="nuevo"
                          value="Nuevo"
                          checked={product.condition === 'Nuevo'}
                          onChange={handleInputChange}
                          required
                        />
                        <label className="form-check-label" htmlFor="nuevo">
                          Nuevo
                        </label>
                      </div>
                      <div className="form-check form-check-inline mx-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="condition"
                          id="seminuevo"
                          value="Semi-Nuevo"
                          checked={product.condition === 'Semi-Nuevo'}
                          onChange={handleInputChange}
                          required
                        />
                        <label className="form-check-label" htmlFor="seminuevo">
                          Semi-Nuevo
                        </label>
                      </div>
                      <div className="form-check form-check-inline mx-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="condition"
                          id="buenestado"
                          value="Buen Estado"
                          checked={product.condition === 'Buen Estado'}
                          onChange={handleInputChange}
                          required
                        />
                        <label className="form-check-label" htmlFor="buenestado">
                          Buen Estado
                        </label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h6 className="text-start">SUBIR FOTO:</h6>
                      <input
                        type="file"
                        className="form-control"
                        name="imageUrl"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={closeModal}>
                  Cerrar
                </button>
                <button type="submit" className="btn btn-success">
                  PUBLICAR PRODUCTO
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};