const ShoppingCart = () => {
    return (
        <><h1>Carrito de Compras</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Costo total</th>
                    </tr>
                </thead>
                <tbody  className="table-group-divider">
                    <tr>
                        <td>Nombre de producto
                            <button type="button" className="btn btn-outline-secondary  m-3 btn-sm">eliminar</button>
                            <button type="button" className="btn btn-primary btn-sm">Comprar</button>
                        </td>
                        <td>$ 100.00</td>
                        <td>2</td>
                        <td>$ 200.00</td>
                    </tr>
                    
                </tbody>
                <tfoot>
                    <tr>
                       
                        <th scope="col" colspan="4">Subtotal (1 producto): $4,209.66</th>
                    </tr>
                </tfoot>
            </table></>
    )
}
export default ShoppingCart