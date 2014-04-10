$(function() {
    function loadPhoto() {
    var url = 'https://api.instagram.com/v1/tags/snow/media/recent?access_token=960620.f59def8.1e7aae81446047ee89d984d1045455de';
    $.ajax(url, {
        dataType: 'jsonp',
        success: function(data) {
            var photo = data.first();
            $('<img src=\"' + photo.data.images.standard_url + '\"/>').appendTo($('body'));
        }
    };
});