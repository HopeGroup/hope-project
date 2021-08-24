let bubble = document.getElementById('bubble');
let catNdogo = document.getElementById('catNdogo');
let frontText = document.getElementById('frontText');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    bubble.style.left = value *0.25 + 'px';
    frontText.style.top = value *0.25 + 'px';
    btn.style.left = value *0.25 + 'px';
    catNdogo.style.top = value *0.1 + 'px';
})