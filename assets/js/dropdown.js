// Check dropdown status when page is reloaded 
window.addEventListener('load', function() {
    var dropdownState = localStorage.getItem('dropdown-state');
	var menu = this.localStorage.key(); 
	console.log("reloaded", menu, dropdownState);
    if (dropdownState === 'open') {
		menu.classList.add('show');
		menu.classList.remove('hide');
		arrow.classList.add('open');
		arrow.classList.remove('close');
    }
});


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
				localStorage.setItem(menu, 'open');
			}
			else {
				menu.classList.remove('show');
				menu.classList.add('hide');
				arrow.classList.remove('open');
				arrow.classList.add('close');
				event.preventDefault();
				localStorage.setItem(menu, 'closed');
			}
		};
	}
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};