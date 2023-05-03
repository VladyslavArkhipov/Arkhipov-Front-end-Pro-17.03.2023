const body = document.querySelector('body')
body.innerHTML=`<div class="container">
<div class="card">
  <img src="./ball.jpg" alt="ball" width="150px" height="150px">
  <h2>OCEAUNZ LEAGUE BALL</h2>
  <p>White / Collegiate Navy / Bright Blue / Silver Metallic
  </p>
  <p>35€</p>
  <button class="accept">Купити</button>
</div>     
</div>   

<div class="buy">
      <form action="">
        <input type="text" name="name" id="0" placeholder="ПIБ"  >
        <select name="city" id="1">
          <option value="">Мiсто</option>
          <option value="Одеса">Одеса</option>
          <option value="Київ">Київ </option>
          <option value="Львiв">Львiв</option>
        </select>
        <input type="number" name="store" id="2" placeholder="Biддiлення нової пошти"  >
        <select name="pay" id="3">
          <option value="">Оплата:</option>
          <option value="картою">Оплата карткою</option>
          <option value="при отриманнi">Оплата при отриманнi</option>
        </select>
        <input type="number" placeholder="Кiлькiсть"  id='4' >
        <input type="text" name="details" placeholder="Додаткова iнформацiя" id='5'>
        <button class='submit'>Пiдтвердити</button>
      </form>
    </div>`
const btnBuy = document.querySelector('.accept')
const btnSubmit = document.querySelector('.submit')
const formWrapper = document.querySelector('.buy')
const form = document.querySelector('form')


const values = []
values.length=5;
values.fill('null')


btnBuy.addEventListener('click',()=>{
  formWrapper.style.display='flex'
})

form.addEventListener('change', (e)=>{
  values[e.target.id] = e.target.value
})

btnSubmit.addEventListener('click', (e)=>{
  if(values.find(isUndefined)==='null'){
    e.preventDefault()
    alert('Потрiбно заповнити все')
  } else{
    e.preventDefault()
    let divInfo = document.createElement('div')
    divInfo.innerHTML=`<h2>Деталi замовлення:</h2>
    <p>Покупець: ${values[0]}.</p>
    <p>Мiсто доставки: ${values[1]}.</p>
    <p>Вiддiлення НП: ${values[2]}.</p>
    <p>Оплата ${values[3]}.</p>
    <p>Кiлькiсть: ${values[4]}.</p>
    <p>Додаткова iнформацiя: ${values[5]===undefined? 'Вiдсутня.</p>' : values[5]+'.</p>'}
    `
    divInfo.classList.add('order_info')
    document.body.append(divInfo)
    console.log(divInfo)
  }
})

function isUndefined (element){
  return element==='null'
}


