/** App.call(this) */
function App(){
  // where is the feature index on the document?
  var index = document.querySelectorAll('#index,nav')[0];
  // initialize all features
  for (var name in this.features){
    var feature = this.features[name],
        // create slug, href, url or id
        href = '#' + name.toLocaleLowerCase()
          .replace(/\s+/,'-');
    
    // a. features can link to a page
    if ('string' == typeof feature)
      href = feature;
    // b. or created from configuration
    if (feature instanceof Array)
      feature.forEach(App.Feature.bind(name));
    
    // 0. generate nav or index
      index
      .insertAdjacentHTML('beforeend',
                          // adding a local link
                          name.link(href));
    // 1. 
  }
}
/** [].forEach(App.Feature) */
App.Feature = function(item){
  // console.log(item);
  // iterate through collection of allegedly similar things
  for (var property in item){
    // need feature name?
    console.info(this, property, item[property]);
  }
};