import './ProductItem.css'
import { ProductInfo } from './ProductInfo';
import { useState } from 'react';
import Counter from '../Counter';
const ProductItem = ({product}) => {
    const {imageUrl, productName, price, createdDate} = product;
    // const[counter,setCounter] = useState(price);

    const[title, setTitle] = useState(productName);
    const [counter, setCounter] = useState(price);

    const clickHandler = () => { 
        setTitle('Güncellendi!')
        console.log(title, 'Sepete Eklendi.')
    };

    return(
      <div className="col-4">
        <div className="card">
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <ProductInfo>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    
    <Counter price = {price} counter={counter} setCounter={setCounter}>
    <span className="card-text mx-1">{counter}₺</span>
    </Counter>
    <br />
    <a href="#" className="btn btn-sm btn-success" onClick={clickHandler}>Güncelle</a>
  </div>
  </ProductInfo>
</div>
</div>
        // <div classNameName="product-item">
        //     <div classNameName="product-image">
        //         <img src={imageUrl} alt=''/>
        //     </div>            
        //     <ProductInfo>
        //     <div classNameName='product-info'>
        //         <h2>{title}</h2>
        //         <span>{price}₺</span><br />
        //         <span>{createdDate}</span>
        //         <button classNameName='btn btn-danger' onClick={clickHandler}>Sepete Ekle</button>
        //     </div>
        //     </ProductInfo>
        // </div>
    );
};

export default ProductItem;