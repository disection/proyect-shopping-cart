import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../Products'

const ProductDetail = ( {addHandler} ) => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        const getProductById = async () => {
            let product = await fetch(`https://fakestoreapi.com/products/${id}`)
            product = await product.json()
            console.log(product)
            setSelectedProduct(product)
        }
        getProductById()

    }, [])
    console.log(typeof selectedProduct)
    const { title, description, price, image } = selectedProduct
    return (
        <div className="card h-100 row detail-cart">
            <div className="col-12 col-md-4"> <div className="image-container">
                <img src={image} className="card-img-top" alt="..." />
            </div></div>
            <div className="col-12 col-md-8"><div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">$ {price}</p>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" >-</button>
                    <input type="text" className="form-control" placeholder="1" />
                    <button className="btn btn-outline-secondary" type="button" >+</button>
                </div>
                <button type="button" className="btn btn-warning" onClick={()=>addHandler(product)}>agregar al carrito</button>
            </div>  </div>


        </div>

    )
}
export default ProductDetail