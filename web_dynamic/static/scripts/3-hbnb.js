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

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  type: 'POST',
  data: {},
  contentType: 'application/json',
  dataType: 'json',
  success: function (data) {
    for (let i = 0; i < data.length; i++) {
      $('section.places').append(addPlace(data[i]));
    }
  }
});

function addPlace (place) {
  return `
    <article>
    <h2>${place.name}</h2>
    <div class="title_box">
    <div class="price_by_night">$${place.price_by_night}
    </div>
    </div>
    <div class="information">
    <div class="max_guest">
    ${place.max_guest} Guest
    </div>
    <div class="number_rooms">${place.number_rooms} Bedroom
    </div>
    <div class="number_bathrooms">${place.number_bathrooms} Bathroom
    </div>
    </div>
    <div class="description">${place.description}
    </div>
    </article>
    `;
}