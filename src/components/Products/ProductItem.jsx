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
        <div class="card">
  <img src={imageUrl} class="card-img-top" alt="..."/>
  <ProductInfo>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    
    <Counter price = {price} counter={counter} setCounter={setCounter}>
    <p class="card-text">{counter}₺</p>
    </Counter>
    <br />
    <a href="#" class="btn btn-sm btn-success" onClick={clickHandler}>Güncelle</a>
  </div>
  </ProductInfo>
</div>
        // <div className="product-item">
        //     <div className="product-image">
        //         <img src={imageUrl} alt=''/>
        //     </div>            
        //     <ProductInfo>
        //     <div className='product-info'>
        //         <h2>{title}</h2>
        //         <span>{price}₺</span><br />
        //         <span>{createdDate}</span>
        //         <button className='btn btn-danger' onClick={clickHandler}>Sepete Ekle</button>
        //     </div>
        //     </ProductInfo>
        // </div>
    );
};

export default ProductItem;