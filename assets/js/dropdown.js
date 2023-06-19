// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);

dropdownArray.forEach(function(el){
  var menu = el.querySelector('.dropdown-menu');
  var button = el.querySelector('i.icon-arrow[data-toggle="dropdown"]'),
    arrow = el.querySelector('i.icon-arrow');

  if(button != null){
    button.onclick = function(event){
      if(!menu.hasClass('show')) {
        menu.classList.add('show');
        menu.classList.remove('hide');
        arrow.classList.add('open');
        arrow.classList.remove('close');
        event.preventDefault();
      }
      else {
        menu.classList.remove('show');
        menu.classList.add('hide');
        arrow.classList.remove('open');
        arrow.classList.add('close');
        event.preventDefault();
      }
      
      // Store the status of the dropdown menu in localStorage
      var dropdownStatus = menu.hasClass('show') ? 'open' : 'closed';
      localStorage.setItem('dropdownStatus', dropdownStatus);
    };
  }
});

Element.prototype.hasClass = function(className) {
  return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

// Retrieve the dropdown menu status from localStorage when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
  var dropdownStatus = localStorage.getItem('dropdownStatus');
  if (dropdownStatus === 'open') {
    var dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(function(menu) {
      menu.classList.add('show');
      menu.classList.remove('hide');
      var arrow = menu.previousElementSibling.querySelector('i.icon-arrow');
      arrow.classList.add('open');
      arrow.classList.remove('close');
    });
  }
});
