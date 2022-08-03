import { useState, useEffect } from 'react'

import List from '../../Components/List'

const Products = () => {
    //useState para guardar array de objetos (productos)
    const [productsData, setProductsData] = useState([])

    //useEffect para traer data de servidor
    useEffect(() => {
        const getProducts = async () => {
            let data = await fetch('https://fakestoreapi.com/products')
            data = await data.json()
            console.log('data', data)
            setProductsData(data)
        }
        getProducts()


    }, [])
    //variable que contiene los datos del servidor
    console.log('productsData', productsData)
    return (
        <>
        <h1>Productos</h1>
       
        <label for="exampleDataList" class="form-label">Datalist example</label>
                <input className="form-control m-3" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                    <datalist id="datalistOptions">
                        <option value="San Francisco"/>
                            <option value="New York"/>
                                <option value="Seattle"/>
                                    <option value="Los Angeles"/>
                                        <option value="Chicago"/>
                                        </datalist>
       
        

            <List data={productsData} /> 
            </>
       )
}
export default Products