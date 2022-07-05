const container = document.querySelector('.container');
const contact = document.querySelector('.contact');
const Book = document.querySelector('.addBook');

document.querySelector('.addBooks').addEventListener('click', () => {
  container.style.display = 'none';
  Book.style.display = 'flex';
  contact.style.display = 'none';
});

document.querySelector('.contactPage').addEventListener('click', () => {
  container.style.display = 'none';
  Book.style.display = 'none';
  contact.style.display = 'flex';
});

document.querySelector('.lists').addEventListener('click', () => {
  container.style.display = 'block';
  Book.style.display = 'none';
  contact.style.display = 'none';
});
