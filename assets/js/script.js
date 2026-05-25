
document.getElementById('year').textContent = new Date().getFullYear();

const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    products.forEach(product => {
      const categories = product.dataset.category || '';
      product.style.display = filter === 'all' || categories.includes(filter) ? 'block' : 'none';
    });
  });
});

const menuButton = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}
