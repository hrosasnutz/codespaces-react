function ProductTable({products}) {

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Estado</th>
                </tr>
                </thead>
                <tbody>
                    {products.map(p => 
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.category}</td>
                            <td>{p.price}</td>
                            <td>{p.stock}</td>
                            <td>{p.active ? "Activo": "Inactivo"}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default ProductTable;