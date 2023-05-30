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
}

function validString(str) {
  return (str = str[0].toUpperCase() + str.substring(1)); //Делаю так чтобы первая буква в строке была большой
}

function temperatureConvertation(currentTemperatureInKelvin) {
  const degree = Math.floor(currentTemperatureInKelvin - 273.15); //С сервера мы получаем температуру в Кельвинах и я ее конвертирую в цельсии
  return degree;
}

function windDescription(windDegree) {
  if (windDegree <= 12 || (windDegree > 349 && windDegree <= 360)) {
    return `Пiвнiчний`;
  } else if (windDegree >= 13 && windDegree <= 34) {
    return `Пiвнiчний/Пiвнiчно-схiдний`;
  } else if (windDegree > 34 && windDegree <= 57) {
    return `Пiвнiчно-схiдний`;
  } else if (windDegree > 57 && windDegree <= 79) {
    return `Cхiдний/Пiвнiчно-схiдний`;
  } else if (windDegree > 79 && windDegree <= 102) {
    return `Cхiдний`;
  } else if (windDegree > 102 && windDegree <= 124) {
    return `Cхiдний/Пiвденно-схiдний`;
  } else if (windDegree > 124 && windDegree <= 147) {
    return `Пiвденно-схiдний`;
  } else if (windDegree > 147 && windDegree <= 169) {
    return `Пiвденний/Пiвденно-схiдний`;
  } else if (windDegree > 169 && windDegree <= 192) {
    return `Пiвденний`;
  } else if (windDegree > 192 && windDegree <= 214) {
    return `Пiвденний/Пiвденно-захiдний`;
  } else if (windDegree > 214 && windDegree <= 237) {
    return `Пiвденно-захiдний`;
  } else if (windDegree > 237 && windDegree <= 259) {
    return `Захiдний/Пiвденно-захiдний`;
  } else if (windDegree > 259 && windDegree <= 282) {
    return `Захiдний`;
  } else if (windDegree > 282 && windDegree <= 304) {
    return `Захiдний/Пiвнiчно-захiдний`;
  } else if (windDegree > 304 && windDegree <= 327) {
    return `Пiвнiчно-захiдний`;
  } else if (windDegree > 327 && windDegree <= 349) {
    return `Пiвнiчний/Пiвнiчно-захiдний`;
  }
} // С сервера мы получаем направлении ветра в градусах. По таблице направления ветра я составил условие для определения текстового описания направления ветра
