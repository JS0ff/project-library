const userBooksLibrary = []; 

// Constructor to save the book
function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // Special id for every book
  this.id = crypto.randomUUID()
}

function addBookToLibrary(...args) {
    const book = new Book(...args);
    userBooksLibrary.push(book);
}

addBookToLibrary("Hobbit", "Tolkien", '295', 'read')
addBookToLibrary("Lord of Rings", "Tolkien", '335', 'not read yet')
addBookToLibrary("Lord of Rings", "Tolkien", '335', 'not read yet')


// Create containers-cards for every book
const body = document.querySelector("body")
const bookCardContainer = document.createElement("div");
bookCardContainer.classList.add("mainBooksContainer");
body.appendChild(bookCardContainer)
userBooksLibrary.forEach(element => {
    let card = document.createElement("div")
    card.textContent = element.title;
    card.classList.add("book-card")
    bookCardContainer.appendChild(card)
});