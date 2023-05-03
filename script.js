const btn = document.querySelector('.save')
const container = document.querySelector('.container')
const form = document.querySelector('form')

let info = {}

form.addEventListener('change', (e)=>{
info[e.target.name] = e.target.value

console.log(info)
})

btn.addEventListener('click',(e)=>{
  e.preventDefault()
  container.style.display='none'
  let table = document.createElement('div')
  table.classList.add('table')
  table.innerHTML=`
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
          <tr>
            <th>Surname</th>
            <th></th>
          </tr>
          <tr>
            <th>Date of birthday</th>
            <th></th>
          </tr>
          <tr>
            <th>Gender</th>
            <th></th>
          </tr>
          <tr>
            <th>City</th>
            <th></th>
          </tr>
          <tr>
            <th>Address</th>
            <th></th>
          </tr>
          <tr>
            <th>Language</th>
            <th></th>
          </tr>
        </tbody>
      </table>
  `;
  document.body.append(table)
})