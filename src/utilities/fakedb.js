//use local storage to manage cart data
const addTODb = id => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        console.log('already exists');
        const newQuantity = +(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else {
        console.log('new item');
        localStorage.setItem(id, 1);

    }
    
}
export {addTODb}