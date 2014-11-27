/** app data */
var data = {
  'my cases': [
    new Case({
      due: new Date /* today */,
      child: 'UTAE0341422',
      type: 'Home Visit',
      priority: 'high'
    })
  ],
  children: [
    new Child({
      id: 'UTAE0341422',
      family: 'Sanchez', 
      given: 'Jerry',
      birthdate: new Date('1998-5-3'),
      race: 'Hispanic/Latino',
      school: 'Lincoln High',
      placement: 'Jones Family',
      photo: 'data:image/gif;base64,R0lGODlhAQABAAAAACw=',
    })
  ],
  documents:[],
  reports:[],
  regulations:[],
  contacts:[],
  about:[],
  help:[],
  feedback:[]
};