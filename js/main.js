// Hide the input element when the page fully loaded.
$(document).ready(function(){
   $("#other-title").hide();
});
//'Your job role' text filed shows when user selects 'other', hides when user selects other options.
$('#title').change(function() {
  let optionValue = $('#title').val();
  if (optionValue === 'other') {
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
});
// find the element which it's id is design
$('#design').on('change', function() {
    let themeOption = $('#design').find('option:selected').attr('value');
    console.log(themeOption);

});
