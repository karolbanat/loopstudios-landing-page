const toggleBtn = document.querySelector('#toggle-btn');
const primaryNav = document.querySelector('#primary-nav');
const primaryNavLinks = primaryNav.querySelectorAll('.navigation__link');

const handlePrimaryNav = () => {
	primaryNav.toggleAttribute('data-visible');
	toggleBtn.toggleAttribute('data-expanded', primaryNav.hasAttribute('data-visible'));
};

toggleBtn.addEventListener('click', handlePrimaryNav);
primaryNavLinks.forEach((link) => {
	link.addEventListener('click', handlePrimaryNav);
});
