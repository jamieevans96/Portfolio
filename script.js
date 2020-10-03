function debounce(func, wait = 4, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const nav = document.querySelectorAll('li > div');
const ul = document.querySelector('ul');
const header = document.querySelector('nav');
const abtCont = document.querySelector('.abt');
const prjtCont = document.querySelector('.prjt');
const sklCont = document.querySelector('.skl');
const cntCont = document.querySelector('.cnt');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
ul.append(highlight);

function checkSlide(e) {
  if(window.innerWidth > 768){
    if (window.scrollY >= 0) {
        highlight.style.width = nav[0].offsetWidth + 'px'
        highlight.style.left = nav[0].offsetLeft + 'px';
      };
    if (window.scrollY >= 0.5 * window.innerHeight) {
        highlight.style.width = nav[1].offsetWidth + 'px'
        highlight.style.left = nav[1].offsetLeft + 'px';
      
        prjtCont.style.transform = 'translateY(0px)';
        prjtCont.style.opacity = '1';
      };
    if (window.scrollY >= 1.5 * window.innerHeight) {
        highlight.style.width = nav[2].offsetWidth + 'px'
        highlight.style.left = nav[2].offsetLeft + 'px';
      
        sklCont.style.transform = 'translateY(0px)';
        sklCont.style.opacity = '1';

        const sklArr = [10, 90, 50, 80, 60];

        for (let i = 0; i < 5; i++) {
          sklBars[i].style.width = sklArr[i] + '%';
          percents[i].style.width = (100 - sklArr[i]) + '%';
        }
      };
    if (window.scrollY >= 2.5 * window.innerHeight) {
        highlight.style.width = nav[3].offsetWidth + 'px'
        highlight.style.left = nav[3].offsetLeft + 'px';
      
        cntCont.style.transform = 'translateY(0px)';
        cntCont.style.opacity = '1';
      };
  } else {
    highlight.style.width = window.innerWidth/4 + 'px'
    if (window.scrollY >= 0) {
      highlight.style.left = 0 + 'px';
    };
    if (window.scrollY >= 0.5 * window.innerHeight) {
        highlight.style.left = window.innerWidth/4 + 'px';

        prjtCont.style.transform = 'translateY(0px)';
        prjtCont.style.opacity = '1';
      };
    if (window.scrollY >= 1.5 * window.innerHeight) {
        highlight.style.left = 2*window.innerWidth/4 + 'px';

        sklCont.style.transform = 'translateY(0px)';
        sklCont.style.opacity = '1';

        const sklArr = [10, 90, 50, 80, 60];

        for (let i = 0; i < 5; i++) {
          sklBars[i].style.width = sklArr[i] + '%';
          percents[i].style.width = (100 - sklArr[i]) + '%';
        }
      };
    if (window.scrollY >= 2.5 * window.innerHeight) {
        highlight.style.left = 3*window.innerWidth/4 + 'px';

        cntCont.style.transform = 'translateY(0px)';
        cntCont.style.opacity = '1';
      };
  }
}

window.addEventListener('load', function() {
  abtCont.style.transform = 'translateY(0px)';
  abtCont.style.opacity = '1';
});

window.addEventListener('scroll', debounce(checkSlide));

nav.forEach((item, index) => item.addEventListener('click', function() {
  if (index === 0) {
    window.scrollTo(0, 0);
  }
  else if (index === 1) {
    window.scrollTo(0, window.innerHeight);
  }
  else if (index === 2) {
    window.scrollTo(0, 2 * window.innerHeight);
  }
  else if (index === 3) {
    window.scrollTo(0, 3 * window.innerHeight);
  }
}));

const projects = document.querySelectorAll('.container > div');
const altItem = document.querySelector('.altItem');
const a = document.querySelector('.altItem > a');
const img = document.querySelector('.altItem > a > img')

const arr = ['red', 'blue', 'green', 'pink', 'yellow', 'orange'];
const hrefArr = ['Calculator', 'To-Do-List', 'Weather-App', 'Book-Library', 'Tic-Tac-Toe', 'Restaurant-Page'];

let initialImg = 0;
let bg = arr[0];

projects.forEach((item, index) => item.addEventListener('click', function(e) {
  bg = arr[index];
  altItem.style.background = bg;
  projects.forEach(item2 => item2.style.background = 'rgb(150, 70, 70)');
  item.style.background = 'cyan';
  a.setAttribute('href', 'https://github.com/jamieevans96/' + hrefArr[index]);
  initialImg = index;
  img.style.opacity = '0';
  img.setAttribute('src', 'img/img' + index + '.png');
  img.style.opacity = '1';  
}));

projects.forEach((item, index) => item.addEventListener('mouseenter', function(e) {
  altItem.style.background = arr[index];
  img.style.opacity = '0'; 
  img.setAttribute('src', 'img/img' + index + '.png');
  img.style.opacity = '1'; 
}));

projects.forEach((item, index) => item.addEventListener('mouseleave', function(e) {
  altItem.style.background = bg;
  img.style.opacity = '0'; 
  img.setAttribute('src', 'img/img' + initialImg + '.png');
  img.style.opacity = '1'; 
}));

ul.addEventListener('mouseenter', function() {
    nav[0].textContent = 'Home';
    nav[1].textContent = 'News';
    nav[2].textContent = 'Contact';
    nav[3].textContent = 'About';
});

ul.addEventListener('mouseleave', function() {
    nav[0].textContent = '☎';
    nav[1].textContent = '✎';
    nav[2].textContent = '✉';
    nav[3].textContent = '✈';
});

const sklBars = document.querySelectorAll('.midBar');
const percents = document.querySelectorAll('.percent');



var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //Host
  port: 465, // Port 
  secure: true
});

var mailOptions = {
  from: 'jamieevans96@googlemail.com',
  to: 'jamieevans96@googlemail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

function send() {
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};