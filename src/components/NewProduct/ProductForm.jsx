import "./ProductForm.css"

const ProductForm = () => {
const titleChangeHandler = (event) => {
    console.log(event.target.value);
}

    return (
    <form className="form-group">
    <div className="row mt-3 mb-2">
    <div className="col col-4">
    <label htmlFor="" className="form-text">Ürün Adı:</label>
    <input type="text" className="form-control" placeholder="Ürün adını giriniz..." onChange={titleChangeHandler}/>
    </div>
    <div className="col col-4">
    <label htmlFor="" className="form-text">Ürün Fiyatı:</label>
    <input type="number" className="form-control" placeholder="Ürün fiyatını giriniz..." />
    </div>
    <div className="col col-4">
    <label htmlFor="" className="form-text">Ürün Görseli:</label>
    <input type="text" className="form-control" placeholder="Ürün görsel url giriniz..." />
    </div>
    </div>
    <div className="d-grid">
    <button className="btn btn-primary mb-3">Ürün Ekle</button>
    </div>
    </form>
    )
}

export default ProductForm;

