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

    if (status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      amens = amens.filter(amen => amen !== name);
    }
    $('.amenities h4').text(amens.join(', '));

});
