let slider = document.querySelector(".img-slider");
let parentDiv = document.querySelector(".img-container")
let imgs = slider.getElementsByTagName("img");
let menuBtn = document.querySelector("#menu");
let navbar = document.querySelector(".navList");
let leftButtons = document.querySelectorAll('.btnLeft');
let rightButtons = document.querySelectorAll('.btnRight');


// menuBtn.addEventListener('click', () => {
//     navbar.classList.toggle('active')
// })


rightButtons.forEach(function(rightButton){
    rightButton.addEventListener('click', function(event){
        let parentDiv = event.target.closest('.img-container').querySelector('.img-slider');
        parentDiv.scrollBy({
            left: 300,
            behavior: 'smooth'
        })
    })
})



leftButtons.forEach(function(leftButton){
    leftButton.addEventListener('click', function(event){
        let parentDiv = event.target.closest('.img-container').querySelector('.img-slider');
        parentDiv.scrollBy({
            // left: -parentDiv.offsetWidth,
            left: -300,
            behavior: 'smooth'
        })
    })
})


let stations = document.querySelector(".station");
let stationsDropdown = document.querySelector(".station-dropdown");
let closeBtn = document.querySelectorAll(".closeBtn");


closeBtn.forEach(function(close){
    close.addEventListener('click', function(){
        close.closest('.modal').classList.remove('active');
    })
})



stations.addEventListener('click', () => {
    stationsDropdown.classList.toggle('active')
})


let listItems = document.querySelectorAll('.modal-options ul li');
listItems.forEach(li => {
    li.addEventListener('click', () => {
        li.classList.toggle('active');
    })
})


gsap.registerPlugin(ScrollTrigger);


/*** Different ScrollTrigger setups for various screen sizes (media queries) ***/
ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 800px)": function() {
    // setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
    // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    gsap.to('.select',{
        scrollTrigger: {
            trigger: ".lower",
            start: "top 10%",
            end: "bottom 5%",
            toggleClass: { className: "active", targets: ".select" },
            toggleActions: "",
            // markers: {
            //     startColor: 'black',
            //     endColor: "blue",
            //     fontSize: '1.75rem',
            // },
        }
    })
        gsap.to('.map',{
        scrollTrigger: {
            trigger: ".lower",
            start: "bottom 80%",
            end: "bottom .1%",
            toggleClass: { className: "bottom", targets: ".map" },
            // markers: {
            //     startColor: 'purple',
            //     endColor: "brown",
            //     fontSize: '1.75rem',
            // },
        }
    })
    gsap.to('.map',{
        scrollTrigger: {
            trigger: ".lower",
            start: "top 7%",
            end: "bottom 80%",
            toggleClass: { className: "active", targets: ".map" },
            toggleActions: "resume none none none",
            // markers: {
            //     startColor: 'yellow',
            //     endColor: "pink",
            //     fontSize: '1.75rem',
            // },
        }
    })
  }, 
  
  // mobile
  "(max-width: 799px)": function() {
    // Any ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore. 

  }, 
  
  // all 
  "all": function() {
    // ScrollTriggers created here aren't associated with a particular media query,
    // so they persist.
  }
  
});