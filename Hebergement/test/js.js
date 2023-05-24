let slider = document.querySelector(".img-slider");
let parentDiv = document.querySelector(".img-container")
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
        // e.stopPropagation()
        mainList.forEach(function(item) {
            item.classList.remove('active');
        })
        li.classList.toggle('active');
        document.body.classList.add('disabled');
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
        // e.stopPropagation()
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



