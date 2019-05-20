$('document').ready(function () {

  let amens = {};
  $('input[type=checkbox]').change(function () {
    let name = $(this).attr('data-name');
    if ($(this).is(':checked')) {
      amens.push(name);
    } else {
      delete amens[name];
    }
    $('.amenities h4').text(amens.join(', '));
  ]});

});
