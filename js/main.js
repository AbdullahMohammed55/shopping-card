let user = document.querySelector('#user_icon');
let userData = document.querySelector('.user_name_icon');
let login = document.querySelector('.but_login');
let register = document.querySelector('.but_singup');
let links = document.querySelector('#links');

if (localStorage.getItem('Username')) {
    links.remove();
    user.style.display = 'inline-block';
    userData.innerHTML = localStorage.getItem('Username');
    login.innerHTML = localStorage.getItem('Username');
    register.remove();
}

let but_logout = document.querySelector('.but-logout');
but_logout.addEventListener('click', () => {
    localStorage.clear();
    setTimeout(() => {
        window.location = 'register.html';
    }, 1000);
});

let allProducts = document.querySelector('.products');

let products = [
    {
        id: 1,
        title: 'Watch',
        discription: "this is the best watch in the market",
        price: '30$',
        imageUrl: "images/watch-one.jpg"
    },
    {
        id: 2,
        title: 'Watch',
        discription: "this is the best watch in the market",
        price: '30$',
        imageUrl: "images/watch-five.jpg"
    },
    {
        id: 3,
        title: 'Watch',
        discription: "this is the best watch in the market",
        price: '30$',
        imageUrl: "images/watch-four.png"
    },
    {
        id: 4,
        title: 'Phone',
        discription: "this is the best phone in the market",
        price: '20$',
        imageUrl: "images/phone.jpg",
    },
    {
        id: 5,
        title: 'Phone',
        discription: "this is the best phone in the market",
        price: '20$',
        imageUrl: "images/phone.png",
    },
    {
        id: 6,
        title: 'Phone',
        discription: "this is the best phone in the market",
        price: '20$',
        imageUrl: "images/phone.jpg",
    },
    {
        id: 7,
        title: 'Glasses',
        discription: "this is the best glasses in the market",
        price: '25$',
        imageUrl: "images/glasses.jpg",
    },
    {
        id: 8,
        title: 'Glasses',
        discription: "this is the best glasses in the market",
        price: '25$',
        imageUrl: "images/glasses-one.png",
    },
    {
        id: 9,
        title: 'Glasses',
        discription: "this is the best glasses in the market",
        price: '25$',
        imageUrl: "images/glasses.png",
    },
];

function createProductCard(product) {
    return `
                <div class="product_item">
                    <img src="${product.imageUrl}" alt="photo for ${product.title}">
                    <h2>${product.title}</h2>
                    <p>${product.discription}</p>
                    <p>Price: ${product.price}</p>
                    <div class="product_item_action">
                        <button class="add_to_cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            `;
}

function drawItems() {
    let html = products.map(createProductCard).join('');
    allProducts.innerHTML = html;
}

drawItems();

let cartProductDiv = document.querySelector('.carts_products div');
let badge = document.querySelector(".badge");

let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];

if (addedItem) {
    addedItem.forEach(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    });
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}

function addToCart(id) {
    let chooseItem = products.find((item) => item.id == id);
    cartProductDiv.innerHTML += `<p>${chooseItem.title}</p>`;

    addedItem.push(chooseItem);
    localStorage.setItem("ProductsInCart", JSON.stringify(addedItem));

    let cartProductLength = document.querySelectorAll('.carts_products div p').length;
    badge.style.display = "block";
    badge.innerHTML = cartProductLength;
}

let shopping_cartIcon = document.querySelector(".shopping-cart");
let cartsProducts = document.querySelector(".carts_products");

shopping_cartIcon.addEventListener("click", opencart);

function opencart() {
    if (cartsProducts.style.display == "block") {
        cartsProducts.style.display = "none";
    } else {
        cartsProducts.style.display = "block";
    }
}