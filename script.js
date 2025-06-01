let burger = document.querySelector('.burgermenu')
let nav = document.querySelector('.main-nav')
burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active') 
})

$('.carousel').slick({
    prevArrow: '<img src="img/Arrow_left.svg">',
    nextArrow: '<img src="img/Arrow_right.svg">',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});