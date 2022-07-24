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
var usedKeyWords; //this will contain the keywords used in events.
var allTags; //sorted tags

function emailBot() {}
function search(query) {
  let output =
    "<table>" +
    "<tr><th>" +
    "title" +
    "</th><th>" +
    "event_group" +
    "</th>" +
    "<th>" +
    "notes" +
    "</th><th>" +
    "all_dates" +
    "</th><th>Maps Link</th></tr>";
  for (let i = 0; i < db.length; i++) {
    if (query === event_type[i]) {
      url = "https://www.google.ca/maps/place/" + long[i] + " " + lat[i];
      output +=
        "<tr><td>" +
        title[i] +
        "</td>" +
        "<td>" +
        event_type[i] +
        "</td>" +
        "<td>" +
        notes[i] +
        "</td>" +
        "<td>" +
        all_dates[i] +
        "</td>" +
        '<td><a target="_blank" href="' +
        url +
        '">Click Me!</a></td></tr>';
    }else{
      url = "https://www.google.ca/maps/place/" + long[i] + " " + lat[i];
      output +=
        "<tr><td>" +
        title[i] +
        "</td>" +
        "<td>" +
        "Other" +
        "</td>" +
        "<td>" +
        notes[i] +
        "</td>" +
        "<td>" +
        all_dates[i] +
        "</td>" +
        '<td><a target="_blank" href="' +
        url +
        '">Click Me!</a></td></tr>';
    }
  }
  document.getElementById("table").innerHTML = output;
}
/**
 * Here we will get the tags for our search query.
 */
function getTags() {
  allTags = [];
  // //may be problematic
  const allTypes = [].concat(event_type);
  allTypes.sort();
  for (let i = 0; i < db.length - 1; i++) {
    if (allTypes[i + 1] === allTypes[i]) {
    } else {
      allTags.push(allTypes[i]);
    }
  }
  allTags.push("Other");
  let output = " <option selected hidden='true'>Select a Category</option>";
  for (let i = 0; i < allTags.length; i++) {
    output +=
      "<option value= '" + allTags[i] + "' >" + allTags[i] + " </option>";
  }

  document.getElementById("menu").innerHTML = output;
}
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
        url =
          "https://www.google.ca/maps/place/" +
          address[i] +
          " " +
          long[i] +
          " " +
          lat[i];
      }

      getTags();
    } else if (xhr.status == 404) {
      console.log("Could not find database");
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/n625-9k5x.json", true);

  xhr.send();
}

/**
 * Google maps functionality
 */
function initialize() {
  var mapCanvas = document.getElementById("map");
  //51.0489141,-114.0680675
  var myLatLng = { lat: 51.0489141, lng: -114.0680675 };
  var mapOptions = {
    center: new google.maps.LatLng(myLatLng),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Hello World!",
  });
}

//search optimization keywords
var keywords = {
  "drop-in": "Drop-in",
  nature: "Outdoors",
  skate: "Physical activity",
  yoga: "Physical activity",
  family: "Family",
  children: "Children",
  gym: "Physical activity",
  filipino: "Filipino",
  asian: "Asian",
  recreation: "Recreation",
  leisure: "Leisure",
  sport: "Physical activity",
  athletic: "Physical activity",
  community: "Community",
  preschool: "Childern",
  "board meeting": "City Business",
};

function findKeys(input, keywords) {
  //step 1 return if keys are found
  var found = Object.keys(keywords).find(
    (key) => input.toLowerCase().search(key) > -1
  );
  let flag = false;
  if (found != null) {
    console.log("FOUND@ " + found);
    flag = true;
  } else {
    console.log("not found");
  }
  //step 2 find what keys are found
  if (flag) {
    getKey(input);
    for (let i = 0; i < foundKeywords.length; i++) {
      console.log(foundKeywords[i]);
    }
  }
  //step 3 return list of keys

  //  console.log(found);

  return keywords[found] || "null";
}
var foundKeywords = [];

function getKey(text) {
  var found = Object.keys(keywords).find(
    (key) => text.toLowerCase().search(key) > -1
  );
  if (found == null) {
    return text;
  } else {
    let t = "" + found;
    foundKeywords.push(t);
    text.replaceAll(found, "");
    getKey(text);
  }
}
