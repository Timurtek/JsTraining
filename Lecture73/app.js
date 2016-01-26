$('#login').click(function(){
  var selectedLang = $("#lang" ).val();
  var a = G$('Timurtek','Bizel',selectedLang);
  $('#logindiv').hide();
  a.HTMLGreeting('h1#greeting',true).log();
});
