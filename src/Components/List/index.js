import { Link } from 'react-router-dom'

const List = props => {
    const {data}= props
    console.log(props)
    return (
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {
                data.map((product, index) => {
                    const { title, price, description, image, id } = product
                    return (
                        <div className="col" key={id}>
                            <div className="card h-100">
                                <Link to={`/product-detail/${id}`}>
                                    <div className="image-container">
                                        <img src={image} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{title.substring(0, 24)}...</h5>
                                        <p className="card-text">{description.substring(0, 50)}...</p>
                                        <p className="card-text">$ {price}</p>
                                        <div className="input-group mb-3">
                                            <button className="btn btn-outline-secondary" type="button" >-</button>
                                            <input type="text" className="form-control" placeholder="1" />
                                            <button className="btn btn-outline-secondary" type="button" >+</button>
                                        </div>
                                        <button type="button" className="btn btn-warning">agregar al carrito</button>

                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}
export default List