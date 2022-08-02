import ProductCard from '../ProductCart'


const List = (props) => {
    const { data, type } = props
    const selectCartType = (type, cardInfo) => {
        const cardsMap = {
            productsList: <ProductCard cardData={cardInfo}/>  
        }
        return cardsMap[type]
    }

    return (
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {data.map((item) => selectCartType(type, item)          
            )}
        </div>
    )
}
export default List