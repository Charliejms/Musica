/**
 * Created by richardcj on 14/7/16.
 */

var $ = require('jquery');
var utils = require("./utils");

module.exports = {
    load: function(){
        // Petición AJAX para cargar la lista de canciones
        $.ajax({
            url: "/api/songs/?_order=id",
            success: function(response) {
                $('.song-list').html(''); // vaciamos la lista
                for (var i in response) {
                    var song = response[i];

                    var cover_url = song.cover_url || "";
                    if (cover_url == "") {
                        cover_url = 'dist/img/disc-placeholder.jpg';
                    }
                    var artist = song.artist || "";
                    var title = song.title || "";

                    var html = '<article class="song">';
                    html += '<img class="cover" src="' + cover_url + '">';
                    html += '<img class="favourite-button" src="dist/img/icon-trash.png" title="Detelete song">';
                    html += '<div class="artist">' + utils.escapeHTML(artist) + '</div>';
                    html += '<div class="title">' + utils.escapeHTML(title) + '</div>';
                    html += '</article>';
                    $('.songs-list').append(html);
                }
            },
            error: function(response){
                console.error("ERROR", response);
            }
        });
    }
}

