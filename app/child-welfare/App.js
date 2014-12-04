/** new App(config) */
function App(config){
  var app = { title: config.title, 
             templates: {} };
  
  $(config.index)
    .forEach(function(article){
      // http://caniuse.com/#search=matches
      if (article.matches('[id][data]'))
        // keep template
        var template
          = app.templates[article.id]
          = article.outerHTML;
        // make copies
        config.resources[article.id].forEach(function(resource){
          
        });
    });
  
  function $(selector){
    return [].splice.call(document.body.querySelectorAll(selector),0);
  }
  /*
  // where is the feature index on the document?
  var index = document.querySelectorAll('#index,nav')[0];
  // initialize all features
  for (var featureName in config.features){
    var feature = config.features[featureName],
        // create slug, href, url or id
        href = '#' + featureName.toLocaleLowerCase()
          .replace(/\s+/,'-');
    
    // a. features could link to a page instead
    if ('string' == typeof feature)
      href = feature;
    
    // 1. generate links on document index
    index.insertAdjacentHTML('beforeend', featureName.link(href));
    // 2. create feature template from prototype (first item in collection)
    if (feature.length)
    
    // 3. generate content for array
      if (feature.map){
        var section = document.createElement('section');
          section.id = href;
        feature.map(function(resource, i, collection){
            var element = document.createElement('article');
            // copy to properties or data attributes
            for (var property in resource)
              if (property in element)
                 element[property] = resource[property];
              else
                element.setAttribute('data-'+property, resource[property]);

            return element;
          });
      }
  }*/
    console.log(app, this)
}
