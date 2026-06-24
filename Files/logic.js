const myLibrary = [];
let libraryForm = document.querySelector("#libraryForm");
let bookName = document.querySelector("#bookName");

let addBook = document.querySelector(".addBook");
addBook.addEventListener("click",() => {libraryForm.showModal()})

let close = document.querySelector(".close");
close.addEventListener("click",() => {libraryForm.close()})

let submit = document.querySelector(".submit");
submit.addEventListener("click",(event) => {
    let bookValue = bookName.value;

    event.preventDefault();
    addBookToLibrary(bookValue,'hi','why',412);
    bookValue = "";
    libraryForm.close();

})

addBookToLibrary('Epic Shit Done','Ankur Warikoo','English',312)
addBookToLibrary('Atomic Habits','James Clear', 'English', 435)
addBookToLibrary('You Can', 'George Matthew Adams', 'English', 234)
addBookToLibrary('Deep Work','Cal Newport', 'English', 342)

showLibrary()

console.log(myLibrary.length)

function Book (name, author, language, pages) {
  // the constructor...
    if (!new.target) {
        throw Error ('new is not present after the constructor function')
    }
        this.id = crypto.randomUUID(),
        this.name = name,
        this.author = author,
        this.language = language,
        this.pages = pages,
        this.summary = `ID: ${this.id} \n Book: ${name} \n Author: ${author} \n Language: ${language} \n Pages: ${pages}`
    }

function addBookToLibrary(name, author,language,pages) {
let libraryBook = new Book(name, author, language, pages);

return myLibrary.push(libraryBook.summary)
}

function showLibrary() {
    for (i = 0; i < myLibrary.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    

    let text = document.createElement("p");
    text.classList.add("text");
    

    text.textContent = myLibrary[i];

    card.appendChild(text);
    document.body.appendChild(card);
    }
}




