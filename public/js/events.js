var nav_item = document.getElementById('nav_item');
// var main_nav = document.getElementById('main_nav');

nav_item.addEventListener('focusin', focusFunc);

function focusFunc() {
    nav_item.style.backgroundColor = "#ff4f7a";
}
