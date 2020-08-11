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
const projCont = document.querySelector('.projects > .content');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
ul.append(highlight);

function checkSlide(e) {
  if (window.scrollY >= 0) {
      highlight.style.left = nav[0].offsetLeft - 120 + 'px';
      nav[0].style.color = '#343943'

      nav[1].style.color = '#fff';
      nav[2].style.color = '#fff';
      nav[3].style.color = '#fff';
    };
  if (window.scrollY >= 0.5 * window.innerHeight) {
      highlight.style.left = nav[1].offsetLeft - 120 + 'px';
      nav[1].style.color = '#343943'

      nav[0].style.color = '#fff';
      nav[2].style.color = '#fff';
      nav[3].style.color = '#fff';

      projCont.style.transform = 'translateY(0)';
      projCont.style.opacity = '1';
    };
  if (window.scrollY >= 1.5 * window.innerHeight) {
      highlight.style.left = nav[2].offsetLeft - 120 + 'px';
      nav[2].style.color = '#343943'

      nav[0].style.color = '#fff';
      nav[1].style.color = '#fff';
      nav[3].style.color = '#fff';
    };
  if (window.scrollY >= 2.5 * window.innerHeight) {
      highlight.style.left = nav[3].offsetLeft  - 120 + 'px';
      nav[3].style.color = '#343943'

      nav[0].style.color = '#fff';
      nav[1].style.color = '#fff';
      nav[2].style.color = '#fff';
    };
}

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