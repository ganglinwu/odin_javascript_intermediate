// global variables
var count = 1 //helps to index our books
var myLibrary = [];

// event listeners for buttons
window.addEventListener("DOMContentLoaded", (event) => {
    const submitBtn = document.querySelector('button.submit');
    if (submitBtn) {
      submitBtn.addEventListener('click',  validateForm);
    }

    refresh(); 

    const deleteAllBtn = document.querySelector('#deleteAll');
    deleteAllBtn.addEventListener('click', deleteAllBooks)
});


//var bookCount = 0 // total number of books



// helper function to validate form

function validateForm(e) {
    const form = e.target.form;


    if (form.checkValidity()) {
        const title = e.target.form[0].value;
        const author = e.target.form[1].value;
        const pages = e.target.form[2].value;
        const read = e.target.form[3].checked;
        
        let book = new Book(count, title, author, pages, read);
        
        if (myLibrary.some(myLibBook => myLibBook.title === book.title) &&
        myLibrary.some(myLibBook => myLibBook.author === book.author) &&
        myLibrary.some(myLibBook => myLibBook.pages === book.pages)) {
            alert('This book is already in your library, thus we will not add it.')
        } else {
            addBookToLibrary(book); // add book to myLibrary array
            addBook(book, count); // add book as a card to webpage
            count ++;
        }
    } else {
        e.preventDefault();
    }
}

// class Book

class Book {
    constructor(index, title, author, pages, read) {
        this.index = index;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    set newTitle(newTitle) {
        this.title = newTitle;
    }

    set newAuthor(newAuthor) {
        this.author = newAuthor;
    }

    set newPages(newPages) {
        this.pages = newPages;
    }
}

// function to add book to array

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// helper function to add a new book;
// below is the html structure of books under the mainContainer
/*
<div id="mainContainer">
    <div class="book1">
        <ul>
            <li>No: 1</li>
            <li>Title: The Hobbit</li>
            <li>Author: J. R. R. Tolkien</li>
            <li>Pages: 310</li>
            <li>
                <input type="checkbox" name="1" id="1read">
                <label for="1">Read</label>
            </li>
            <li class="delBook">
                <button type="button">Delete Book</button>
            </li>
        </ul>
    </div>
</div>


*/

function addBook(book, count) {
    const mainC = document.getElementById('mainContainer');
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book'+count)

    const ul = document.createElement('ul');
    
    const li1 = document.createElement('li');
    li1.innerText = 'No. '+ count;
    ul.appendChild(li1);

    const li2 = document.createElement('li');
    li2.innerText = 'Title: ' + book.title;
    ul.appendChild(li2);

    const li3 = document.createElement('li');
    li3.innerText = 'Author: ' + book.author;
    ul.appendChild(li3)
    
    const li4 = document.createElement('li');
    li4.innerText = 'Pages: ' + book.pages;
    ul.appendChild(li4);

    const li5 = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = 'checkbox' + count;
    checkBox.id = 'read' + count;
    if (book.read) {
        checkBox.checked = true;
        bookDiv.classList.add('checked');
    }
    li5.appendChild(checkBox);

    const label = document.createElement("label");
    label.for = checkBox.name
    label.innerText = 'Read'
    li5.appendChild(label)
    
    ul.appendChild(li5)

    const li6 = document.createElement('li');
    li6.classList.add('delBook')

    const delBookBtn = document.createElement('button');
    delBookBtn.type= 'button';
    delBookBtn.innerText = 'Delete Book'
    delBookBtn.classList.add('deleteBook');
    li6.appendChild(delBookBtn);
    ul.appendChild(li6);

    bookDiv.appendChild(ul);

    mainC.appendChild(bookDiv);

    refresh();
}

// helper function to delete book

function deleteBook(e) {
    // the button is nested under an li
    // which is then nested under an ul
    // which is then nested under a div
    // to remove the book we need to access the great-grandparents of e.target
    const bookDiv = e.target.parentElement.parentElement.parentElement;

    const response = confirm('Are you sure you want to delete this book?')
    if (response) {
        // delete book from myLibrary array
        myLibrary.forEach(book => {
            // bookDiv will have class of book[digits]
            // e.g. book1, book11, book101
            // so we slice out the first 4 char (which spells 'book')
            // and compare it with the book.index
            if (bookDiv.classList[0].slice(4)== String(book.index)) {
                // once we have a match
                // splice the book out of library
                myLibrary.splice(myLibrary.indexOf(book),1)
            }
        })
        bookDiv.remove()
        refresh();
    } 
}

// helper function to delete ALL books

function deleteAllBooks() {
    const mainC = document.getElementById('mainContainer');
    const response = confirm('Are you sure you want to delete ALL books?')
    if (response) {
        while (mainC.firstChild) {
            mainC.removeChild(mainC.firstChild);
    } 
    }
    myLibrary = [];
    updateStats();
}

// refresh does a few things
// add eventlistener to all deleteBook buttons
// add eventlistener to all read checkbox(for books)

function refresh() {
    const allDeleteBookBtns = Array.from(document.querySelectorAll('.deleteBook'));
    if (allDeleteBookBtns.length) {
        allDeleteBookBtns.forEach(btn => {
            btn.addEventListener('click', deleteBook)
        });
    }

    const checkboxes = Array.from(document.querySelectorAll('#main input[type="checkbox"]'));
    if (checkboxes.length) {
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    checkbox.parentElement.parentElement.parentElement.classList.add('checked');
                } else {
                    checkbox.parentElement.parentElement.parentElement.classList.remove('checked');
                }
                updateStats();
            })
        })
    }
    updateStats();
}

function updateStats() {
    const readBooks = Array.from(document.getElementsByClassName('checked'));
    const totalBooks = Array.from(document.querySelectorAll('.deleteBook'));

    const totalBooksDisplay = document.querySelector('span.totalBooks');
    const readBooksDisplay = document.querySelector('span.booksRead');
    const booksNotReadDisplay = document.querySelector('span.booksNotRead');

    totalBooksDisplay.innerText = '' + totalBooks.length;
    readBooksDisplay.innerText = '' + readBooks.length;
    booksNotReadDisplay.innerText = '' + (totalBooks.length - readBooks.length);
}