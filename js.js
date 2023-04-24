let slider = document.querySelector(".img-slider");
let parentDiv = document.querySelector(".img-container")
let imgs = slider.getElementsByTagName("img");
let menuBtn = document.querySelector("#menu");
let navbar = document.querySelector(".navList");
let leftButtons = document.querySelectorAll('.btnLeft');
let rightButtons = document.querySelectorAll('.btnRight');


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

let form = document.querySelectorAll('form');
form.forEach(f => {
    f.addEventListener('click', (event) => {
        event.stopPropagation()
    })
})

// primary list station/category/arrival-departure/number of persons
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
        let parentDiv = e.target.closest('.primary > li');
        parentDiv.classList.remove('active');
        document.body.classList.remove('disabled');
    })
})


//list for stations dropdown menu
let secondaryList = document.querySelectorAll('.dropdown ul li')
secondaryList.forEach(li => {
    li.addEventListener('click', (e) => {
        e.stopPropagation()
        secondaryList.forEach(function(item) {
            item.classList.remove('active');
        })
        e.stopPropagation()
        li.classList.toggle('active');
    })
})



//buttons for increase/decrease number of persons
let personnesInput = document.querySelector('.personnes p')
let personnes = document.querySelector('.main-content > p');
let plusBtn = document.querySelector('.plus')
let minusBtn = document.querySelector('.minus')

let n = 4;
plusBtn.addEventListener('click', () => {
    n++;
    personnesInput.textContent = n +" " + "Personnes";
    personnes.textContent = n + " " + "Personnes";
})

minusBtn.addEventListener('click', () => {
    if(n > 1){
        n--;
    }else{
        n = 1;
    }
    let person = n > 1 ? "Personnes" : "Personne";
    personnesInput.textContent = n +" "+ person;
    personnes.textContent = n +" "+ person;
})


// display map modal on mobile devices + information importante modal
let mapBtn = document.querySelector('.carte');
let map = document.querySelector('.map');
let closeMap = document.querySelector('.closeMap');
let mapInfo = document.querySelector('.info-map');
let mapOverlay = document.querySelector('.map-overlay');
let closeMapInfo = document.querySelectorAll('.close-map-info');

mapBtn.addEventListener('click',() =>{
    map.classList.add('full');
    mapInfo.classList.add('active');
    mapOverlay.classList.add('active')
    document.body.classList.add('disabled');
})
closeMap.addEventListener('click', () =>{
    map.classList.remove('full')
    mapInfo.classList.remove('active');
    mapOverlay.classList.remove('active');
    document.body.classList.remove('disabled');
})
closeMapInfo.forEach(btn => {
    btn.addEventListener('click', () => {
        mapInfo.classList.remove('active');
        mapOverlay.classList.remove('active');
    })
})


// display search options modal
let optionsBtn = document.body.querySelectorAll('.filter');
let filter = document.body.querySelector('.options');
let closeFilter = document.body.querySelector('.closeOptions');

optionsBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        filter.classList.add('active');
    })
})


// open dates modal from .map modal
let openDates = document.body.querySelectorAll('.openDates');
let dates = document.body.querySelector('.dates')

openDates.forEach(btn => {
    btn.addEventListener('click', () => {
        dates.classList.add('active');
    })
})


// close filter modal
closeFilter.addEventListener('click', () =>{
    filter.classList.remove('active')
    document.body.classList.remove('disabled');
})

//filter options 
let prixInput = document.body.querySelector('.prixInput');
let optionsPrix = document.body.querySelector('.optionsPrix')
let numInput = document.body.querySelector('.numInput input')

function showValue(newVal){
    let value = newVal > 4000 ? 4000 : newVal;
    // optionsPrix.innerHTML = "Prix max. du sejour: <b>" + value + "€</b>.";
    prixInput.value = value;
    numInput.value = value;
}

//sort modal 

let sort = document.body.querySelector('.trier');
let sortModal = document.body.querySelector('.sort-modal');
let closeSort = document.body.querySelector('.closeSort');

// open sort modal
sort.addEventListener('click', () => {
    sortModal.classList.add('active');
})
//close sort modal
closeSort.addEventListener('click', () => {
    sortModal.classList.remove('active');
})

// create list of sort options for mobile devices                                                              
let select = document.getElementById('sort');
let ul = document.querySelector('.sort-modal ul');
for(let i = 0; i < select.options.length; i++) {
    var option = select.options[i];
    var li = document.createElement('li');
    li.textContent = option.textContent;
    li.setAttribute('data-value', option.value);
    li.addEventListener('click', (event) => {
        select.value = event.target.getAttribute('data-value');
        sortModal.classList.remove('active');
    })
    ul.appendChild(li);
}




// special offers container 
let scrollLeft = document.querySelectorAll('.scrlLeft');
let scrollRight = document.querySelectorAll('.scrlRight');

scrollLeft.forEach(function(leftBtn){
    leftBtn.addEventListener('click', function(event){
        let parentDiv = event.target.closest('.offersCont').querySelector('.offers');
        parentDiv.scrollBy({
            left: -300,
            behavior: 'smooth'
        })
        console.log('hola')
    })
})

scrollRight.forEach(function(rightBtn){
    rightBtn.addEventListener('click', function(event){
        let parentDiv = event.target.closest('.offersCont').querySelector('.offers');
        parentDiv.scrollBy({
            left: 300,
            behavior: 'smooth'
        })
        console.log('hola')
    })
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
            start: "top 23.5%",
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
  "(max-width: 768px)": function() {
    // Any ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore. 
    gsap.to('.searchFilter',{
        scrollTrigger: {
            trigger: ".lower",
            start: "top 20%",
            end: "bottom 20%",
            toggleClass: { className: "fixed", targets: ".searchFilter" },
            toggleActions: "resume none none none",
            // markers: {
            //     startColor: 'yellow',
            //     endColor: "pink",
            //     fontSize: '1.75rem',
            // },
        }
    })
  }, 
  
  // all 
  "all": function() {
    // ScrollTriggers created here aren't associated with a particular media query,
    // so they persist.
  }
  
});

