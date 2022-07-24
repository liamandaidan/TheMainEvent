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


      for (let i = 0; i < db.length; i++) {
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

      show(db);
    } else if (xhr.status == 404) {
      console.log("Could not find database");
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/n625-9k5x.json", true);

  xhr.send();
}



function show(db) {
  var output = "<h2>July 25</h2><table>" +
    "<tr><th>" +
    "Title" +
    "</th><th>" +
    "Event_group" +
    "</th>" +
    "<th>" +
    "Notes" +
    "</th><th>" +
    "All_dates" +
    "</th><th>Maps Link</th></tr>";
  // var arry = JSON.parse(xhr.responseText);
  var pickDay = "Jul 25";
  for (var i = 0; i < db.length; i++) {
    if (all_dates[i].includes(pickDay)) {
      output += "<tr><td>" + title[i];
      output += "&emsp;</td><td>" + event_group[i];
      output += "&emsp;</td><td>" + notes[i];
      output += "&emsp;</td><td>" + all_dates[i];
      output += "&emsp;</td><td><a href=\"https://www.google.com/maps/search/?api=1&query=" + lat[i];
      output += "," + long[i];
      output += "\" target=\"_blank\">Click here</a></td></tr></table>";
    }
  }
  document.getElementById("display").innerHTML = output;
  console.log(output)
}
