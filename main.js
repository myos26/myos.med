function searchProducts() {
    const searchInput = document.querySelector('.search-bar input').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const title = product.querySelector('.title').textContent.toLowerCase();
        if (title.includes(searchInput)) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
}