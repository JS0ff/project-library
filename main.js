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
const bookCardContainer = document.querySelector(".book-collection");
bookCardContainer.classList.add("mainBooksContainer");
userBooksLibrary.forEach(element => {
    let card = document.createElement("div")
    card.textContent = element.title;
    card.classList.add("book-card")
    bookCardContainer.appendChild(card)
});

//Create the function to open and close the dialog window
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
console.log(showButton)
console.log(closeButton)

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});