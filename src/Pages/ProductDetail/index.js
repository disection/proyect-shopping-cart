import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductD from '../../Components/ProductDetail'

const ProductDetail = () => {
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
    
    return (
        <ProductD product={selectedProduct} />
    )
}
export default ProductDetail