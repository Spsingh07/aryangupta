function showMenu() {
    const icon = document.querySelector('.hamburger-icon');
    const links = document.querySelector('.hamburger-links');
    icon.classList.toggle('open');
    links.classList.toggle('open');
}