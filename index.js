var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random()*(100 - 1 + 1))
  cart.push({itemName : item, itemPrice : price})
  return (`${item} has been added to your cart.`)
}

function viewCart() {
  if (cart.length === 0){
  return ('Your shopping cart is empty.') 
  }
  for (var i = 0; i < cart.length; i++){
    var itemName = Object.keys(cart[i])[0]
    countit.push(fill + "at $" + cart[i][fill])
  }
  var tellme = `In your cart, you have ${itemName} at ${itemPrice}`
  if (countit.length === 1){
    tellme + countit + "." 
  }
  else if (countit.length === 2) {
    tellme + countit[0] + "and" + countit[1] + "."
  }
  else if (countit.length > 2){
    var lastItem = countit.pop()
    var additional = countit.join(", ")
    tellme += (additional + ", and " + lastItem + ".")
  }
  return (tellme)
}
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
