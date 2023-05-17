const form = document.querySelector("form"); // Нахожу форму
const postWrapper = document.querySelector(".post"); // Нахожу обертку для поста
const commentsWrapper = document.querySelector(".comments"); // Нахожу обертку для комментов
let postId; // Переменная в которой будет храниться введенный пользователем номер поста
const minPostId = 1; // Минимальный номер поста
const maxPostId = 100; // Максимальный номер поста

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Отменяю стандартное поведение кнопки
  const formData = new FormData(form); // Создаю объект типа ФОРМДАТА для получения ввода инпута, который соответстует номеру поста
  postId = formData.get("postId");
  if (postId >= minPostId && postId <= maxPostId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then(postCreating) // Если инпут в пределах допустимого значения то делаю запрос на сервер для получения обьекта с данными поста, а затем вывожу пост на экран и в случае ошибки вывожу через алерт сообщение с ошибкой
      .catch((e) => alert("Ошибка соединения с сервером / " + e.message));
  } else {
    alert("Номер поста должен быть от 1 до 100");
  }
});

function postCreating(json) {
  postWrapper.innerHTML = `
    <p class="post_user_id">user: ${json.userId}</p>
    <h1 class="post_title">${json.title}</h1>
    <p class="post_text">${json.body} </p>
    <button class='show_comments'>Show comments</button> 
`; // Из полученного после запроса объекта я получаю по ключам необходимые значения и подставляю
  postWrapper.style.marginBottom = "50px";
  postWrapper.style.padding = "20px";
  const cmntBtn = document.querySelector(".show_comments"); // Нахожу кнопку для показа комментов
  cmntBtn.addEventListener("click", showComments); // При клике показываю комментарии
  commentsWrapper.innerHTML = ""; // Очищаю блок с комментариями на тот случай если там были комменты от предыдущего поста
}

function commentsCreating(json) {
  for (let i = 0; i < json.length; i++) {
    let div = document.createElement("div");
    div.className = "comment";
    div.style.padding = "20px";
    div.innerHTML = `
    <p class="comment_user_name"><b>Name: </b>${json[i].name}</p>
      <p class="comment_user_email"><span class="email">E-Mail: </span>${json[i].email}</p>
      <p class="comment_text"><b>Comment: </b>${json[i].body}</p>
    `;
    commentsWrapper.append(div); // Прохожусь по массиву обьектов полученных от сервера и подставляю каждое значение туда куда нужно и создаю блок с комментом
  }
}

function showComments() {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then(commentsCreating) // Делаю запрос на сервер чтобы получить массив комментариев и в случае ошибки вывожу ошибку через алерт
    .catch((e) => alert("Ошибка соединения с сервером / " + e.message));
}
