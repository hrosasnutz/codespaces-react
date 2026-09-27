function ProductTable({ products, onEditProduct, onDeleteProduct }) {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered border-primary border-3">
          <thead>
            <tr className="table-primary">
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Estado</th>
              <th>Opción</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>S/.{p.price}</td>
                <td>{p.stock}</td>
                <td>{p.active ? "Activo" : "Inactivo"}</td>
                <td>
                      <button type="button" 
                        className="btn btn-primary"
                        aria-label={`Editar ${p.name}`}
                        title="Editar"
                        onClick={e => onEditProduct(p)}
                        data-bs-toggle="modal"
                        data-bs-target="#productFormModal">
                        <i className="bi bi-pencil-square" aria-hidden="true"></i>
                      </button>

                      <button type="button"
                        className="btn btn-danger"
                        aria-label={`Eliminar ${p.name}`}
                        title="Eliminar"
                        onClick={e => onDeleteProduct(p)}
                        data-bs-toggle="modal" 
                        data-bs-target="#productConfirmModal">
                        <i className="bi bi-trash" aria-hidden="true"></i>
                      </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductTable;
