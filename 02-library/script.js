window.addEventListener("DOMContentLoaded", (event) => {
    const submitBtn = document.querySelector('button.submit');
    if (submitBtn) {
      submitBtn.addEventListener('click',  validateForm);
    }
});

//global variables
var count = 0 //helps to index our books
//var bookCount = 0 // total number of books



// helper function to validate form

function validateForm(e) {
    const form = e.target.form;
    console.log(form);

    // space for future improvement
    // check to see if book already added becore implementing count++


    if (form.checkValidity()) {
        count ++;
        const title = e.target.form[0].value;
        const author = e.target.form[1].value;
        const pages = e.target.form[2].value;
        const read = e.target.form[3].checked;

        let book = new Book(title, author, pages, read);

        addBook(book, count);
    } else {
        e.preventDefault();
    }
}

// object constructor Book 

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
    checkBox.name = '' + count;
    checkBox.id = 'read' + count;
    if (book.read) {
        checkBox.checked = true;
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
    li6.appendChild(delBookBtn);
    ul.appendChild(li6);

    bookDiv.appendChild(ul);

    mainC.appendChild(bookDiv);
}