var container = document.querySelector('#container');
var msnry = new Masonry( container, {
  // Настройки
  columnWidth: 200,
  itemSelector: '.item',
  isFitWidth: true,
  gutter: 20,
  columnWidth: '.item'
});