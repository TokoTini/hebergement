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

// if(li.classList.contains('active')){
//     li.classList.remove('active');
// }else {
//     mainList.forEach(function(item) {
//         item.classList.remove('active');
//     })
//     li.classList.add('active');
// }
let mainList = document.querySelectorAll('.primary > li');
let closeBtn = document.querySelectorAll('.closeBtn');
mainList.forEach(li => {
    li.addEventListener('click', (e) => {
        e.stopPropagation()
        mainList.forEach(function(item) {
            item.classList.remove('active');
        })
        li.classList.toggle('active');
        if(li.classList.contains('active')){
            document.body.classList.add('disabled');
        }else {
            document.body.classList.remove('disabled');
        }
    })
})

closeBtn.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        e.stopPropagation()
        let parentDiv = e.target.closest('li');
        parentDiv.classList.remove('active');
        document.body.classList.remove('disabled');
    })
})



let secondaryList = document.querySelectorAll('.dropdown ul li')

secondaryList.forEach(li => {
    li.addEventListener('click', (e) => {
        e.stopPropagation()
        secondaryList.forEach(function(item) {
            item.classList.remove('active');
        })
        li.classList.toggle('active');
    })
})


let personnesInput = document.querySelector('.personnes .number p')
let personnes = document.querySelector('.personnes > p');
let plusBtn = document.querySelector('.plus')
let minusBtn = document.querySelector('.minus')


let n = 4;
plusBtn.addEventListener('click', () => {
    n++;
    personnesInput.innerHTML = n +" " + "Personnes";
    personnes.innerHTML = n + " " + "Personnes";
})

minusBtn.addEventListener('click', () => {
    if(n > 1){
        n--;
    }else{
        n = 1;
    }
    let person = n > 1 ? "Personnes" : "Personne";
    personnesInput.innerHTML = n +" "+ person;
    personnes.innerHTML = n +" "+ person;
})


let mapBtn = document.querySelector('.carte');
let map = document.querySelector('.map');
let closeMap = document.querySelector('.closeMap');

mapBtn.addEventListener('click',() =>{
    map.classList.add('full');
    document.body.classList.add('disabled');
})
closeMap.addEventListener('click', () =>{
    map.classList.remove('full')
    document.body.classList.remove('disabled');
})

gsap.registerPlugin(ScrollTrigger);
/*** Different ScrollTrigger setups for various screen sizes (media queries) ***/
ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 800px)": function() {
    // setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
    // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    gsap.to('.primary',{
        scrollTrigger: {
            trigger: ".lower",
            start: "top 10%",
            end: "bottom 5%",
            toggleClass: { className: "active", targets: ".primary" },
            // markers: {
            //     startColor: 'red',
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