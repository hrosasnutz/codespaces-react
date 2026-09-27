import "./App.css";
import { useState } from "react";
import data from "./data.js";
import ProductTable from "./ProductTable.jsx";
import FilterProductPanel from "./FilterProductPanel.jsx";
import ProductForm from "./ProductForm";
import ProductConfirm from "./ProductConfirm";
import { Modal } from "bootstrap";

function App() {
  const [nextId, setNextId] = useState(
    () => data.reduce((max, p) => Math.max(max, p.id), 0) + 1,
  );
  const [products, setProducts] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [filters, setFilters] = useState({
    name: "",
    category: "",
    state: "",
  });
  const categories = [...new Set(data.map((product) => product.category))];
  const [product, setProduct] = useState({
    id: null,
    name: "",
    category: "",
    price: 0.0,
    stock: 0,
    active: true,
  });
  const [productToDelete, setProductToDelete] = useState(null);
  const [window, setWindow] = useState({
    title: "",
    message: "",
  });

  function matchProduct(filter, productItem) {
    const matchesName = productItem.name
      .toLowerCase()
      .includes(filter.name.toLowerCase());

    const matchesCategory =
      !filter.category || productItem.category == filter.category;

    const matchesState =
      filter.state === "" || String(productItem.active) === filter.state;

    return matchesName && matchesCategory && matchesState;
  }

  function handleSearch() {
    const filtered = products.filter((p) => {
      return matchProduct(filters, p);
    });
    setFilteredProducts(filtered);
  }

  function handleFilterClear() {
    setFilters({
      name: "",
      category: "",
      state: "",
    });
    setFilteredProducts(products);
  }

  function handleFilterChange(field, value) {
    setFilters((current) => ({ ...current, [field]: value }));
  }

  function handleProductChange(field, value) {
    setProduct((current) => ({ ...current, [field]: value }));
  }

  function handleProductAccept(event) {
    event.preventDefault();

    const isEditing = product.id !== null;
    const savedProduct = {
      ...product,
      id: isEditing ? product.id : nextId,
      price: Number(product.price),
      stock: Number(product.stock),
    };

    const updatedProducts = isEditing
      ? products.map((item) =>
          item.id === savedProduct.id ? savedProduct : item,
        )
      : [...products, savedProduct];

    setProducts(updatedProducts);
    setFilteredProducts(
      updatedProducts.filter((item) => matchProduct(filters, item)),
    );

    if (!isEditing) {
      setNextId((current) => current + 1);
    }

    setProduct({
      id: null,
      name: "",
      category: "",
      price: 0,
      stock: 0,
      active: true,
    });

    const modalElement = document.getElementById("productFormModal");
    if (modalElement) {
      Modal.getOrCreateInstance(modalElement).hide();
    }
  }

  function handleProductCancel() {
    setProduct({
      id: null,
      name: "",
      category: "",
      price: 0,
      stock: 0,
      active: true,
    });
  }

  function handleProductEdit(productSelected) {
    setProduct(productSelected);
  }

  function handleProductDelete(productSelected) {
    setProductToDelete(productSelected);
    setWindow({
      title: "Aviso",
      message: "¿Esta seguro de eliminar el producto seleccionado?",
    });
  }

  function handleProductDeleteAccept() {
    if (!productToDelete) return;
    setProducts((current) =>
      current.filter((p) => p.id !== productToDelete.id),
    );
    setFilteredProducts((current) =>
      current.filter((p) => p.id !== productToDelete.id),
    );
    setProductToDelete(null);
  }

  function handleProductDeleteCancel() {
    setProductToDelete(null);
    setWindow({
      title: "",
      message: "",
    });
  }

  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h1>GESTIÓN DE PRODUCTOS</h1>
          </div>
        </div>
        <FilterProductPanel
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
          onClear={handleFilterClear}
        />
        <ProductTable
          products={filteredProducts}
          onEditProduct={handleProductEdit}
          onDeleteProduct={handleProductDelete}
        />
      </div>
      <ProductForm
        title={"REGISTRO DE PRODUCTO"}
        product={product}
        onChangeProduct={handleProductChange}
        categories={categories}
        onAccept={handleProductAccept}
        onCancel={handleProductCancel}
      ></ProductForm>

      <ProductConfirm
        window={window}
        onAccept={handleProductDeleteAccept}
        onCancel={handleProductDeleteCancel}
      ></ProductConfirm>
    </>
  );
}

export default App;
