let mainList = document.querySelectorAll('.primary > li');

mainList.forEach(li => {
    li.addEventListener('click', (e) => {
        // e.stopPropagation()
        mainList.forEach(function(item) {
            item.classList.remove('active');
        })
        li.classList.toggle('active');
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


let personnesInput = document.querySelector('.personnes .dropdown p')
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