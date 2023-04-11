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
let dropdown = document.querySelector(".list-dropdown")
stations.addEventListener('click', () => {
    stations.classList.toggle('active')
    dropdown.classList.toggle('active')
})


gsap.registerPlugin(ScrollTrigger);

gsap.to('.select',{
    scrollTrigger: {
        trigger: ".lower",
        start: "top 10%",
        end: "bottom 75%",
        toggleClass: { className: "active", targets: ".select" },
        // toggleActions: "",
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
        start: "top 10%",
        end: "bottom 90%",
        toggleClass: { className: "active", targets: ".map" },
        toggleActions: "resume none none none",
        // markers: {
        //     startColor: 'yellow',
        //     endColor: "pink",
        //     fontSize: '1.75rem',
        // },
    }
})

gsap.to('.map',{
    scrollTrigger: {
        trigger: ".lower",
        start: "bottom 95%",
        end: "bottom .1%",
        toggleClass: { className: "bottom", targets: ".map" },
        markers: {
            startColor: 'purple',
            endColor: "brown",
            fontSize: '1.75rem',
        },
    }
})

