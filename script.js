const seeMore = document.querySelector('.seeMore')
const titlePage = document.querySelector('.titlePage')
const timelinePage = document.querySelector('.timelinePage')

seeMore.addEventListener('click', () => window.scrollTo(0, titlePage.offsetHeight))


let lineItems = document.querySelectorAll('.lineItem > h4')

window.addEventListener('scroll', (e) => {
    (window.scrollY > 1800) && (lineItems[0].style = 'transform: translateX(0); opacity: 1');
    (window.scrollY > 1900) && (lineItems[1].style = 'transform: translateX(0); opacity: 1');
    (window.scrollY > 2000) && (lineItems[2].style = 'transform: translateX(0); opacity: 1');
    (window.scrollY > 2100) && (lineItems[3].style = 'transform: translateX(0); opacity: 1');
})


const time = document.querySelector('.time')
let timer = 0;

const getTime = () => {
    let seconds = formatTime(Math.floor((timer%60000)/1000))
    let minutes = formatTime(Math.floor((timer%3600000)/60000))
    let hours = formatTime(Math.floor(timer/3600000))

    time.textContent = `${hours}:${minutes}:${seconds}`

    timer+= 1000;
}

const formatTime = time => time < 10 ? (`0${time}`) : time;

let startTimer = setInterval(getTime, 1000)

window.onscroll = () => {
    ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && clearInterval(startTimer)
};