const ordersWrapper = document.querySelector('.orders') //Нахожу обертки для блоков на сранице
const mainWrapper = document.querySelector('.main')
const navWrapper = document.querySelector('.nav')
const card = document.querySelectorAll('.card') //Нахожу карточки товаров
const formWrapper = document.querySelector('.buy_window') // Нахожу див, который будет открываться для оформления заказа
const form = document.querySelector('form') //Нахожу форму
const inputs = document.querySelectorAll('input') //Нахожу инпуты в форме
const btnBuy = document.querySelectorAll('.buy') // Нахожу кнопку для покупки
const btnSubmit = document.querySelector('.submit') //Нахожу кнопку для оформления заказа
const btnDecline = document.querySelector('.decline') // Нахожу кнопку для отмены оформления заказа
const btnShowOrders = document.querySelector('.show_orders') //Нахожу кнопку для показа заказов



const orderInfo={
    productData:{},
    userData:{}
} //Создаю пустой обьекс, внутри которого два пока пустых обьекта, в которых затем будет появляться информация в зависимости от выбора пользователя

let ordersList = [] //Создаю пустой массив, в котором будут заказы
 
card.forEach(element=>{
    element.addEventListener('click',()=>{
        if(formWrapper.style.display==='flex'){
            for(let i = 0;i<4;i++){
                    let name = element.children[i].className;
                    let value = element.children[i].innerHTML
                    orderInfo.productData[name] = value
            }
        }
    })
})//При выборе определенного товара и оформлении заказа, информация о товар с его карточки будет сохраняться в массив, который ранее для этого создавался. Указал ограничение итерации в размере 4, так как больше на карточке товара мне не будет ничего нужно

btnShowOrders.addEventListener('click',showOrders) //При клике на кнопку корзины открывается список заказов

btnBuy.forEach(element=>element.addEventListener('click',()=>{formWrapper.style.display='flex'})) //При клике на одну из кнопок КУПИТЬ обертка формы становится видимой


btnDecline.addEventListener('click',decline) //При нажатии на кнопку будет закрываться форма и будут очищаться поля

form.addEventListener('change', changeUserData) //При изменении в инпутах формы информация будет записываться в ранее созданный обьект


btnSubmit.addEventListener('click', savingInfo) //При подтверждении заказа проверяются поля формы на наличие пустых значений, а затем создаю переменную равную дате заказа. Так же создаю имя заказа с случайным номером от 1 до 100. Добавляю дату в обьект с информацией о пользователе и затем по имени заказа добавляю обьект с помощью ЖСОН в локальное хранилище

function savingInfo (e){
    e.preventDefault()
    for(let i =0;i<form.length-3;i++){ //Отнимаю 3 от длины формы, так как добавляются кнопки к форме и поле доп информации
        if(form[i].value===''){
            alert('Fill empty place')
            return
        }
    }
        let date = new Date().toLocaleDateString()
        let orderName = `order` + getRandomValue()
        orderInfo.userData.dateOfOrder = date
        localStorage[orderName] = JSON.stringify(orderInfo)
        inputs.forEach(element=>element.value='')
        alert('Order confirmed')
        formWrapper.style.display='none'
}

function showOrders (){
    mainWrapper.style.display = 'none'
    navWrapper.style.display = 'none'
    ordersWrapper.style.display='block'
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        ordersList.push(JSON.parse(localStorage[key]))
      }//Перебираю все ключи со значениями в локальном хранилище и добавляю полученные с помощью ЖСОН обьект в пустой массив который создал в самом начале
      for(let i=0;i<ordersList.length;i++){
        let div = document.createElement('div')
        div.innerHTML=`
        <div class="order">
        <div class="small_info">
            <div class="image">${ordersList[i].productData.image}</div>
            <h2>${ordersList[i].productData.product_title}</h2>
            <p>${ordersList[i].userData.dateOfOrder}</p>
            <p class="price">${Number(ordersList[i].productData.product_price.slice(0,3) * ordersList[i].userData.count)} USD</p>
            <button id='${i}' class="delete">Delete order</button>
            </div>
    
            <div class="full_info invisible">
                <p>${ordersList[i].productData.product_info}</p>
                  <p>Name: <span>${ordersList[i].userData.name}</span></p>
                  <p>City: <span>${ordersList[i].userData.city}</span></p>
                  <p>Post office: <span>${ordersList[i].userData.post_office}</span></p>
                  <p>Pay: <span>${ordersList[i].userData.pay}</span></p>
                  <p>Count: <span>${ordersList[i].userData.count }</span></p>
                  <p>Details: <span>${ordersList[i].userData.details===undefined?'Empty':ordersList[i].userData.details}</span></p>
            </div>
          </div>
        `
        ordersWrapper.append(div)
      }//Создаю столько заказов, сколько было оформлено пользователем. Информации заказов через массив перебирается с данных из локального хранилища

      const btnDeleteOrder = document.querySelectorAll('.delete') //Нахожу кнопку для удаления заказа
      const orderCard = document.querySelectorAll('.order') //Нахожу карточку заказа
      const fullInfo=document.querySelector('.full_info')//Нахожу блок с полной информацией по заказу

      orderCard.forEach(element=>{
        element.addEventListener('click', ()=>{
            fullInfo.classList.toggle('invisible')
        })//При клике на карточку заказа вывожу дополнительную информацию просто переключая класс на видимый
      })

btnDeleteOrder.forEach(element=>{
    element.addEventListener('click',()=>{
        ordersList.splice(element.id,1)
        let cutedElement = localStorage.key(element.id)
       localStorage.removeItem(cutedElement)
       location. reload()
    })//Чтобы удалить заказ, я удаляю элемент заказа из массива по его айди, а затем удаляю из локального хранилища с помощью его же айди и перезагружаю страницу чтобы видеть изменения
})
}

function getRandomValue() {
    return Math.floor(Math.random() * (100 - 1) + 1);
  }//Функция для получения случайного числа от 1 до 100 для генерации названия заказа

  function decline(e){
    e.preventDefault()
    inputs.forEach(element=>element.value='')
    formWrapper.style.display='none'
}//Функция для отмены заказа

function changeUserData (e){
    let name = e.target.name
    let value = e.target.value
    orderInfo.userData[name] = value
} //Функция для наполнения обьекта с пользовательскими данными

  