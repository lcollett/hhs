this[document.title] = function(title){
  return Object.observe({ 
    name: title,
    url: location.href
  }, function queue(events){
    events.forEach(function(change, i){
      switch (change.type) {
        case 'delete':
          delete localStorage[change.name];
          break;
        case 'add':
        case 'update':
          localStorage[change.name] = 
            JSON.stringify(change.object[change.name]);
        default:
          console.info(change.type, change.name);
      }
    });
  });
}(document.title);
