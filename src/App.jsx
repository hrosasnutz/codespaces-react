import './App.css';
import data from './data.js';
import ProductTable from './ProductTable.jsx';

function App() {
  return (
    <>
      <ProductTable products={data}/>
    </>
  );
}

export default App;
