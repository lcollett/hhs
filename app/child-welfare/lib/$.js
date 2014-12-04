function $(s){return document.querySelectorAll(s)};

Node.prototype.on = function(event,fn){
  this.addEventListener(event,fn,false);
  return this; };
Node.prototype.trigger = function(type, data){
  this.dispatchEvent(new CustomEvent(type, { detail: data }));
  return this; };

NodeList.prototype.forEach = [].forEach;
NodeList.prototype.on = function(event, fn){
  this.forEach(function(el){el.on(event,fn)});
  return this; };
NodeList.prototype.trigger = function(event, data){
  this.forEach(function(el){el.trigger(event, data)});
  return this; };

function $E(tagName, attrs){
  var el = document.createElement(tagName);
  for (var name in attrs)
    if (name in el) 
      el[name] = attrs[name];
    else
      el.setAttribute(name, attrs[name]);
  return el;
}