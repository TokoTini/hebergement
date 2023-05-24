const options = {
    actions: {
        clickMonth(e, month) {
          console.log(month);
        },
        clickArrow(event, year, month) {
            console.log(year, month);
        },
        clickYear(event, year) {
          console.log(year);
        },
        clickWeekNumber(event, number, days, year) {
          console.log(`Week number: ${number}`);
          console.log(`Year of the week: ${year}`);
          console.log('Days of this week:', days);
        },
        clickWeekNumber(event, number, days, year) {
          calendar.settings.selected.dates = days.map((day) => day.dataset.calendarDay);
          calendar.update();
        },
    },
    type: 'multiple',
    settings: {
      lang: 'fr-FR',
      range: {
        disablePast: true,
      },
      selection: {
        day: 'multiple-ranged',
      },
      visibility: {
        theme: 'light',
      },
    },
    months: 2,
    CSSClasses : {
        column: 'vanilla-calendar-column',
    }
  };
  const calendar = new VanillaCalendar('#calendar', options);
  calendar.init();
