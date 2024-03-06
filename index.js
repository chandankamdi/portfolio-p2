const carousel = document.getElementById('carousel');
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const totalItems = carouselItems.length/2;
const itemsPerPage =1;
let currentPage = 0;

function updatePagination() {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';
  for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement('div');
    dot.classList.add('pagination-dot', i === currentPage ? 'bg-red-400' : 'bg-gray-100');
    dot.onclick = () => goToPage(i);
    pagination.appendChild(dot);
  }
}

function updateCarousel() {
  const offset = -(currentPage * (100 / itemsPerPage));
  carousel.style.transform = `translateX(${offset}%)`;
}

function goToPage(page) {
  currentPage = page;
  updatePagination();
  updateCarousel();
}

function scrollCarousel(direction) {
  if (direction === 'left') {
    currentPage = (currentPage - 1 + totalItems) % totalItems;
  } else if (direction === 'right') {
    currentPage = (currentPage + 1) % totalItems;
  }
  updatePagination();
  updateCarousel();
}

updatePagination();



function toggleMenu(){
    const menu = document.getElementById('menuItems');
    menu.classList.toggle('hidden');
}