import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts((products) => [
      ...products,
      {
        id: products.length + 101,
        name: "product" + (products.length + 1),
        price: products.length * 100 + 100,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200'
      }
    ]);
  }

  return (
    <div>
      <h1>Re-Store</h1>
      <Catalog products={products} addProduct={addProduct}/>
      
    </div>
  );
}

export default App;