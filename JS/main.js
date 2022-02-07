let navBar = document.querySelector('.navBar');
document.querySelector('#menuBtn').onclick = () => {
    navBar.classList.toggle('active');
    cartItems.classList.remove('active');
    search.classList.remove('active');
}
let cartItems = document.querySelector('.cart-items-container');
document.querySelector('.ri-shopping-cart-2-line').onclick = () => {
    cartItems.classList.toggle('active');
    navBar.classList.remove('active');
    search.classList.remove('active');
}
let search = document.querySelector('.searchBox');
document.querySelector('.ri-search-line').onclick = () => {
    search.classList.toggle('active');
    navBar.classList.remove('active');
    cartItems.classList.remove('active');
}

window.onscroll = () =>{
    navBar.classList.remove('active');
    cartItems.classList.remove('active');
    search.classList.remove('active');
}