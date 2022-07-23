var xhr = new XMLHttpRequest(); //handles external url search
var data = new XMLHttpRequest(); //handles our data html pages
var db;
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
var allTags; //sorted tags

function emailBot(){

}

function getTags() {
  allTags = [];
  //may be problematic
  const allTypes = event_type.sort();

  for (let i = 0; i < db.length - 1; i++) {
    if (allTypes[i + 1] === allTypes[i]) {
    } else {
      allTags.push(allTypes[i]);
    }
  }

  for (let i = 0; i < allTags.length; i++) {
    console.log(allTags[i]);
  }
}

function retrieve(field1, field2, field3, field4) {
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
      let output =
        "<h2>Search Results</h2><table>" +
        "<tr><th>" +
        field1 +
        "</th><th>" +
        field2 +
        "</th>" +
        "<th>" +
        field3 +
        "</th><th>" +
        field4 +
        "</th><th>Maps Link</th></tr>";

      for (let i = 0; i < db.length; i++) {
        address.push(db[i].address);
        notes.push(db[i].notes);
        title.push(db[i].title);
        event_type.push(db[i].event_type);
        event_group.push(db[i].event_group);
        all_dates.push(db[i].all_dates);
        next_date.push(db[i].next_date_times);
        lat.push(db[i].longitude);
        long.push(db[i].longitude);
        url =
          "https://www.google.ca/maps/place/" +
          address[i] +
          " " +
          long[i] +
          " " +
          lat[i];
        output +=
          "<tr><td>" +
          event_group[i] +
          "</td>" +
          "<td>" +
          notes[i] +
          "</td>" +
          "<td>" +
          title[i] +
          "</td>" +
          "<td>" +
          event_type[i] +
          "</td>" +
          '<td><a target="_blank" href="' +
          url +
          '">Click Me!</a></td></tr>';
      }
      output += "</table>";
      display(output);
    } else if (xhr.status == 404) {
      console.log("Could not find database");
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/n625-9k5x.json", true);

  xhr.send();
}

function display(output) {
  document.getElementById("display").innerHTML = output;
}

function initialize() {
  var mapCanvas = document.getElementById('map');
  //51.0489141,-114.0680675
  var myLatLng = {lat: 51.0489141, lng: -114.0680675};
  var mapOptions = {
    center: new google.maps.LatLng(myLatLng),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)
  var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: 'Hello World!'
});
}
function search() {}
