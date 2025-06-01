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
addBookToLibrary("The Hobbit", "Tolkien.j", "132", "not read yet")


// Create a function that loops through the array and displays each book on the page
const mainContainer = document.querySelector("main")

function displayBooks(){
    for (const element of myLibrary) {
        // Create book card element
        let bookCard = document.createElement("div")
        bookCard.classList.add("book-card");

        // Book Title
        let bookTitle = document.createElement("p");
        bookTitle.classList.add("title")
        bookTitle.textContent = `Title: ${element.title}`

        // Book Author
        let bookAuthor = document.createElement('p')
        bookAuthor.classList.add("author")
        bookAuthor.textContent = `Author: ${element.author}`

        // Book Pages
        let bookPages = document.createElement('p');
        bookPages.classList.add("pages");
        bookPages.textContent = `Author: ${element.pages}`

        // Book Progress
        let bookProgress = document.createElement("p");
        bookProgress.classList.add("progress")
        bookProgress.textContent = `Progress: ${element.read}`
        
        // Append all children to the bookCard element
        bookCard.appendChild(bookTitle)
        bookCard.appendChild(bookAuthor)
        bookCard.appendChild(bookPages)
        bookCard.appendChild(bookProgress)
        
        // Save to the main container
        mainContainer.appendChild(bookCard)
    }
}

displayBooks()