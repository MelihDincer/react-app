export const ProductInfo = (props) => {
    return (
        <div className="product-info">
        <span className="text-danger">www.melihdincer.com</span>
        <span>{props.children}</span>
        </div>
    );
};

export default ProductInfo;