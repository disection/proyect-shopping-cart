import { useState, useEffect } from 'react'

import List from '../../Components/List'

const Products = () => {
    //useState para guardar array de objetos (productos)
    const [productsData, setProductsData] = useState([])

    //useEffect para traer data de servidor
    useEffect( () => {
        const getProducts = async () => {
            let data = await fetch('https://fakestoreapi.com/products')
            data = await data.json()
            console.log('data' , data)
            setProductsData(data)
        }
        getProducts()
        
        
    },[])
    //variable que contiene los datos del servidor
    console.log('productsData' , productsData)
    return (
        <><h1>Productos</h1>
            <List data ={productsData}/>
        </>)
}
export default Products