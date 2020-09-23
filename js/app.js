


// func for smooth scrolling

const scrollToSection = function (section) {
	document.querySelectorAll('.section').forEach(s => {s.classList.remove('your-active-class')});
	section.classList.add('your-active-class');
	section.scrollIntoView({
		behavior: "smooth"
	});
}
//build menu from sections on page
const buildNavigation = () => {
	const mainNav = document.getElementById('section_list');
	document.querySelectorAll('.section').forEach(s => {
		const listItem = document.createElement('li');
		const link = document.createElement('a');
		link.classList.add('menu__link');
		const linkText = document.createTextNode(s.querySelector('h2').textContent);
		link.appendChild(linkText);
		listItem.appendChild(link);
		mainNav.appendChild(listItem);

		link.addEventListener('click', (e) => {
			document.querySelectorAll('#section_list a').forEach(a => {a.classList.remove('active-link-class')});
			e.target.classList.add('active-link-class');
			scrollToSection(s);
		});
	});
}

//JavaScript to run once DOM has loaded
if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
	buildNavigation();
} else {
  document.addEventListener("DOMContentLoaded", navLinksSmooth);
}

//scroll to top button

const myBtn = document.querySelector("#myBtn");
myBtn.addEventListener("click", function(e) {

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});

});





