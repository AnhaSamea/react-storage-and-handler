//use local storage to manage cart data
const addTODb = id => {
    let shoppingCart;

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        //  console.log(storedCart);
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {}; 
    }
    //add quantity
    const quantity = shoppingCart[id];
    if (quantity) {

        const newQuantity = +(quantity) + 1;
        shoppingCart[id] = newQuantity;

    }
    else {

        shoppingCart[id] = 1;

    }
    //value update korar por local storage e pathabo
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
export { addTODb }