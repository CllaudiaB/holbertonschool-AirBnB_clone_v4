$(document).ready(function() {
  let amenities = {};

  $('input[type="checkbox"]').change(function() {
    if (this.checked) {
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
