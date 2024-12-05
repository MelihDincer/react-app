const AddProduct = ({ setIsOpen }) => {

    return (
        <button className="btn btn-success mb-3 mt-4" onClick={() => setIsOpen(true)}>Yeni Ürün Ekle</button>
    )
}

export default AddProduct