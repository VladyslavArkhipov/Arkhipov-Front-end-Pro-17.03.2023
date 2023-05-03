const form = document.querySelector('#form')
const input = document.querySelectorAll('.input')
const btn = document.querySelector('.button')
const btnClose = document.querySelector('.close')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

btn.addEventListener('click', (e)=>{
  e.preventDefault()
for(let i =0;i<input.length;i++){
  if(input[i].value===''){
    input[i].className='input empty'
    
    console.log('Pusto v ' + input[i].name)
    break;
  } else{
    overlay.style.visibility='visible'
    modal.style.visibility='visible'
  }
}
})


btnClose.addEventListener('click',()=>{
  overlay.style.visibility='hidden'
  modal.style.visibility='hidden'
})