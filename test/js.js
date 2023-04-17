let mainList = document.querySelectorAll('.primary li');

mainList.forEach(li => {
    li.addEventListener('click', (e) => {
        e.stopPropagation()
        // mainList.forEach(function(item) {
        //     item.classList.remove('active');
        // })
        li.classList.toggle('active');
    })
})



let secondaryList = document.querySelectorAll('.dropdown ul li')

secondaryList.forEach(li => {
    li.addEventListener('click', (e) => {
        e.stopPropagation()
        secondaryList.forEach(function(item) {
            item.classList.remove('active');
        })
        li.classList.add('active');
    })
})