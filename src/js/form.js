/**
 * Created by richardcj on 14/7/16.
 */
var $ = require('jquery');


//al hacer click en el boton de guardar 
// enviamos una petición AJAX para almacenar la canción

$('.new-song-form button').on("click",function () {
    console.log("Click en el Button");
    //antes de la llamada ajax realizar la llamada.
    //Realizar la validadción.
    var inputs = $('.new-song-form input');
    for (var i = 0;i<inputs.length;i++){
        var input = inputs[i];
        //debugger;
        if (input.checkValidity() == false){
            alert(input.validationMessage);
            input.focus();
            return false;
        }
    }

    //cancion que quiero crear
    var song = {
        artist: $('#artist').val(),
        title: $('#title').val(),
        audio_url: $('#audio_url').val(),
        cover_url: $('#cover_url').val()
    };

    //petición AJAX para guardar la información en el BackEnd
    $.ajax({
        url:"/api/songs",
        method: "post",
        data: song,
        success: function (response) {
            console.log("SUCCESS",response);
            $('form')[0].reset(); // resetea el formualario si a ido bien
            $('artist').focus(); // el foco vuelve al form de artist
        },
        error:function () {
            console.log("ERROR",arguments);
        }
    });
    return false; // =>evt.preventDefault
});