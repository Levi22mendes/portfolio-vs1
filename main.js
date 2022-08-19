const sr = ScrollReveal({
  duration: 1000,
  reset: true
})

sr.reveal('div', {
  origin: 'top',
  distance: '50px',
  duration: '2000',
  scale: 0.5
})

sr.reveal('div', {
  delay: 500
})
sr.reveal(
  'p',
  {
    delay: 1000
  },
  50
)

function abrimenu() {
  let barraMenuAberto = document.getElementById('barra-menu')

  if (barraMenuAberto.style.width == '0px') {
    barraMenuAberto.style.width = '180px'
  } else {
    barraMenuAberto.style.width = '0px'
  }
}
