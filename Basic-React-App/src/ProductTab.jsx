import Product from "./product.jsx";
import "./ProductTab.css"

function ProductTab(){
    return(
        <div className="ProductTab">
        <Product title="Logitech MX Master 35" details={["8,000 DPI", "5 Programmable Buttons"]} newPrice={8999} oldPrice={12495}/>
        <Product title="Apple Pencil (2nd Gen)" details={["Intuitive Touch Surface", "Designed for iPad Pro"]} newPrice={9199} oldPrice={11900}/>
        <Product title="Zebronics" details={["Designed for iPad Pro", "Intuitive Touch Surface"]} newPrice={899} oldPrice={1599}/>
        <Product title="Petronics Toad" details={["Wireless Mouse 2.4GHz", "Optical Orientation"]} newPrice={278} oldPrice={599}/>
        </div>
    )
}

export default ProductTab;