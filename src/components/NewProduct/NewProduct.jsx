//rafce (fonksiyon oluşturma kısayolu)
import ProductForm from "./ProductForm";


const NewProduct = ({ setProducts}) => {

  const onSaveProduct = (newProductData) => {
    setProducts((prevState) => [...prevState, newProductData]);
  };

  return (
    <div className="new-product-wrapper">
      {/* <ProductForm setProducts={props.setProducts} products={props.products}></ProductForm> */}
      <ProductForm onSaveProduct={onSaveProduct}></ProductForm> 

    </div>
  );
};

export default NewProduct
