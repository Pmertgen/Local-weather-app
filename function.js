
$(document).ready(function(){
  var long;
  var lat;
  var Ktemp;
  var Ftemp;
  var Ctemp;
  var tempSwap = true;
  
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      
      long = position.coords.longitude;
      lat = position.coords.latitude;
      
       //get city by geo
    var api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=ed3dafdc004f0ac7dfaf2dc3f3d42b0e';
      console.log(api);
  //JSON call for open weather
  $.getJSON(api, function(data){
  // console.log(data.coord);
  var weatherType = data.weather[0].description;
  var kTemp = data.main.temp;
  var windSpeed = data.wind.speed;
  var city = data.name;
    
    //temp in kelvin
    Ftemp = (kTemp*(9/5)-459.67).toFixed(2);
    Ctemp = (kTemp-273).toFixed(2);
  console.log(city);
  console.log(api);
    
    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#Ftemp").html(Ftemp+" F");
        
    $("#switchButton").click(function(){
      
      if (tempSwap===false){
        $("#Ftemp").html(Ctemp+" C°");
        tempSwap = true;
      } else{
        $("#Ftemp").html(Ftemp+" F");
        tempSwap = false;
      }
    });
    if (weatherType == "light snow") {
      
      $("body").css("background-image", "url(https://static.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg)");
      
    } else if (weatherType == "sunny") {
      $("body").css("background-image", "url(https://static.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg)");
      
    } else if (weatherType == "rainy") {
      $("body").css("background-image", "url(https://static.pexels.com/photos/459451/pexels-photo-459451.jpeg)");
      
    } else if (weatherType == "broken clouds"){
      $("body").css("background-image", "url(https://static.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg)");
      
    } else {
      $("body").css("background-image", "url(https://static.pexels.com/photos/5439/earth-space.jpg)");
    }
  });
});
}
});
