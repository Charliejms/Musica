/**
 * Created by richardcj on 18/7/16.
 */

var $ = require('jquery');

$('.add-icon').on ("click",function () {
   $('body').toggleClass("form-shown").toggleClass("songs-list-shown");
});

