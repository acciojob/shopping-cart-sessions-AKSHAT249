// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
	{ id: 1, name: "Product 1", price: 10 },
	{ id: 2, name: "Product 2", price: 20 },
	{ id: 3, name: "Product 3", price: 30 },
	{ id: 4, name: "Product 4", price: 40 },
	{ id: 5, name: "Product 5", price: 50 },
  ];

let cartItems = [];

  
  // DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");

if(JSON.parse(sessionStorage.getItem("cart-items"))){
	cartItems = JSON.parse(sessionStorage.getItem("cart-items"));
	renderCart();
}
  
// Render product list
function renderProducts() {
products.forEach((product) => {
	const li = document.createElement("li");
	li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" onclick="addToCart(${product.id})" data-id="${product.id}">Add to Cart</button>`;
	productList.appendChild(li);
});
}



  
  
  // Render cart list
  function renderCart() {
	  cartList.innerHTML = ""
	  cartItems.map(  (item) => {
		  cartList.innerHTML += `
		  	<li>${item.name} ${item.price}  <button onclick="removeFromCart(${item.id})">Remove</button> </li>
		  `
	  } )
	  sessionStorage.setItem("cart-items", JSON.stringify(cartItems));
  }
  
  // Add item to cart
  function addToCart(productId) {
	  // let item = products[productId-1];
	  let item = products.find(product => product.id === productId);
	  const exists = cartItems.some((cartItem) => cartItem.id === productId);
	  if (!exists) {
	    cartItems.push(item);
	  }
	  
	  
	  renderCart();
	  // sessionStorage.setItem("cart-items", JSON.stringify(cartItems))
	  
  }
  
  // Remove item from cart
  function removeFromCart(productId) {
	  // console.log("removed item", productId)
	  let filteredItems = cartItems.filter( (item,index) => item.id != productId)
	  cartItems = filteredItems;
	  // console.log(cartItems)
	  renderCart();
	  // sessionStorage.setItem("cart-items", JSON.stringify(cartItems))
	  
  }
  
  // Clear cart
  function clearCart() {
	  cartItems = []
	  renderCart();
	  // sessionStorage.removeItem("cart-items")
  }
  
  // Initial render
  renderProducts();
  renderCart();
 
  

