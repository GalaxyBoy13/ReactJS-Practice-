import "./ProductPrice.css"

function productPrice({newPrice, oldPrice}){
    return(
        <div className="price">
        <p className="oldPrice">{oldPrice.toLocaleString('en-IN')}</p>
        <p className="newPrice"><b>{newPrice.toLocaleString('en-IN')}</b></p>
        </div>
    )
}

export default productPrice;