"use strict";


fetch('https://api.openweathermap.org/data/2.5/weather?id=524894&appid=704b6e7b23d7eda6edef38028b60eead')
  .then(function (resp) { return resp.json() })
  .then(function (data) { 
    console.log(data);
    
    document.querySelector('.main-temp').innerHTML = Math.round(data['main']['temp'] - 273.15) + '&deg;';
    document.querySelector('.weather').textContent = data.weather[0].main;
    document.querySelector('.additional-description').textContent = data.weather[0].description;
    document.querySelector('.humidity').textContent = `Humidity ${data.main.humidity}%`;
    document.querySelector('.main-img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    
  });

  
let selectCity = document.querySelector('.select-city');

selectCity.onchange = () => {
  let cityId = selectCity.value;
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=704b6e7b23d7eda6edef38028b60eead`)
  .then(function (resp) { return resp.json() })
  .then(function (data) { 
    
    document.querySelector('.main-temp').innerHTML = Math.round(data['main']['temp'] - 273.15) + '&deg;';
    document.querySelector('.weather').textContent = data.weather[0].main;
    document.querySelector('.additional-description').textContent = data.weather[0].description;
    document.querySelector('.humidity').textContent = `Humidity ${data.main.humidity}%`;
    document.querySelector('.main-img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    
  });
}



