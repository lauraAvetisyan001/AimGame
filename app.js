const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;

const colors = ['red', 'blue', 'orange', 'green', 'yellow', 'purple', 'bluevilet', 'pink', 'black', 'light lue', 'white ' ];



startBtn.addEventListener('click', event => {
event.preventDefault()
screens[0].classList.add('up');
})


const finishGame = () => {
    timeEl.parentNode.remove()
board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}


const decreaseTime = () => {
    if (time === 0) {
        finishGame()
    } else {
    let current = --time
    if(current < 10){
        current = `0${current}`
    }
timeEl.innerHTML = `00:${current}`
} }


const circle = document.createElement('div')

const createRandomCircle = () => {
   
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, width - height)
    
    

    circle.classList.add('circle')
    circle.style.width =    `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}


const setColor = el => {
    const color = getRandomColor()
    el.style.background = color
}


const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

board.addEventListener('click', event => {
    if(event.target.classList.contains('circle')) {
score++
event.target.remove()
createRandomCircle()
setColor(circle)
    }
})


const startGame = () => {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    timeEl.innerHTML = `00:${time}`
}


// contains - есть ли у e.target(элемент на который мы кликнули) определенный класс 
timeList.addEventListener('click', event => {
    if(event.target.classList.contains('time-btn')) {
       time = parseInt(event.target.getAttribute('data-time'))
       screens[1].classList.add('up')
       startGame()
    
    }
})