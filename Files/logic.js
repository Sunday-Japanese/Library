const myLibrary = [];
let libraryForm = document.querySelector("#libraryForm");
let bookName = document.querySelector("#bookName");
let author = document.querySelector("#author");
let lang = document.querySelector("#lang");
let pages = document.querySelector("#pages");

let addBook = document.querySelector(".addBook");
addBook.addEventListener("click",() => {libraryForm.showModal()})

let close = document.querySelector(".close");
close.addEventListener("click",() => {libraryForm.close()})

let submit = document.querySelector(".submit");
submit.addEventListener("click",(event) => {
    let bookValue = bookName.value;
    let authorValue = author.value;
    let langValue = lang.value;
    let pagesValue = pages.value;

    event.preventDefault();
    addBookToLibrary(bookValue,authorValue,langValue,pagesValue);
    
    bookName.value = "";
    libraryForm.close();

    currentBook();
})

showLibrary()

class Book  {
  // the constructor
constructor (name, author, language, pages) {
    if (!new.target) {
        throw Error ('new is not present after the constructor function')
    }
        this.id = crypto.randomUUID(),  //specifically can't find a use for it ???
        this.name = name,
        this.author = author,
        this.language = language,
        this.pages = pages,
        this.summary = `Book: ${name} \n Author: ${author} \n Language: ${language} \n Pages: ${pages}`
}
    }

function addBookToLibrary(name, author,language,pages) {
let libraryBook = new Book(name, author, language, pages);

return myLibrary.push(libraryBook)
}


addBookToLibrary('Epic Shit Done','Ankur Warikoo','English',312)
addBookToLibrary('Atomic Habits','James Clear', 'English', 435)
addBookToLibrary('You Can', 'George Matthew Adams', 'English', 234)
addBookToLibrary('Deep Work','Cal Newport', 'English', 342)

function showLibrary() {
    for (i = 0; i < myLibrary.length; i++) {

    let card = document.createElement("div");
    card.classList.add("card");
    

    let text = document.createElement("p");
    text.classList.add("text");
    
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = "remove";

    let btnn = document.createElement("button");
    btnn.classList.add("btnn");
    btnn.innerText = "read";

    text.textContent = myLibrary[i].summary;

    btnn.addEventListener("click",() => {
        if (btnn.innerText === "read") {
            return btnn.innerText = "didn't read"
        } else if (btnn.innerText === "didn't read") {
            return btnn.innerText = "read"
        } else {
            return console.log("")
        }
    })

    btn.addEventListener("click",() => {
    text.innerText = "";
    card.remove();
})

    card.appendChild(text);
    document.body.appendChild(card);
    card.appendChild(btn);
    card.appendChild(btnn);
    }
}

function currentBook() {
    let card = document.createElement("div");
    card.classList.add("card");

    let text = document.createElement("p");
    text.classList.add("text");
    
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = "remove";

    let btnn = document.createElement("button");
    btnn.classList.add("btnn");
    btnn.innerText = "read";

    btnn.addEventListener("click",() => {
    if (btnn.innerText === "read") {
    return btnn.innerText = "didn't read"
    } else if (btnn.innerText === "didn't read") {
    return btnn.innerText = "read"
    } else {
        return console.log("")
    }
    })



    btn.addEventListener("click",() => {
    text.innerText = "";
    card.remove();
})


    text.textContent = myLibrary[myLibrary.length - 1].summary;

    card.appendChild(text);
    document.body.appendChild(card);
    card.appendChild(btn);
    card.appendChild(btnn);

}






