/**
 * Created by richardcj on 18/7/16.
 */
var $ = require('jquery');

//evitar que te inserten codigo en los textfield de atacantes
module.exports = {
    escapeHTML: function (str) {
        return $('<div>').text(str).html();
    }
}