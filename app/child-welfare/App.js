function App(data){
  console.info(data);
  Object.keys(this).map(function(name){
    var value = this[name];
    console.warn(name, value)
  }, this);
  return this; 
}
  
if ('run')
  App.call(config, data);