const body = document.querySelector('body')
body.innerHTML=`<div class="container">
<form action="">
<input type="text" name="Name" id="" placeholder="Name">
<input type="text" name="Surname" id="" placeholder="Surname">
<input type="text" name="Date of birthday" id="" placeholder="Date of birthday">
<label>
  <input type="radio" name="Gender" id="man" value="man"> Man
</label>
<label>
  <input type="radio" name="Gender" id="woman" value="woman"> Woman
</label>
<select name="City" id="">
  <option value="">City</option>
  <option value="Odessa">Odessa</option>
  <option value="Lviv">Lviv</option>
  <option value="Kyiv">Kyiv</option>
</select>
  <textarea placeholder="Address" name="Address" id="" cols="30" rows="10"></textarea>
  <label>
    <input type="checkbox" name="Language" value="english" id=""> english
  </label>
  <label>
    <input type="checkbox" name="Language" value="ukrainian" id=""> ukrainian
  </label>
  <label>
    <input type="checkbox" name="Language" value="another" id=""> another
  </label>
  <button class="save">Save</button>

</form>
</div>`
const btn = document.querySelector('.save')
const container = document.querySelector('.container')
const form = document.querySelector('form')
const info = {}
const languages = []



form.addEventListener('change', (e)=>{
info[e.target.name] = e.target.value
if(e.target.name ==='Language'){
  info[e.target.name] = languages
  languages.push(e.target.value)
}
})

btn.addEventListener('click',(e)=>{
  e.preventDefault()
  container.style.display='none'
  let table = document.createElement('div')
  table.classList.add('table')
  let tableString = `<table>`
  for(let key in info){
    tableString+=`<tr>
    <th>${key}</th>
    <th>${info[key]}</th>
    `
  }
  tableString+=`</tr></table>`
  table.innerHTML=tableString
  document.body.append(table)
})