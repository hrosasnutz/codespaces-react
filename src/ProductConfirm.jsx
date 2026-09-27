function ProductConfirm({ window, onAccept, onCancel }) {
  return (
    <>
      <div
        id="productConfirmModal"
        className="modal fade"
        tabIndex="-1"
        aria-labelledby="titleProductConfirmModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 id="titleProductConfirmModal" className="modal-title fs-5">
                {window.title}
              </h1>
            </div>
            <div className="modal-body">
              <p>{window.message}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                aria-label="Aceptar"
                onClick={onAccept}
              >
                Aceptar
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                aria-label="Cancelar"
                onClick={onCancel}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductConfirm;
