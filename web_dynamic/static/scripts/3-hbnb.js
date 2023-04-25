$(document).ready(function() {
  let amenities = {};

  $('input[type="checkbox"]').change(function() {
    if ($(this).prop('checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    let text = '';
    for (let amenity in amenities) {
      text += amenities[amenity] + ', ';
    }
    text = text.slice(0, -2); // remove last comma and space
    $('div.amenities h4').text(text);
  });
});

$(document).ready(function() {
  $.get('http://0.0.0.0:5001/api/v1/status/', function(data, status) {
      if (data.status === 'OK') {
          $('#api_status').addClass('available');
      } else {
          $('#api_status').removeClass('available');
      }
  });
});

$(document).ready(function () {
  const url = 'http://0.0.0.0:5001/api/v1/places_search/';
  const data = {};
  const options = {
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data),
  };
  $.ajax(url, options).done(function (places) {
    $.each(places, function (index, place) {
      const article = [
        '<article>',
        '<div class="title_box">',
        '<h2>' + place.name + '</h2>',
        '<div class="price_by_night">$' + place.price_by_night + '</div>',
        '</div>',
        '<div class="information">',
        '<div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest !== 1 ? 's' : '') + '</div>',
        '<div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms !== 1 ? 's' : '') + '</div>',
        '<div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms !== 1 ? 's' : '') + '</div>',
        '</div>',
        '<div class="description">',
        place.description,
        '</div>',
        '</article>',
      ].join('\n');
      $('section.places').append(article);
    });
  });
});