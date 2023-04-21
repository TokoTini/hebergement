const options = {
  actions: {
      clickDay(event, dates) {
          
        let start = dates[0].split('-');
        let newStart =  start[2] + "/" +start[1]+ "/" +start[0];
        let end = dates[dates.length -1].split('-');
        let newEnd =  end[2]+ "/" +end[1]+ "/" +end[0];
        
        if(newStart > newEnd) {
          displayDates(newEnd,newStart);
        }else{
          displayDates(newStart,newEnd);
        }
      },
  },
  type: 'multiple',
  settings: {
    lang: 'fr-FR',
    range: {
      disablePast: true,
      // disabled: ['2023-04-21:2023-04-25'],
    },
    selection: {
      day: 'multiple-ranged',
    },
    visibility: {
      theme: 'light',
      weekend: false,
    },
  },
  months: 2,
  CSSClasses : {
      column: 'vanilla-calendar-column',
  },
  popups: {
      '2023-05-11': {
        modifier: 'bg-red color-pink',
        html: `test popup for 28th of may`, // or just text 'Airplane in Las Vegas'
      },
    }
};
const calendar = new VanillaCalendar('#calendar', options);
calendar.init();

let startDate = document.body.querySelector('.arrivee');
let endDate = document.body.querySelector('.depart');

function displayDates(a,b){
  if(a,b){
      startDate.textContent = a;
      endDate.textContent = b;
  }else{
      startDate.innerHTML = "<ion-icon name=" + "calendar-outline" + "></ion-icon></ion-icon>Depart";
      endDate.innerHTML = "<ion-icon name=" + "calendar-outline" + "></ion-icon>Arrivee"
  }
  console.log(a,b)
}
