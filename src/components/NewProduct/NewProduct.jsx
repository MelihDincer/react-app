//rafce (fonksiyon oluşturma kısayolu)
import { useState } from "react";
import ProductForm from "./ProductForm";
import AddProduct from "./AddProduct";


const NewProduct = ({products, setProducts}) => {

  const [isOpen, setIsOpen] = useState(false);

  const onSaveProduct = (newProductData) => {
    setProducts((prevState) => [...prevState, newProductData]);
  };

  return (
    <div className="new-product-wrapper">
      {isOpen ? <ProductForm setIsOpen={setIsOpen} onSaveProduct={onSaveProduct} products={products}></ProductForm> : 
      <AddProduct setIsOpen={setIsOpen}></AddProduct>}

    </div>
  );
};

export default NewProduct
