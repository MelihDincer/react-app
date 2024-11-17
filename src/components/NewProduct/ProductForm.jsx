import { useState } from "react";
import "./ProductForm.css"

const ProductForm = (props) => {
const [productName, setProductName] = useState("");
const [price, setPrice] = useState("");
const [imageUrl, setImageUrl] = useState("");

const submitHandler = (e) => {
    e.preventDefault();
    const newProductData = {
        productName,
        price,
        imageUrl
    };
    // props.setProducts((prevState) => [...prevState, newProductData])
    // props.setProducts([...props.products, newProductData])
    props.onSaveProduct(newProductData);
    // console.log(newProductData)
    setProductName("");
    setPrice("");
    setImageUrl("");
};

//Güncel Yöntem ama kurs için açıklayıcı olan yukarıdaki 5-6-7. satırdaki const tanımlamaları.
// const [productData, setProductData] = useState({
//     productName: "",
//     price: "",
//     imageUrl: ""
// });

const titleChangeHandler = (event) => {
    //1.Yöntem
    setProductName(event.target.value);
    //2.Yöntem (Artık kullanılmıyor modern javascriptte)
    // setProductData({
    //     ...productData,
    //     productName: event.target.value,
    // });
    //Güncel react uygulamaları ve en doğru sağlıklı kullanım aşağıdaki gibidir.
    // setProductData((prevState) => {
    //     return {...prevState, productName: event.target.value}
    // });
};
const priceChangeHandler = (event) => {
    setPrice(event.target.value);
    // setProductData({
    //     ...productData,
    //     price: event.target.value,
    // });
    // setProductData((prevState) => {
    //     return {...prevState, price: event.target.value}
    // });
};
const imageUrlChangeHandler = (event) => {
    setImageUrl(event.target.value);
    // setProductData({
    //     ...productData,
    //     imageUrl: event.target.value,
    // });
    // setProductData((prevState) => {return {
    //     ...prevState, imageUrl: event.target.value
    // }});
};

    return (
    <form className="form-group" onSubmit={submitHandler}>
    <div className="row mt-3 mb-2">
    <div className="col col-4">
    <label htmlFor="" className="form-text">Ürün Adı</label>
    <input type="text" value={productName} className="form-control" placeholder="Ürün adını giriniz..." onChange={titleChangeHandler}/>
    </div>
    <div className="col col-4">
    <label htmlFor="" className="form-text">Ürün Fiyatı</label>
    <input type="number" value={price} className="form-control" placeholder="Ürün fiyatını giriniz..." onChange={priceChangeHandler}/>
    </div>
    <div className="col col-4">
    <label htmlFor="" className="form-text">Ürün Görseli</label>
    <input type="text" value={imageUrl} className="form-control" placeholder="Ürün görsel url giriniz..." onChange={imageUrlChangeHandler}/>
    </div>
    </div>
    <div className="d-grid">
    <button className="btn btn-primary mb-3">Ürün Ekle</button>
    </div>
    </form>
    )
}

export default ProductForm;

