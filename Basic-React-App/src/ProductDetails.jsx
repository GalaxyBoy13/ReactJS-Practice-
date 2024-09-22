function ProductDetails({title,details}){
    const list = details.map((detail)=> <li>{detail}</li>)
    return(
        <>
        <h4>{title}</h4>
        <p>{list}</p>
        </>
    )
}

export default ProductDetails;