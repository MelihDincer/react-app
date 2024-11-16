import ProductItem from "./ProductItem";
import './Products.css';
import { productData } from "../../productData";
import NewProduct from "../NewProduct/NewProduct";

const Products = () => {
    return(
        <div className="container">
            <h1>Products</h1>
            <NewProduct></NewProduct>
            <div className="row mt-3">                
                {productData.map((product) => (
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