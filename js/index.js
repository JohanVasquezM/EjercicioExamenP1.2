//Función para obtener productos de la API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
}

// Función para mostrar los productos en el DOM
function displayProducts(products) {
    const productList = document.getElementById('productList');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-3';
        productCard.innerHTML = `
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description.substring(0, 100)}...</p>
                    <p class="card-text"><strong>Categoría:</strong> ${product.category}</p>
                    <p class="card-text"><strong>Precio:</strong> L.${product.price.toFixed(2)}</p>
            </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

//Llamar a la función al cargar la página
window.onload = fetchProducts;
