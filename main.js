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

//Create an array that loops through the "userBooksLibrary"
//and displays every book item in their own card
const bookCardContainer = document.querySelector(".book-collection");

function createBooksContainers(){
    userBooksLibrary.forEach(element => {
        let newCard = document.createElement("div")
        let newCardAuthor = document.createElement("div")
        let newCardTitle = document.createElement("div")
        let newCardPages = document.createElement("div")
        let newCardFinished = document.createElement("div")

        newCardAuthor.textContent = "Author: " + element.author;
        newCardAuthor.classList.add("book-author")
        newCardTitle.textContent = "Title: " + element.title;
        newCardTitle.classList.add("book-title")
        newCardPages.textContent = "Total Pages" + element.pages;
        newCardPages.classList.add("book-pages")
        newCardFinished.textContent = "Reading Status: " +  element.read;
        newCardFinished.classList.add("book-finished")

        newCard.appendChild(newCardAuthor)
        newCard.appendChild(newCardTitle)
        newCard.appendChild(newCardPages)
        newCard.appendChild(newCardFinished)
        newCard.classList.add("book")
        bookCardContainer.append(newCard)
    });
}

addBookToLibrary("Hobbit", "Tolkien", '295', 'read')
addBookToLibrary("Hobbit", "Tolkien", '295', 'read')
addBookToLibrary("Hobbit", "Tolkien", '295', 'reading')
createBooksContainers()
