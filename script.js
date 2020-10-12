const seeMore = document.querySelector('.seeMore')
const titlePage = document.querySelector('.titlePage')
const timelinePage = document.querySelector('.timelinePage')

seeMore.addEventListener('click', () => window.scrollTo(0, titlePage.offsetHeight))

const lineItems = document.querySelectorAll('.lineItem > h4')
const year = document.querySelector('.line > h5')

window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 1800) { 
        lineItems[0].style = 'transform: translateX(0); opacity: 1';
    }
    if (window.scrollY >= 2000) { 
        lineItems[2].style = 'transform: translateX(0); opacity: 1';
    }
    if (window.scrollY >= 2200) { 
        lineItems[1].style = 'transform: translateX(0); opacity: 1';
    }
    if (window.scrollY >= 2400) { 
        lineItems[3].style = 'transform: translateX(0); opacity: 1';
    }
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


const line2 = document.querySelector('.line2')
const contact = document.querySelector('.contact')

window.onscroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        clearInterval(startTimer)
        line2.style = 'margin: 0 350px 0 50px; height: 50%'
        contact.style = 'transform: translateY(0); opacity: 1'
    }
};