async function fetchWeatherData(cityName){
	let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=13a334e81a4bca50e61e685664b543e2`
	const response = await fetch(url)
	const data = await response.json();
	let city=document.getElementById("city");
	city.innerHTML= data.name;
	let windspeed= document.getElementById("wind_speed");
	windspeed.innerHTML=data.wind.speed +"km/hr";
	let humidity=document.getElementById("humidity");
	humidity.innerHTML=data.main.humidity+"g/kg";
	let temp= document.getElementById("temp");
	temp.innerHTML=(data.main.temp-273.15)+"°C";
	console.log(data)
} 
function fetchCity(){
	let cityName= document.getElementById("city_name");
	if(cityName.value===""){
		alert("enter a city name");
	}else{
		fetchWeatherData(cityName.value);
		cityName.value=" " ;
	}
}