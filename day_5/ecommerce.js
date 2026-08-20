let products = [];

const getProductsData = async () => {

    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    products = data.products;

    products.forEach((product) => {

        const productsContainer =
            document.getElementById("products-container");

        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = "Product Image";

        const title = document.createElement("h1");
        title.innerText = product.title;

        const price = document.createElement("h2");
        price.innerText = `$${product.price}`;

        const addBtn = document.createElement("button");
        addBtn.innerText = "ADD TO CART";

        // Add product to cart
        addBtn.addEventListener("click", () => {

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push(product);

            localStorage.setItem("cart", JSON.stringify(cart));

            alert("Product added to cart!");
        });

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(addBtn);

        productsContainer.appendChild(div);
    });
};

getProductsData();