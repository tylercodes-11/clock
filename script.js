setInterval(setClock, 1000) // call every 1000 miliseconds = 1 sec

const hourHand = document.querySelector('[data-hour-hand]') // get hands of the clock
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() { //ratios for rotation in time
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) { //setting ratio to hand on the clock movement
  element.style.setProperty('--rotation', rotationRatio * 360) // around 360 degree.
}

setClock()

