const http = require("http"); //подключаю модуль хттп для создания экземпляра хттп-сервера
const fs = require("fs"); //подключаю модуль фс для работы с файловой системой

const offers = new Array(25).fill(null).map((_, i) => ({
  id: `${i}`,
  name: `${i}`,
  coordinates: [createRandomCoord(), createRandomCoord()],
})); //создаю массив на 25 обьектов со случайными значениями координат генерируемыми с помощью функции

fs.writeFileSync("offers.txt", JSON.stringify(offers)); //записываю массив обьектов в текстовый файл

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": `application/json` }); //создаю сервер. Код 200 означает успешный ХТТП-запрос, а вторая часть параметров указывает что содержимое ответа будет представлено в формате ЖСОН

    const url = req.url; //определяю доступ к отправляемому на сервер юрл запросу
    const method = req.method; //определяю доступ к методу отправляемого на сервер запроса

    if (method === "POST") {
      if (url === "/add-offer") {
        const obj = {
          id: `${offers.length}`,
          name: `${offers.length}`,
          coordinates: [createRandomCoord(), createRandomCoord()],
        };
        offers.push(obj);
        fs.writeFileSync(`offers.txt`, JSON.stringify(offers));
        const data = fs.readFileSync(`offers.txt`, `utf8`);
        res.write(data);
        res.end(); //При условии что это метод "ПОСТ" и адрес "добавить оффер" я создаю новый обьект который добавляею в массив и перезаписываю текстовый файл, затем вывожу для наглядности. В противном случае вывожу ошибку
      } else {
        res.write("wrong route");
        res.end();
      }
    } else if (method === "GET") {
      if (url === "/offers") {
        const data = fs.readFileSync("offers.txt", "utf8");
        res.write(data);
        res.end(); //при таком запросу будет ответ в виде выдачи списка офферов с помощью метода модуля файловой системы либо ошибка в случае неверного запроса
      } else {
        res.write("wrong route");
        res.end();
      }
    } else if (method === "PUT") {
      if (url === `/delete-last-offer`) {
        offers.splice(offers.length - 1, 1);
        fs.writeFileSync(`offers.txt`, JSON.stringify(offers));
        const data = fs.readFileSync(`offers.txt`, `utf8`);
        res.write(data);
        res.end(); //при этом методе я изменяю имеющийся массив путем удаления последнего оффера и перезаписываю текстовый документ и вывожу для наглядности
      } else {
        res.write("wrong route");
        res.end();
      }
    }
  })
  .listen(4001, function () {
    console.log("Server is started on 4001 port");
  });

function createRandomCoord() {
  const maxCoord = 37.5;
  const minCoord = 36.0;
  const numsAfterPoint = 4;
  return (Math.random() * (maxCoord - minCoord) + minCoord).toFixed(
    numsAfterPoint
  );
} //функция для создания случайных координат
