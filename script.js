const form = document.querySelector("form"); // Нахожу форму
const weatherWrapper = document.querySelector(".weather"); //Нахожу обертку для блока с погодой
let city; //Переменная для названия города

form.addEventListener("submit", showPost);

function showPost(e) {
  e.preventDefault(); // Отменяю стандартное поведение кнопки
  const formData = new FormData(form); // Создаю объект типа ФОРМДАТА для получения ввода инпута, который соответстует номеру поста
  city = formData.get("city");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=afc6678d7fdc37aceff381a76878749d&lang=ua`
  )
    .then((response) => response.json())
    .then(weatherCreating) // Получаю данные с сервера и вывожу блок с погодой
    .catch(() => alert("Такого города не существует. Попробуйте другой"));
}

function weatherCreating(json) {
  const currentWeather = json.weather[0]; //Инициализирую три переменные для более простого доступа к ним в объекте с сервера
  const mainData = json.main;
  const windData = json.wind;
  weatherWrapper.innerHTML = `
  <div class="container">
      <div class="col">
        <div class="icon">
          <img  src="http://openweathermap.org/img/w/${
            currentWeather.icon
          }.png" alt="image">
          <p>Тиск: ${mainData.pressure} мм рт. ст.</p>
          <p>Вологiсть: ${mainData.humidity}%</p>
          <p>Швидкiсть вiтру: ${windData.speed} м/с </p>
          <p>Напрям вiтру: ${windDescription(windData.deg)}</p> 
        </div>
      </div>
      <div class="col">
      <h2>${validString(currentWeather.description)}</h2>
        <div class='temperature'>
          <p>Мiнiмальна температура: ${temperatureConvertation(
            mainData.temp_min
          )}ºC</p>
          <p>Максимальна температура: ${temperatureConvertation(
            mainData.temp_max
          )}ºC</p>
          <p>Вiдчувається як: ${temperatureConvertation(
            mainData.feels_like
          )}ºC</p>
        </div>
      </div>
    </div>
  `;
  console.log(json);
}

function validString(str) {
  return (str = str[0].toUpperCase() + str.substring(1));
}

function temperatureConvertation(currentTemperatureInKelvin) {
  const degree = Math.floor(currentTemperatureInKelvin - 273.15);
  return degree;
}

function windDescription(windDegree) {
  if (
    (windDegree >= 0 && windDegree <= 10) ||
    (windDegree >= 350 && windDegree <= 360)
  ) {
    return `Пiвнiчний`;
  } else if (windDegree >= 20 && windDegree <= 30) {
    return `Пiвнiчний/Пiвнiчно-схiдний`;
  } else if (windDegree >= 40 && windDegree <= 50) {
    return `Пiвнiчно-схiдний`;
  } else if (windDegree >= 60 && windDegree <= 70) {
    return `Cхiдний/Пiвнiчно-схiдний`;
  } else if (windDegree >= 80 && windDegree <= 100) {
    return `Cхiдний`;
  } else if (windDegree >= 110 && windDegree <= 120) {
    return `Cхiдний/Пiвденно-схiдний`;
  } else if (windDegree >= 130 && windDegree <= 140) {
    return `Пiвденно-схiдний`;
  } else if (windDegree >= 150 && windDegree <= 160) {
    return `Пiвденний/Пiвденно-схiдний`;
  } else if (windDegree >= 170 && windDegree <= 190) {
    return `Пiвденний`;
  } else if (windDegree >= 200 && windDegree <= 210) {
    return `Пiвденний/Пiвденно-захiдний`;
  } else if (windDegree >= 220 && windDegree <= 230) {
    return `Пiвденно-захiдний`;
  } else if (windDegree >= 240 && windDegree <= 250) {
    return `Захiдний/Пiвденно-захiдний`;
  } else if (windDegree >= 260 && windDegree <= 280) {
    return `Захiдний`;
  } else if (windDegree >= 290 && windDegree <= 300) {
    return `Захiдний/Пiвнiчно-захiдний`;
  } else if (windDegree >= 310 && windDegree <= 320) {
    return `Пiвнiчно-захiдний`;
  } else if (windDegree >= 330 && windDegree <= 340) {
    return `Пiвнiчний/Пiвнiчно-захiдний`;
  }
}
