import ProductItem from "./ProductItem";
import './Products.css';
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    return(
        <div className="container">
            <NewProduct products={products} setProducts={setProducts}></NewProduct>
            <h1>Products</h1>
            <div className="row mt-3">
                {products.length === 0 ? (<span className="text-danger h3">Hiç ürün bulunmamaktadır.</span>) : products.map((product) => (                     
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