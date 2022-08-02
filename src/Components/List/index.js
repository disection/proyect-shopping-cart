import ProductCard from "../ProductCart"
const List = props => {
    const { data } = props
    return (
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {
                data.map((product) => {                    
                    return (
                        <ProductCard data={product}/>
                    )
                })
            }
        </div>
    )
}
export default List