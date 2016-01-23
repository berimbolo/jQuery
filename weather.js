function getLocation() {
  var location = $('#location').val();
  if (isNaN(location)) {
    getWeatherName(location);
  } else {
    getWeatherNum(location);
  }
  $('#location').val('');
}

function getWeatherNum(zipcode) {
  $.ajax({
    dataType: 'json',
    url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=34d0f8e4b6b92c5ac2c1497b7ad82638&cnt=7',
    success: getData
  });
}

function getWeatherName(locationName) {
  $.ajax({
    dataType: 'json',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + locationName + ',us&APPID=34d0f8e4b6b92c5ac2c1497b7ad82638&cnt=7',
    success: getData
  });
}

function getData(data) {
  // http://openweathermap.org/api
  // sample json from openweathermap: http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=2de143494c0b295cca9337e1e96b00e0
  var name = data.name;
  var currentTempK = data.main.temp;
  var currentTempC = currentTempK - 273.15;
  var currentTempF = Math.round(currentTempC * 9 / 5 + 32);
  var main = data.weather[0].main;
  var weatherTag = data.weather[0].description;
  var encodeName = name.replace(/ /g, '+');


  flickrSearch(encodeName);
  
  $('h2').empty();
  $('h3').empty();
  $('h2').append(main);
  $('h3').append(name + ': ' + currentTempF + ' Farenheit');
}

  function flickrSearch(encodeName){
  $.ajax({
    // reference https://www.flickr.com/services/api/flickr.photos.search.html
    dataType: 'json',
    url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=691457f45d469470a5607ade5c43b62c&tags='+ encodeName +'&license=&group_id=26328425%40N00&format=json&nojsoncallback=1',
    success: changeBackground
  });
}

function changeBackground(flickr) {
  /* sample json from flickr

    { "photos": { "page": 1, "pages": 1, "perpage": 100, "total": 5, 
      "photo": [
        { "id": "24036576982", "owner": "13978965@N07", "secret": "79383c5067", "server": "1692", "farm": 2, "title": "Radisson Blu hotel exterior, Chicago, USA", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
        { "id": "23835434170", "owner": "13978965@N07", "secret": "c1a746e5e2", "server": "5684", "farm": 6, "title": "Light display in Lincoln Park, Chicago, USA", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
        { "id": "24047410381", "owner": "13978965@N07", "secret": "353778535e", "server": "1647", "farm": 2, "title": "Abstract reflections in the windows of an office block in Chicago, USA", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
        { "id": "24021891742", "owner": "13978965@N07", "secret": "2eeea12692", "server": "1717", "farm": 2, "title": "Geometric exterior of an office block in Chicago, USA", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
        { "id": "23762185989", "owner": "13978965@N07", "secret": "f8e2036e1f", "server": "1649", "farm": 2, "title": "Squares and lines formed by the windows of an office block in Chicago, USA", "ispublic": 1, "isfriend": 0, "isfamily": 0 }
      ] }, "stat": "ok" }      
  */
  var i = Math.floor(Math.random() * flickr.photos.photo.length);
  console.log(flickr);
  var farmId = flickr.photos.photo[i].farm;
  var serverId = flickr.photos.photo[i].server;
  var id = flickr.photos.photo[i].id;
  var secret =flickr.photos.photo[i].secret;
  console.log(flickr);
  //flickr URL template: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
  //sample flickr url: https://farm[2].staticflickr.com/[1692]/[24036576982]_[79383c5067].jpg

  var imageURL = 'https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '_b.jpg';
  console.log(imageURL);
  $('body').attr('background', imageURL);
}



function submit() {
  $(document).on('click', 'a', getLocation);
}

$(document).ready(submit);
