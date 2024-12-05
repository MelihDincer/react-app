import ProductItem from "./ProductItem";
import './Products.css';
import { productData } from "../../productData";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
    const [products, setProducts] = useState(productData);
    console.log(products);
    return(
        <div className="container">
            <h1>Products</h1>
            <NewProduct products={products} setProducts={setProducts}></NewProduct>
            <div className="row mt-3">                
                {products.map((product) => (                     
                    <ProductItem 
                        key={product.id}
                        product={product}/>                          
                )
                )}                
            </div>
        </div>
    );
}

export default Products;