function Child(config){
  var defaults = {
    age: ((new Date - config.birthdate)/1000/60/60/24/365.2425)|0
  };
  for (var prop in config)
    this[prop] = config[prop];
  for (var prop in defaults)
    if (!(prop in config))
      this[prop] = defaults[prop];

  return this;
}

function Case(){}
function Medication(){}