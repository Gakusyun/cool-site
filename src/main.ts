import './style.css'

// Simple time-based greeting
const greetingElement = document.getElementById('greeting')
if (!greetingElement) throw new Error('Greeting element not found')

const hour = new Date().getHours()

let greeting
if (hour >= 5 && hour < 12) greeting = 'Good morning'
else if (hour >= 12 && hour < 18) greeting = 'Good afternoon'
else greeting = 'Good evening'

greetingElement.textContent = greeting + '.'

// Subtle cursor follow effect
const card = document.getElementById('card')
if (!card) throw new Error('Card element not found')

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20
  const y = (e.clientY / window.innerHeight - 0.5) * 20
  card.style.transform = `translate(${x}px, ${y}px)`
})

// Click ripple effect
document.addEventListener('click', (e) => {
  const ripple = document.createElement('div')
  ripple.className = 'ripple'
  ripple.style.left = e.clientX + 'px'
  ripple.style.top = e.clientY + 'px'
  document.body.appendChild(ripple)
  setTimeout(() => ripple.remove(), 600)
})

console.log('👋')
