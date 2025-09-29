let items = JSON.parse(localStorage.getItem("menu"));


let cart = [];
let newItems = [...items];

function showMenu(list = newItems) {
    let menuList = document.getElementById("menuList");
    menuList.innerHTML = "";
    list.forEach((item, i) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - #${item.price} (${item.description}) `;
        let btn = document.createElement("button");
        btn.textContent = "Add to cart";
        btn.onclick = function () { addToCart(i); };
        li.appendChild(btn);
        menuList.appendChild(li);
    });
}

function addToCart(i) {
    cart.push(newItems[i]);
    showCart();
}

function showCart() {
    let list = document.getElementById("cartList");
    list.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        list.appendChild(li);
        total += item.price;
    });
    document.getElementById("total").textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty");
    } else {
        alert("Order placed successfully!");
        cart = [];
        showCart();
    }
}

function newMenu() {
    let category = document.getElementById("categoryFilter").value;
    if (category === "all") {
        newItems = items;
    } else {
        newItems = items.filter(item => item.category === category);
    }
    searchMenu();
}

document.getElementById("searchBox").addEventListener("input", searchMenu);

function searchMenu() {
    let term = document.getElementById("searchBox").value.toLowerCase();
    let result = newItems.filter(item => item.name.toLowerCase().includes(term));
    showMenu(result);
}

showMenu();
