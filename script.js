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
const ul = document.querySelector('#ul');
const header = document.querySelector('nav');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
ul.append(highlight);

function checkSlide(e) {
    if (window.scrollY >= 0) {
        highlight.style.top = nav[0].offsetTop + 'px';
        nav[0].style.color = '#fff'

        nav[1].style.color = '#000';
        nav[2].style.color = '#000';
        nav[3].style.color = '#000';
    };
    if (window.scrollY > 242) {
        highlight.style.top = nav[1].offsetTop + 'px';
        nav[1].style.color = '#fff'

        nav[0].style.color = '#000';
        nav[2].style.color = '#000';
        nav[3].style.color = '#000';
    };
    if (window.scrollY > 484) {
        highlight.style.top = nav[2].offsetTop + 'px';
        nav[2].style.color = '#fff'

        nav[0].style.color = '#000';
        nav[1].style.color = '#000';
        nav[3].style.color = '#000';
    };
    if (window.scrollY > 727) {
        highlight.style.top = nav[3].offsetTop + 'px';
        nav[3].style.color = '#fff'

        nav[0].style.color = '#000';
        nav[1].style.color = '#000';
        nav[2].style.color = '#000';
    };
    if (window.scrollY > 100) {
        header.style.padding = '0';
    }
    if (window.scrollY < 100) {
        header.style.padding = '30px 80px';
    }
}

window.addEventListener('scroll', debounce(checkSlide));

nav.forEach((item, index) => item.addEventListener('click', function() {
  if (index === 0) {
    window.scrollTo(0, 0);
  }
  else if (index === 1) {
    window.scrollTo(0, 243);
  }
  else if (index === 2) {
    window.scrollTo(0, 485);
  }
  else if (index === 3) {
    window.scrollTo(0, 728);
  }
}));

const projects = document.querySelectorAll('.container > div');
const altItem = document.querySelector('.altItem');

const arr = ['red', 'blue', 'green', 'pink', 'yellow', 'orange'];

let inner = '1';
let bg = arr[0];

projects.forEach((item, index) => item.addEventListener('click', function(e) {
  inner = index + 1;
  bg = arr[index];
  altItem.innerHTML = inner;
  altItem.style.background = bg;
  projects.forEach(item2 => item2.style.background = 'rgb(150, 70, 70)');
  item.style.background = 'cyan';
}));

projects.forEach((item, index) => item.addEventListener('mouseenter', function(e) {
  altItem.innerHTML = index + 1;
  altItem.style.background = arr[index];
}));

projects.forEach((item, index) => item.addEventListener('mouseleave', function(e) {
  altItem.innerHTML = inner;
  altItem.style.background = bg;
}));

ul.addEventListener('mouseenter', function() {
    nav[0].innerHTML = 'Home';
    nav[1].innerHTML = 'News';
    nav[2].innerHTML = 'Contact';
    nav[3].innerHTML = 'About';
});

ul.addEventListener('mouseleave', function() {
    nav[0].innerHTML = '☎';
    nav[1].innerHTML = '✎';
    nav[2].innerHTML = '✉';
    nav[3].innerHTML = '✈';
});