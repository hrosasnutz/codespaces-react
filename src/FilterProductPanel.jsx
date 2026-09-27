function FilterProductPanel({ filters, onFilterChange, onSearch, onClear }) {
  return (
    <>
      <div className="row align-items-center mb-3">
        <div className="col-1 col-auto">
          <label htmlFor="fName" className="form-label">
            Nombre:
          </label>
        </div>
        <div className="col-11 col-auto">
          <input
            id="fName"
            type="text"
            placeholder="Nombre del producto."
            className="form-control"
            value={filters.name}
            onChange={(event) => onFilterChange("name", event.target.value)}
          ></input>
        </div>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-1 col-auto">
          <label htmlFor="fCategory" className="form-label">
            Categoría:
          </label>
        </div>
        <div className="col-5 col-auto">
          <select
            id="fCategory"
            name="category"
            placeholder="Categoría del producto."
            className="form-select"
            value={filters.category}
            onChange={(event) => onFilterChange("category", event.target.value)}
          >
            <option value="">Todos</option>
            <option value="SMARTPHONE">Smartphone</option>
            <option value="ACCESSORY">Accesorio</option>
            <option value="WEARABLE">Wearable</option>
            <option value="TABLET">Tablet</option>
          </select>
        </div>
        <div className="col-1 col-auto">
          <label htmlFor="fState" className="form-label">
            Estado:
          </label>
        </div>
        <div className="col-5 col-auto">
          <select
            id="fState"
            name="state"
            placeholder="Estado del producto."
            className="form-select"
            value={filters.state}
            onChange={(event) => onFilterChange("state", event.target.value)}
          >
            <option value="">Todos</option>
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>
        </div>
      </div>
      <div className="row align-items-center mb-5">
        <div className="col-2 col-auto d-grid gap-2">
          <button onClick={onSearch} className="btn btn-primary btn-lg">
            Buscar
          </button>
        </div>
        <div className="col-2 col-auto d-grid gap-2">
          <button onClick={onClear} className="btn btn-secondary btn-lg">
            Limpiar
          </button>
        </div>
        <div className="offset-6 col-2 col-auto d-grid gap-2">
          <button
            className="btn btn-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#productFormModal"
          >
            Nuevo
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterProductPanel;
