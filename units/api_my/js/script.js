(function(){
  'use strict';

  var section = document.querySelector('.tile');

  function createApi() {

    var input = section.querySelector('.input__form');
    var dataQuery = input.value;
    //console.log('dataQuery:', dataQuery);
    return encodeURI('https://pixabay.com/api/?key=5722856-55f0750c7fd7b55c44652343b&q=' + dataQuery + '&image_type=photo&pretty=true&per_page=10');
  }

  //console.log (createApi());

  function apiQuery() {
    var container = section.querySelector('.masonry');
    // var container = document.getElementById('masonry');
    var source = document.getElementById('template').textContent;
    var compiled = _.template(source);
    var apiUrl = createApi();
    //console.log ('apiUrl', apiUrl);
    var apiQuery = fetch(apiUrl);
    apiQuery.then(function (responce) {
      if(responce.ok) {
        return responce.json();
      } else {
        return false;
      }
    }).then (function(data) {
      var photoArr = _.map(data.hits, function(item) {
        return {
          img: item.webformatURL,
          author: item.user
        };
      });
      //console.log('Это PhotoArr:', photoArr);
      render(compiled, photoArr, container);
    }).catch(function(error) {
      console.log (error);
    });

    function render(template, data, parent) {
      var htmlString = ' ';

      _.forEach(data, function(item) {
        htmlString += template(item);
      });

      parent.innerHTML = htmlString;
    }

  }

//apiQuery();

    var btn = section.querySelector('.input__btn');
    btn.addEventListener('click', function() {
      apiQuery();
    });
})();
