import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import List from '../../Components/List'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect( () => {
        const getProducts = async () => {
            let productsList = await fetch('https://fakestoreapi.com/products')
            productsList = await productsList.json()
            setProducts(productsList)
        }
        getProducts()
    },[])
    return (
        <><h1>Productos</h1>
           <List data={products} type='productsList' />
        </>)
}
export default Products