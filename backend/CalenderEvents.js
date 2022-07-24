var xhr = new XMLHttpRequest(); //handles external url search
var data = new XMLHttpRequest(); //handles our data html pages
var db;
//ALL PARAMETERS OF DB===========================================
var address;
var notes;
var title;
var event_type;
var event_group;
var more_info_url;
var all_dates;
var next_date;
var lat;
var long;
//===============================================================

/**
 * Retrieve Data from Calgary API
 * @param {*} field1
 * @param {*} field2
 * @param {*} field3
 * @param {*} field4
 */
function retrieve() {
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      db = JSON.parse(xhr.responseText);
      console.log("Database Ready");
      address = [];
      notes = [];
      title = [];
      event_type = [];
      event_group = [];
      more_info_url = [];
      all_dates = [];
      next_date = [];
      lat = [];
      long = [];

      var pickDay = "July 24";
      for (let i = 0; i < db.length; i++) {
        if (db[i].all_dates.startsWith(pickDay)) {
          address.push(db[i].address);
          notes.push(db[i].notes);
          title.push(db[i].title);
          event_type.push(db[i].event_type);
          more_info_url.push(db[i].more_info_url);
          event_group.push(db[i].event_group);
          all_dates.push(db[i].all_dates);
          next_date.push(db[i].next_date_times);
          lat.push(db[i].longitude);
          long.push(db[i].longitude);
        }

      }

      print();
    } else if (xhr.status == 404) {
      console.log("Could not find database");
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/n625-9k5x.json", true);

  xhr.send();
}
/**
 * TODO
 */
function print() {
  //here you will add your populate into HTML from JS....
  //basic for loop to print all to console
  for (let i = 0; i < db.length; i++) console.log(title[i]);
}
