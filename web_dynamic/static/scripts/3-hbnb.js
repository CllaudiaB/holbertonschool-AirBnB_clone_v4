$(document).ready(function() {
  $.ajax({
    type: "POST",
    url: "http://0.0.0.0:5001/api/v1/places_search",
    data: JSON.stringify({}),
    contentType: "application/json; charset=UTF-8",
    dataType: "json",
    success: function(data) { 
      console.log('OK');
      console.log(data);
      // レスポンス(data)からplaceをループ処理
      for (let i = 0; i < data.length; i++) {
        const place = data[i];
        console.log(place);

        let article = $('<article>');
        $('article').append('<div>');
        $('div').append('<h2>' + place.name + '</h2>');
      }
      }
});
});
