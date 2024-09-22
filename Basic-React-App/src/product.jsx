import "./Product.css";
import ProductDetails from "./ProductDetails.jsx"
import ProductPrice from "./productPrice.jsx";


function Product({title, details, newPrice, oldPrice}){
    return(
        <div className="Product">
            <ProductDetails title={title} details={details}/>
            <ProductPrice newPrice={newPrice} oldPrice={oldPrice}/>
        </div>
        // <>
        // <div className="Product">
        // <ProductDetails title="Logitech MX Master 35" details={["8,000 DPI", "5 Programmable Buttons"]}/>
        // <ProductPrice newPrice={8999} oldPrice="12495"/>
        // </div>
        // <div className="Product">
        // <ProductDetails title="Apple Pencil (2nd Gen)" details={["Intuitive Touch Surface", "Designed for iPad Pro"]}/>
        // <ProductPrice />
        // </div>
        // <div className="Product">
        // <ProductDetails title="Zebronics" details={["Designed for iPad Pro", "Intuitive Touch Surface"]}/>
        // <ProductPrice newPrice={899} oldPrice="1599"/>
        // </div>
        // <div className="Product">
        // <ProductDetails />
        // <ProductPrice newPrice={278} oldPrice="599"/>
        // </div>
        // </>
    )
}

export default Product;