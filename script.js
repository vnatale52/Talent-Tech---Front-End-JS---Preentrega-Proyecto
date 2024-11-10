//  3. JavaScript para Interacción con la API y Carrito de Compras


document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

async function fetchProducts() {
    try {
        const response = await fetch('https://api.example.com/products');     // falta definir API
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error en la búsqueda de productos:', error);
    }
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Añadir producto al Carrito</button>
        `;
        productList.appendChild(productCard);
    });
}

function addToCart(productId) {
    // Función para añadir el producto al carrito
    console.log("Producto ${productId} añadido al carrito");
}
