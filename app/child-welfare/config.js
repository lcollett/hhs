/** App.call({ name:'string', features:Array }) */
App.call({
  name: 'Child Welfare',
  features: {
    Cases: [
      {
        due: new Date + (12*60*60*1e3)/* 12h later */,
        id: 'UTAE0341422',
        type: 'Home Visit',
        priority: 'high'
      }
    ],
    Children: [
      {
        id: 'UTAE0341422',
        family: 'Sanchez', 
        given: 'Jerry',
        birthdate: new Date('1998-5-3'),
        race: 'Hispanic/Latino',
        school: 'Lincoln High',
        placement: 'Jones Family',
        img: 'data:image/gif;base64,R0lGODlhAQABAAAAACw=',
      }
    ],
    About: 'page/about.html'
  }
});
