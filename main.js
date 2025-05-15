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
const showButton = document.getElementById("showDialog");
const libDialog = document.getElementById("libDialog");
const outputBox = document.querySelector("output")
const confirmBtn = document.querySelector("#confirmBtn")

const booksAuthor = document.querySelector("#author")
const booksTitle = document.querySelector("#title")
const bookPages = document.querySelector("#pages")
const bookFinished = document.querySelector("#finished")


showButton.addEventListener("click", () => {
  libDialog.showModal();
});

libDialog.addEventListener("close", (e) => {
    outputBox.value = 
        libDialog.returnValue === "default" 
            ? "No return value."
            : `ReturnValue: ${libDialog.returnValue}.`;
})

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    libDialog.close(bookFinished.value)
    if(booksTitle.value){
        addBookToLibrary(booksTitle.value)
        console.log("works")
    }
})