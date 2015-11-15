function getWeatherNum(zipcode){
	$.ajax({
        dataType: 'json',
        url: 'http://api.openweathermap.org/data/2.5/weather?zip='+zipcode+',us&APPID=34d0f8e4b6b92c5ac2c1497b7ad82638',
        success: function(data){
   		   		var name = data.name;
   		   		var currentTempK = data.main.temp;
   		   		var currentTempC = currentTempK-273.15;
   		   		var currentTempF = Math.round(currentTempC*9/5+32);
   		   		var main = data.weather[0].main;

   		   		clear();
   		   		$('h2').append(main);
   		   		$('h3').append(name +': '+ currentTempF+' Farenheit');

   	   		}
	});
}

function getWeatherName(cityName){
	$.ajax({
        dataType: 'json',
        url: 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+',us&APPID=34d0f8e4b6b92c5ac2c1497b7ad82638',
        success: function(data){
   		   		var name = data.name;
   		   		var currentTempK = data.main.temp;
   		   		var currentTempC = currentTempK-273.15;
   		   		var currentTempF = Math.round(currentTempC*9/5+32);
   		   		var main = data.weather[0].main;

   		   		clear();
   		   		$('h2').append('Conditions: ' + main);
   		   		$('h3').append(name +': '+ currentTempF+' Farenheit');

   	   		}
	});
}


function getLocation(){
    var location = $('#location').val();
    if (isNaN(location)){
    	getWeatherName(location);
    }
    else{
    	getWeatherNum(location);
	}	
    $('#location').val('');
}
function clear(){
 	$('h2').empty();
	$('h3').empty();
}

function submit() {
    $(document).on('click', 'a', getLocation);
}

$(document).ready(submit);

