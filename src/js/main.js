// бургер меню
$(document).ready(function() {
  $('.header__burger').click(function(event) {
  	$('.header__burger,.header__menu').toggleClass('active');
  	// для того чтоб не скролился случайно контент под меню 
  	// когда оно открыто на малых разрешениях
  	$('body').toggleClass('lock');
  });
});
