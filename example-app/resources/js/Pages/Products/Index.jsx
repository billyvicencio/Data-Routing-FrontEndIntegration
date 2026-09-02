export default function Index({ products }) {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Product List</h1>
            <ul>
                {products && products.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - ₱{product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}