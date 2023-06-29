// https://evilmartians.com/chronicles/html-best-practices-for-login-and-signup-forms   <---- perfect

const form = document.querySelector('form')

form.addEventListener('submit', () => {
    submit.disabled = true       //kontra na podwojne wyslanie 
    submit.autocomplete = 'off'
  
    setTimeout(() => {
      button.disabled = false
    }, 2000)
  })