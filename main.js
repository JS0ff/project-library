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
  let book = new Book(...args);
  //Pushes to the library array
  myLibrary.push(book);
}

// Create a function that loops through the array and displays each book on the page
const mainContainer = document.querySelector("main");

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    if (i == myLibrary.length - 1) {
      // Create book card element
      let bookCard = document.createElement("div");
      bookCard.classList.add("book-card");

      // Book Title
      let bookTitle = document.createElement("p");
      bookTitle.classList.add("title");
      bookTitle.textContent = `Title: ${myLibrary[i].title}`;

      // Book Author
      let bookAuthor = document.createElement("p");
      bookAuthor.classList.add("author");
      bookAuthor.textContent = `Author: ${myLibrary[i].author}`;

      // Book Pages
      let bookPages = document.createElement("p");
      bookPages.classList.add("pages");
      bookPages.textContent = `Author: ${myLibrary[i].pages}`;

      // Book Progress
      let bookProgress = document.createElement("p");
      bookProgress.classList.add("progress");
      bookProgress.textContent = `Progress: ${myLibrary[i].read}`;

      // Append all children to the bookCard element
      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(bookPages);
      bookCard.appendChild(bookProgress);

      // Save to the main container
      mainContainer.appendChild(bookCard);
    }
  }
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("#close-button");
const createButton = document.querySelector("#create-button");

const bookTittle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookProgress = document.querySelector("#progress");

//Show the form to create new book
showButton.addEventListener("click", () => {
  dialog.showModal();
});

//Close button
closeButton.addEventListener("click", () => {
  dialog.close();
});

//Pass new data to create new books
createButton.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close(
    addBookToLibrary(
      bookTittle.value,
      bookAuthor.value,
      bookPages.value,
      bookProgress.value
    ),
    displayBooks(),
    (bookTittle.value = ""),
    (bookAuthor.value = ""),
    (bookPages.value = ""),
    (bookProgress.value = "reading")
  );
});
``;
