function grabImages(access_parameters) {

	var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count='+ count; 
	
	$.getJSON(instagramUrl, access_parameters, onDataLoaded);

}

function onDataLoaded(instagram_data) {

  if(instagram_data.meta.code == 200) {

    var photos = instagram_data.data;

    if(photos.length > 0) {
      
      for (var key in photos ){

        var photo = photos[key];

        $('#target').append('');
      }
    }
    else {

      $('#target').append("Hmm.  I couldn’t find anything!");
    	} else  {

      var error = data.meta.error_message;
      
      $('#target').append('Something happened, Instagram said: ’ + error');
    }
  }
}  