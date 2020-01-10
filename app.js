var h = H$('Mansa', 'Musa');
// console.log(h);

h.greet().setLang('es').greet(true);

$('#login').click(function() {
  var loginHllw = H$('Jim', 'Johnson');

  $('#logindiv').hide();

  loginHllw.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})