const myLibrary = [];

//Create a constructor for books
function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

// Takes arguments
function addBookToLibrary(...args) {
    // Create new book object from arguments
    let book = new Book(...args)
    //Pushes to the library array
    myLibrary.push(book)
}

addBookToLibrary("The Hobbit", "Tolkien", "192", "not read yet")
addBookToLibrary("The Hobbit", "Tolkien", "192", "not read yet")
addBookToLibrary("The Hobbit", "Tolkien", "192", "not read yet")
addBookToLibrary("The Hobbit", "Tolkien", "192", "not read yet")


// Create a function that loops through the array and displays each book on the page
const mainContainer = document.querySelector("main")

function displayBooks(){
    for (const element of myLibrary) {
        let bookCard = document.createElement("div")
        bookCard.classList.add("book-card");
        bookCard.textContent = element.title
        mainContainer.appendChild(bookCard)
    }
}

displayBooks()