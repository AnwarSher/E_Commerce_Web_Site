// Search Bar Alert Example
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
    } else {
        alert('Please enter a search term.');
    }
});

// Add to Cart Example (you can expand on this)
const cart = document.querySelector('.nav-links a[href="Cart.html"]');
let cartCount = 0;

document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', () => {
        cartCount++;
        cart.innerHTML = `Cart (${cartCount}) <i class="fas fa-shopping-cart"></i>`;
        alert('Item added to cart!');
    });
});
