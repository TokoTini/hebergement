const options = {
    actions: {
        clickMonth(e, month) {
          console.log(e,month);
        },
        clickArrow(event, year, month) {
            console.log(year, month);
          },
          clickYear(event, year) {
            console.log(year);
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
        month: true,
        year: true,
      },
      visibility: {
        weekend: false,
        daysOutside: false,
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

  console.log(calendar.currentType)