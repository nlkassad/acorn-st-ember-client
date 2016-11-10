import Ember from 'ember';
// import moment from 'moment';
// Deprecated since version 0.8.0
// Handlebars.registerHelper("formatDate", function(datetime, format) {

// Use UI.registerHelper..
export function(datetime, format) {
  if (moment) {
    // can use other formats like 'lll' too
    format = DateFormats[format] || format;
    return moment(datetime).format(format);
  }
  else {
    return datetime;
  }
});
