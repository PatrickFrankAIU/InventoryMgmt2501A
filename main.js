let inventory = [
    {
        category: 'Fruits',
        products: [
            { product: 'Apples', quantity: 10 },
            { product: 'Bananas', quantity: 5 },
            { product: 'Oranges', quantity: 8 },
        ]
    },
    {
        category: 'Vegetables',
        products: [
            { product: 'Tomatoes', quantity: 15 },
            { product: 'Carrots', quantity: 12 },
            { product: 'Peppers', quantity: 9 },
        ]
    }
];

// global variables
let categoryMenu = document.getElementById('categoryInput');
let productMenu = document.getElementById('productInput');
let shipment = [];
let order = [];

// display the inventory
function displayInventory() {
    let inventoryDisplay = document.getElementById('inventoryDisplay');
    inventoryDisplay.innerHTML = '';

    inventory.forEach(category => {
        let itemGroup = document.createElement('div');
        itemGroup.innerHTML = '<strong>' + category.category + ':</strong>';
        category.products.forEach(product => {
            itemGroup.innerHTML += "<div>" + product.product + ": " + product.quantity;
        });
        inventoryDisplay.appendChild(itemGroup);
    });
}
displayInventory()