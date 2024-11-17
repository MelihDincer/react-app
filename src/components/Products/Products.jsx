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
            <NewProduct setProducts={setProducts}></NewProduct>
            <div className="row mt-3">                
                {products.map((product) => (
                     <div className="col-4">
                    <ProductItem 
                        key={product.productName}
                        product={product}/>
                            </div>
                )
                )}                
            </div>
        </div>
    );
}

export default Products;