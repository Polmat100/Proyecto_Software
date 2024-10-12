export const ProductFormModal = (props) => {
  const { closeModal } = props;

  return (
    <>
      <div
        className="modal fade show"
        tabIndex="-1"
        style={{ display: "block" }}
      >
        <div className="modal-dialog ">
          <div className="modal-content bg-body-secondary">
            <div className="modal-header px-4 text-bg-dark ">
              <h5 className="modal-title">PUBLICA UN NUEVO PRODUCTO</h5>
              <button
                type="button"
                className="btn-close bg-white"
                onClick={closeModal}
              ></button>
            </div>
            <form className="">
              <div className="modal-body">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="card-body px-4 text-black">
                    <div className="mb-4">
                      <h6 className="text-start">TITULO:</h6>
                      <input type="text" className="form-control" required />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="mb-4">
                      <h6 className="text-start">DESCRIPCION:</h6>
                      <textarea
                        className="form-control"
                        id="floatingTextarea2"
                        required
                      ></textarea>
                      <div className="form-text">
                        Ingrese una descripcion corta para tu publicacion
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col">
                        <div className="mb-4">
                          <h6 className="text-start">CATEGORIA:</h6>
                          <select name="" id="" className="form-select">
                            <option value="">Tecnologia</option>
                            <option value="">Hogar</option>
                            <option value="">Moda</option>
                            <option value="">Deportes</option>
                            <option value="">Estudio</option>
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
                          name="state"
                          id="nuevo"
                          value=""
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
                          name="state"
                          id="seminuevo"
                          value=""
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
                          name="state"
                          id="buenestado"
                          value=""
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="buenestado"
                        >
                          Buen Estado
                        </label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h6 className="text-start">SUBIR FOTO:</h6>
                      <input type="file" className="form-control" required />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={closeModal}
                >
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
