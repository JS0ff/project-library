let myLibrary = [];

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

      //Add Delete button for every card
      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-button");
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener("click", function () {
        //Delete the element's bookCard container
        mainContainer.removeChild(bookCard);
        //Delete the element from the array
        myLibrary = myLibrary.filter((item) => item.id != bookCard.dataset.id);
      });

      //Add change reading status button
      let readStatus = document.createElement("button");
      readStatus.classList.add("status-button");
      readStatus.textContent = "Change Status";

      // Change Reading status for every click
      readStatus.addEventListener("click", function (event) {
        myLibrary[i].read = myLibrary[i].changeReadingStatus(myLibrary[i].read);
        let currentStatus = myLibrary[i].read;
        bookProgress.textContent = `Progress: ${currentStatus}`;
      });

      // Append all children to the bookCard element
      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(bookPages);
      bookCard.appendChild(bookProgress);
      bookCard.appendChild(readStatus);
      bookCard.appendChild(deleteBtn);

      //Set an id of a book in the array
      bookCard.setAttribute("data-id", myLibrary[i].id);

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
    //Default value of every book
    (bookProgress.value = "reading")
  );
});

//Connect prototype function to the Book constructor
Book.prototype.changeReadingStatus = function (readingStatus) {
  if (readingStatus === "reading") {
    readingStatus = "finished";
    return readingStatus;
  } else if (readingStatus === "finished") {
    readingStatus = "planning";
    return readingStatus;
  } else if (readingStatus === "planning") {
    readingStatus = "reading";
    return readingStatus;
  }
  console.log(readingStatus);
};

addBookToLibrary("The Hobbit", "J.R.R Tolkien", "312", "planning");
displayBooks();
addBookToLibrary("Atomic Habits", "James Clear", "320", "reading");
displayBooks();
