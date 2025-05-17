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
    console.log(userBooksLibrary.slice(userBooksLibrary.length - 1))

        let newCard = document.createElement("div")
        let newCardAuthor = document.createElement("div")
        let newCardTitle = document.createElement("div")
        let newCardPages = document.createElement("div")
        let newCardFinished = document.createElement("div")

        let userBook = userBooksLibrary.slice(userBooksLibrary.length - 1);

        newCardAuthor.textContent = "Author: " + userBook[0].author;
        newCardAuthor.classList.add("book-author")
        newCardTitle.textContent = "Title: " + userBook[0].title;
        newCardTitle.classList.add("book-title")
        newCardPages.textContent = "Total Pages: " + userBook[0].pages;
        newCardPages.classList.add("book-pages")
        newCardFinished.textContent = "Reading Status: " +  userBook[0].read;
        newCardFinished.classList.add("book-finished")

        newCard.appendChild(newCardAuthor)
        newCard.appendChild(newCardTitle)
        newCard.appendChild(newCardPages)
        newCard.appendChild(newCardFinished)
        newCard.classList.add("book")
        bookCardContainer.append(newCard)
}

//Create variable to represent the button "add the new book"
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button")
const closeButton = document.querySelector("dialog  button")

// Create eventlistener for clicking button
//Button to open the modal
showButton.addEventListener("click", function(){
    dialog.showModal();
})
//Button to close the modal
closeButton.addEventListener("click", function(){
    dialog.close();
})
// Create two button inside the form: submit and cancel
const confirmBtn = document.querySelector("#confirmBtn")
const libDialog = document.querySelector("#libDialog")

// Create all input variable to show data inside
const bookAuthor = document.querySelector("#book-author")
const bookTitle = document.querySelector("#book-title")
const bookPages = document.querySelector("#book-pages")
const bookFinished = document.querySelector("#book-status")
confirmBtn.addEventListener("click", function(){
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookFinished.value)
    console.log(userBooksLibrary)
    libDialog.close()
    createBooksContainers()

    // Clear the data for the new book
    bookAuthor.value = "";
    bookTitle.value = "";
    bookPages.value = "";
    bookFinished.value = "";
})