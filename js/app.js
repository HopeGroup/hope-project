'use strict';
 
let contain = document.getElementById('contain')

// let orders = document.getElementById('orders')
let cardarr = [];
let catname = ['catjo','fofo'];
let catImg = ['/images/catDog.jpg','fofo.jpg']
 
function Cardconst(catname,catImg){
    this.catname=catname;
    this.catImg=`${catImg}`;
    // this.card =card;
    cardarr.push(this);
   saveToLocalStorage();
}
// let name = new Cardconst('name', catImg[0])


 
function makeorder(event){
    event.preventDefault()
    let catPath = event.target.childNodes[1].attributes[0].nodeValue
    let catName = event.target.childNodes[3].innerText
    console.log(catName,catPath);
   new Cardconst(catName,catPath);
console.log(cardarr);
}


Cardconst.prototype.render = function(){
let trEl = document.createElement('tr');
contain.appendChild(trEl);
let thEl = document.createElement('th');
trEl.appendChild('th');
thEl.textContent = "dog name";

let thEl2 = document.createElement('th');
trEl.appendChild('th');
thEl2.textContent = "dog image";

let tdEl = document.createElement('td');
trEl.appendChild(tdEl);

tdEl.textContent= `${this.catname} ${this.catImg}`
}

function saveToLocalStorage(){
    let string =JSON.stringify(cardarr);
    localStorage.setItem('key',string)
}

let test = document.getElementById('showList')

test.addEventListener('click',showlist);

function showlist(){
let data = localStorage.getItem('key');
let obj = JSON.parse(data);
console.log(obj);
if(obj ){
    for(let i = 0; i < obj.length; i++){
        new Cardconst(obj[i].catname,obj[i].catImg);
        Cardconst[i].render();
    }
    test.removeEventListener('click',showlist)
}

}

// console.log(this.name);


// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

// //cart

// let Images = ['german poppy.jpg', 'german.jpg', 'Golda-Puppy.jpg', 'haski.jpg', 'Pomeranian-puppies.jpg', 'rot baby.jpg', 'rottweiler-puppy.jpg'];


 
// var cart = new Cart([]);
// function populateForm() {
 
//   const selectElement = document.getElementById('pets');
//   for (let i in Pet.allPet) {
//     let El = document.createElement("option");
 
//     let option = Pet.allPet[i].name;
//     El.textContent = option;
//     El.value = option;
//     selectElement.appendChild(El);
//   }
 
// }
 
// function handleSubmit(event) {
 
//   event.preventDefault();
//   addSelectedItemToCart();
//   cart.saveToLocalStorage();
//   updateCounter();
//   updateCartPreview();
 
// }
 
// function addSelectedItemToCart() {
 
//   let pets = document.getElementById('pets').value;
 
//   let quantity = document.getElementById('quantity').value;
 
//   cart.addItem(pets, quantity)
// }


// //local

// function saveToLocalStorage() {

 
 

 
//     let data = JSON.stringify(bus);
    
     
//     localStorage.setItem('busMall', data);
    
     
     
    
     
//     }
    
     
     
    
     
//     function readFromLocalStorage() {
    
     
     
    
     
//     let stringObject = localStorage.getItem('busMall');
    
     
//     let normalObject = JSON.parse(stringObject);
    
     
     
    
     
//     if (normalObject) {
    
     
     
    
     
//     bus = normalObject;
    
     
//     renderImg();
    
     
     
    
     
//     }
    
     
     
    
     
//     }