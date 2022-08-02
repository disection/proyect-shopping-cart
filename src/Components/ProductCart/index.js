import { Link } from 'react-router-dom'
const ProductCard = props => {
    const { data } = props
    const { title, price, description, image, id } = data
    return (
        <div className="col" key={id}>
            <div className="card h-100">
               
                    <div className="image-container">
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body"> <Link to={`/product-detail/${id}`}>
                        <h5 className="card-title">{title.substring(0, 24)}...</h5>
                        <p className="card-text">{description.substring(0, 50)}...</p></Link>
                        <p className="card-text">$ {price}</p>
                        <div className="input-group mb-3 ">
                            <button className="btn btn-outline-secondary" type="button" >-</button>
                            <input type="text" className="form-control" placeholder="1" />
                            <button className="btn btn-outline-secondary" type="button" >+</button>
                        </div>
                        <button type="button" className="btn btn-warning">agregar al carrito</button>

                    </div>
                
            </div>
        </div>
    )
}
export default ProductCard