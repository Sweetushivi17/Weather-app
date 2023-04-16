const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1b82531f01msh5a0a15bb4296fcfp16c1f5jsn1a051e41f0d6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};



const getWeather = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= ' +city , options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
         temp.innerHTML = response.temp
         temp2.innerHTML = response.temp

        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity

        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed

        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}
submit.addEventListener("click", (e) =>{
    e.preventDefault()
    getWeather(city.value)

})   

getWeather("Indore")

temp.innerHTML = response.temp
temp2.innerHTML = response.temp
feels_like.innerHTML = response.feels_like
humidity.innerHTML = response.humidity
max_temp.innerHTML = response.max_temp
min_temp.innerHTML = response.min_temp
wind_degrees.innerHTML = response.wind_degrees
wind_speed.innerHTML = response.wind_speed
sunrise.innerHTML = response.sunrise
sunset.innerHTML = response.sunset