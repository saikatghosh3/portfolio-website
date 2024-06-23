let MenuIcon= document.querySelector('#menu-icon');

MenuIcon.onClick = () => {
    MenuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}