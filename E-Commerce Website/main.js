const products = [
    { id: 1, name: 'iPhone 13', category: 'phones', category: 'Apple', image: 'iphone-13.jpeg', description: 'Latest Apple iPhone 13', price: 799, colors: ['Black', 'White', 'Red'], images: { 'Black': 'iphone-13-black.jpeg', 'White': 'iphone-13.jpeg', 'Red': 'iphone-13-red.jpeg' }, rating: 4, reviews: 150 },
    { id: 2, name: 'Galaxy S21', category: 'phones',category: 'Samsung', image: 'Galaxy S21.jpeg', description: 'Latest Samsung Galaxy S21', price: 699, colors: ['Black', 'White'], images: { 'Black': 'Galaxy S21-black.jpeg', 'White': 'Galaxy S21.jpeg'}, rating: 4.5, reviews: 120 },
    { id: 3, name: 'AirPods Pro', category: 'Apple', image: 'AirPods Pro.jpeg', description: 'Apple AirPods Pro', price: 249, colors: [ 'White', 'Black'], images: { 'Black': 'AirPods Pro-black.jpeg', 'White': 'AirPods Pro.jpeg'}, rating: 3, reviews: 300 },
    { id: 4, name: 'Dell XPS 13', category: 'laptops', image: 'Dell XPS 13.jpeg', description: 'High performance Dell XPS 13', price: 999, colors: ['Black', 'White', 'Silver'], images: { 'Black': 'Dell XPS 13.jpeg', 'White': 'Dell XPS 13-white.jpeg', 'Silver': 'Dell XPS 13-silver.jpeg' }, rating: 4.6, reviews: 220 },
    { id: 5, name: 'iPad Air', category: 'Apple',category: 'Ipad', image: 'iPad Air.jpeg', description: 'Apple iPad Air', price: 599, colors: ['Blue', 'White', 'Purple'], images: { 'Blue': 'iPad Air.jpeg', 'White': 'iPad Air-white.jpeg', 'Purple': 'iPad Air-purple.jpeg' }, rating: 4, reviews: 200 },
    { id: 6, name: 'Samsung Galaxy Tab', category: 'Samsung', category: 'tablets', image: 'Samsung Galaxy Tab.jpeg', description: 'Samsung Galaxy Tab', price: 499, colors: ['Black', 'Blue'], images: { 'Black': 'Samsung Galaxy Tab.jpeg', 'Blue': 'Samsung Galaxy Tab-blue.jpeg' }, rating: 4.4, reviews: 180 },
    { id: 7, name: 'Google Pixel 5', category: 'phones', image: 'Google Pixel 5.jpeg', description: 'Google Pixel 5 Smartphone', price: 699, colors: ['Black', 'Blue'], images: { 'Black': 'Google Pixel 5-black.jpeg', 'Blue': 'Google Pixel 5.jpeg' }, rating: 4.5, reviews: 210 },
    { id: 8, name: 'MacBook Pro 14', category: 'Apple', category: 'laptops', image: 'MacBook Pro 14.jpeg', description: 'Apple MacBook Pro 14"', price: 1299, colors: ['Black'], images: { 'Black': 'MacBook Pro 14.jpeg' }, rating: 4, reviews: 350 },
    { id: 9, name: 'OnePlus 9', category: 'phones', image: 'OnePlus 9.jpeg', description: 'OnePlus 9 with Hasselblad camera', price: 699, colors: ['Black', 'Purple'], images: { 'Black': 'OnePlus 9.jpeg', 'Purple': 'OnePlus 9-purple.jpeg' }, rating: 4.3, reviews: 100 },
    { id: 10, name: 'Sony WH-1000XM4', category: 'Apple', image: 'Sony WH-1000XM4.jpeg', description: 'Sony Noise Cancelling Headphones', price: 349, colors: ['Black', 'Beige'], images: { 'Black': 'iSony WH-1000XM4-black.jpeg', 'Beige': 'Sony WH-1000XM4.jpeg' }, rating: 4.0, reviews: 500 },
    { id: 11, name: 'Asus ZenBook 14', category: 'laptops', image: 'Asus ZenBook 14.jpeg', description: 'Asus ZenBook 14 Laptop', price: 799, colors: ['Black'], images: { 'Black': 'Asus ZenBook 14.jpeg' }, rating: 2.5, reviews: 190 },
    { id: 12, name: 'Amazon Fire HD 10', category: 'tablets', image: 'Amazon Fire HD 10.jpeg', description: 'Amazon Fire HD 10 Tablet', price: 149, colors: ['Black'],images: { 'Black':'Amazon Fire HD 10.jpeg' }, rating: 4.2, reviews: 70 },
];


let cart = [];
let wishlist = [];

function loadProducts(category) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    const filteredProducts = category === 'All Products' ? products : products.filter(p => p.category === category);
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white rounded shadow-md p-4 product-card';
        const starRating = Array.from({ length: 5 }, (_, i) => 
            i < product.rating 
                ? `<span class="text-yellow-500">&#9733;</span>` 
                : `<span class="text-gray-400">&#9733;</span>`  
        ).join('');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover mb-2">
            <h3 class="font-bold">${product.name}</h3>
            <p>${product.description}</p>
            <p class="text-green-500 font-bold">$${product.price}</p>
            <div class="flex items-center mb-2">
                <div class="flex">${starRating}</div>
                <p class="ml-2 text-sm text-gray-500">(${product.reviews} reviews)</p>
            </div>
            <button class="bg-blue-500 text-white px-3 py-1 rounded mt-2" onclick="showProductDetails(${product.id})">View Details</button>
        `;
        productList.appendChild(productCard);
    });
}


function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const detailsSidebar = document.getElementById('productDetailsSidebar');
    detailsSidebar.style.display = 'block';
    const selectedProductDetails = document.getElementById('selectedProductDetails');

    const colorButtons = product.colors.map(color => `<button class="sidebar-btn" onclick="changeProductImage('${color}', ${productId})">${color}</button>`).join('');

    const reviews = `
        <div class="review mt-4">
            <p><strong>Tejaswini</strong></p>
            <p class="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</p>
            <p>"Great product! The performance is amazing, but I wish the battery life was a bit longer."</p>
        </div>
        <div class="review mt-4">
            <p><strong>Likith Sai</strong></p>
            <p class="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</p>
            <p>"Absolutely love it! Worth every penny, especially the display quality and camera."</p>
        </div>`;

    selectedProductDetails.innerHTML = `
        <h2 class="text-xl font-bold">${product.name}</h2>
        <img id="productImage" src="${product.image}" alt="${product.name}" class="w-120 h-60 object-cover mb-2">
        <p>${product.description}</p>
        <p class="text-green-500 font-bold">$${product.price}</p>
        <div>${colorButtons}</div>
        <input id="productQuantity" type="number" value="1" min="1" class="mt-2 text-center w-16" />
        <button class="bg-green-500 text-white px-3 py-2 rounded mt-4" onclick="addToCart(${productId})">Add to Cart</button>
        <button class="bg-yellow-500 text-white px-3 py-2 rounded mt-4" onclick="addToWishlist(${productId})">Add to Wishlist</button>
         <h3 class="text-lg font-bold mt-6">Customer Reviews</h3>
        ${reviews}
`;

}

function changeProductImage(color, productId) {
    const product = products.find(p => p.id === productId);
    const productImage = document.getElementById('productImage');
    productImage.src = product.images[color];
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const existingProduct = cart.find(item => item.id === productId && item.color === selectedColor);

    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    updateCart();
}

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!wishlist.includes(product)) {
        wishlist.push(product);
    }
    updateWishlist();
}

function updateCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        cartList.innerHTML += `<li>${item.name} - $${item.price} x ${item.quantity}</li>`;
        total += item.price * item.quantity;
    });

    document.getElementById('cartTotal').innerText = `Total: $${total}`;
    document.getElementById('cartBtn').innerText = `Cart (${cart.length})`;
}



function updateWishlist() {
    const wishlistList = document.getElementById('wishlistList');
    wishlistList.innerHTML = '';

    wishlist.forEach(item => {
        wishlistList.innerHTML += `<li>${item.name} - $${item.price}</li>`;
    });

    document.getElementById('wishlistBtn').innerText = `Wishlist (${wishlist.length})`;
}

function toggleCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

function toggleWishlistModal() {
    const wishlistModal = document.getElementById('wishlistModal');
    wishlistModal.style.display = wishlistModal.style.display === 'block' ? 'none' : 'block';
}

function closeProductDetails() {
    const detailsSidebar = document.getElementById('productDetailsSidebar');
    detailsSidebar.style.display = 'none';
}

function buyNow() {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
    closeProductDetails();
    toggleCartModal();
}

loadProducts('All Products');