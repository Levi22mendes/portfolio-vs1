const sr = ScrollReveal({
  duration: 100,
  reset: true
})

sr.reveal('div', {
  origin: 'top',
  distance: '40px',
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

