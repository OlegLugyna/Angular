var out = document.getElementById('out');
var search = document.getElementById('search');
var button = document.getElementById('show');

button.addEventListener('click', show);
document.onkeypress = function(event){
  if((event.keyCode == 12) && (search.value.length >= 2)){
    show();
  } else {
    out.textContent = 'Введите ваш запрос';
  }
}

function show(){
  var api = fetch('https://pixabay.com/api/?key=6023562-93bd63ca50a55f42f7d91ccd5&q='+search.value+'&image_type=photo&pretty=true&per_page=6');
  //var result;
  api.then(function(response){
    if(response.ok){
      return response.json();
    } else {
      return false;
    }
  }).then(function(data){
    var photo = data.hits.map(function (item){
      return out.innerHTML += "<img src="+item.webformatURL+'"'+'/>';
    });
  });
  api = fetch('https://pixabay.com/api/?key=6023562-93bd63ca50a55f42f7d91ccd5&q=');
  out.innerHTML = '';
}