let menu;

// Check if menu exists in localStorage
if (localStorage.getItem("menu")) {
    menu = JSON.parse(localStorage.getItem("menu"));
} else {

    // Foods
    menu = [
        { name: "Name: Jollof Rice", price: 3500, description: "Description: Smoky, spicy rice cooked in tomato and pepper sauce.", category: "Category: Food" },
        { name: "Name: Egusi Soup & Pounded Yam", price: 5000, description: "Description: Melon seed soup with smooth pounded yam.", category: "Category: Food" },
        { name: "Name: Moi Moi", price: 2500, description: "Description: Steamed bean pudding, soft and tasty.", category: "Category: Food" },

        // Drinks
        { name: "Name: Chapman", price: 1500, description: "Description: Fruity cocktail with a splash of bitters.", category: "Category: Drink" },
        { name: "Name: Palm Wine", price: 3500, description: "Description: Sweet, natural tree sap, lightly fermented.", category: "Category: Drink" },

        // Desserts
        { name: "Name: Puff-Puff", price: 1000, description: "Description: Sweet, fluffy fried dough balls.", category: "Category: Dessert" },
        { name: "Name: Chin Chin", price: 1500, description: "Description: Crunchy, bite-sized fried pastries.", category: "Category: Dessert" },
        { name: "Name: Ice Cream", price: 2000, description: "Description: Cold, creamy treat in different flavors.", category: "Category: Dessert" }
];
    localStorage.setItem("menu", JSON.stringify(menu));
}
// to save data in local storage
function saveMenu() {
    localStorage.setItem("menu", JSON.stringify(menu));
}

function displayMenu() {
    const menuList = document.getElementById("menuList");
    menuList.innerHTML = ""; // Clear previous items

    menu.forEach((item, i) => { // < index i
        const li = document.createElement("li");
        li.textContent = `${item.name} - #${item.price}: ${item.description} [${item.category}]`;

        let btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.onclick = function () { deleteItem(i); }; 

        li.appendChild(btn);
        menuList.appendChild(li);
    });
}


function addItem() {
    let name = document.getElementById("name").value;
    let price = parseFloat(document.getElementById("price").value);
    let desc = document.getElementById("description").value;
    let category = document.getElementById("category").value;

    if (name && !isNaN(price)) {
        menu.push({ name: name, price: price, description: desc, category: category });
        saveMenu();
        displayMenu();
        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("description").value = "";
    } else {
        alert("Enter valid name and price");
    }
}

function deleteItem(i) {
    menu.splice(i, 1);
    saveMenu();
    displayMenu();
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}

// Show menu on load
displayMenu();
saveMenu();