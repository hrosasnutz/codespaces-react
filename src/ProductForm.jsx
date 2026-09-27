function ProductForm({
  title,
  product,
  onChangeProduct,
  categories,
  onAccept,
  onCancel,
}) {
  return (
    <>
      <div
        id="productFormModal"
        className="modal fade"
        tabIndex="-1"
        aria-labelledby="titleProductFormModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form onSubmit={(e) => onAccept(e)}>
              <div className="modal-header">
                <h1 id="titleProductConfirmModal" className="modal-title fs-5">
                  {title} {product.id == null ? "": "ID: " + product.id}
                </h1>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row mb-3">
                    <label htmlFor="pName" className="form-label">
                      Nombre:
                    </label>
                    <input
                      id="pName"
                      type="text"
                      className="form-control"
                      value={product.name}
                      required
                      onChange={(e) => onChangeProduct("name", e.target.value)}
                    ></input>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="pCategory" className="form-label">
                      Categoría:
                    </label>
                    <select
                      id="pCategory"
                      className="form-select"
                      value={product.category}
                      onChange={(e) =>
                        onChangeProduct("category", e.target.value)
                      }
                      required
                    >
                      <option value="" disabled>
                        Elige una categoría
                      </option>
                      {categories.map((c) => {
                        return <option key={c}>{c}</option>;
                      })}
                    </select>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="pPrice" className="form-label">
                      Precio:
                    </label>
                    <input
                      id="pPrice"
                      type="number"
                      className="form-control"
                      value={product.price}
                      min="1"
                      step="0.01"
                      onChange={(e) => onChangeProduct("price", e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="pStock" className="form-label">
                      Stock:
                    </label>
                    <input
                      id="pStock"
                      type="number"
                      className="form-control"
                      min="1"
                      step="1"
                      value={product.stock}
                      onChange={(e) => onChangeProduct("stock", e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="row mb-4">
                    <div className="form-check">
                      <label htmlFor="pActive" className="form-check-label">
                        Activo:
                      </label>
                      <input
                        id="pActive"
                        type="checkbox"
                        className="form-check-input"
                        checked={product.active}
                        onChange={(e) =>
                          onChangeProduct("active", e.target.checked)
                        }
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  aria-label="Aceptar"
                >
                  Aceptar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onCancel}
                  data-bs-dismiss="modal"
                  aria-label="Cerrar"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductForm;
