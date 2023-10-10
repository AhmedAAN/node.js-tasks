class Product {
    constructor(name, price, manufacturing, description) {
        this.name = name;
        this.price = price;
        this.manufacturing = manufacturing;
        this.description = description;
    }
}
class productUi {
    static displayDummyData() {
        const products = [
            {
                name: "Potato Peeler",
                price: 50,
                manufacturing: "al_araby",
                description: "an amzing potato peeler"
            },
            {
                name: "t-5000 screen",
                price: 15000,
                manufacturing: "samsung",
                description: "an amazing smart screen"
            }
        ]

        for (let product of products) {
            productUi.displayProductsTable(product);
        }
    }

    static displayProductsTable(product) {
        const tbody = document.querySelector('tbody');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.manufacturing}</td>
        <td>${product.description}</td>
        <td><a href="#" class="btn btn-danger delete-products" onclick="productUi.deleteElement(this)">delete</a></td>`;

        tbody.appendChild(row)
    }

    static showMessage(message, alertClass) {
        if (document.querySelector('.alert')) {
            document.querySelector('.alert').remove();
        }
        const div = document.createElement('div');
        div.className = `alert alert-${alertClass} my-2`;
        div.appendChild(document.createTextNode(message));
        const form = document.querySelector('#add-product');
        const section = document.querySelector('.container');
        section.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 4000);
    }

    static deleteElement(element) {
        element.parentElement.parentElement.remove();
    }

    static clearInputs() {
        document.querySelector("#title").value = "";
        document.querySelector("#price").value = "";
        document.querySelector("#manufacturing").value = "";
        document.querySelector("#description").value = "";
    }
}

document.addEventListener('DOMContentLoaded', productUi.displayDummyData)

document.querySelector("#add-product").addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const price = document.querySelector("#price").value;
    const manufacturing = document.querySelector("#manufacturing").value;
    const description = document.querySelector("#description").value;

    if (title == '' || price == '' || manufacturing == '' || description == '') {
        productUi.showMessage('all inputs are required', 'warning');
    }
    else {
        productUi.clearInputs();
        const product = new Product(title, price, manufacturing, description);
        productUi.displayProductsTable(product);
        productUi.showMessage("product added successfully", 'success')
    }
})
