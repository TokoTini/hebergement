let slider = document.querySelector(".img-slider");
let parentDiv = document.querySelector(".img-container")
let imgs = slider.getElementsByTagName("img");
let menuBtn = document.querySelector("#menu");
let navbar = document.querySelector(".navList");
let leftButtons = document.querySelectorAll('.btnLeft');
let rightButtons = document.querySelectorAll('.btnRight');


menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active')
})


rightButtons.forEach(function(rightButton){
    rightButton.addEventListener('click', function(event){
        let parentDiv = event.target.closest('.img-container').querySelector('.img-slider');
        parentDiv.scrollBy({
            left: parentDiv.offsetWidth,
            behavior: 'smooth'
        })
    })
})



leftButtons.forEach(function(leftButton){
    leftButton.addEventListener('click', function(event){
        let parentDiv = event.target.closest('.img-container').querySelector('.img-slider');
        parentDiv.scrollBy({
            left: -parentDiv.offsetWidth,
            behavior: 'smooth'
        })
    })
})


let images = document.getElementsByTagName("img");

for (i = 0; i < images.length; i++) { 
    if(images[i].naturalHeight < images[i].naturalWidth){
        images[i].classList.add('landscape');
    }else if(images[i].naturalHeight > images[i].naturalWidth){
        images[i].classList.add('portrait');
    }
    console.log(images[i].naturalHeight + " img " + images[i].naturalWidth)
}