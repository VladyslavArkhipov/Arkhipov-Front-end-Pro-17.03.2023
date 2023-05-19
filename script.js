const form = document.querySelector("form"); // Нахожу форму
const weatherWrapper = document.querySelector(".weather");
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
    .then(postCreating) // Если инпут в пределах допустимого значения то делаю запрос на сервер для получения обьекта с данными поста, а затем вывожу пост на экран и в случае ошибки вывожу через алерт сообщение с ошибкой
    .catch((e) => alert("Ошибка соединения с сервером / " + e.message));
}

function postCreating(json) {
  const currentWeather = json.weather[0];
  console.log(currentWeather);
  weatherWrapper.innerHTML = `
  <div class="container">
      <div class="col">
        <div class="icon">
          <img  src="http://openweathermap.org/img/w/04n.png" alt="image">
          <p>pressure</p>
          <p>humidity</p>
          <p>speed and deg</p>
        </div>
      </div>
      <div class="col">
        <h1>temperature</h1>
        <div class="description">
          <p>${currentWeather.description}</p>
        </div>
      </div>
    </div>
  `;
  console.log(json);
}

/* fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=afc6678d7fdc37aceff381a76878749d"
)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((e) => console.log(e.message)); */
