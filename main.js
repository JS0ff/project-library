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