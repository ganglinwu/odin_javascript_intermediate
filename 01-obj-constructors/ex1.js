function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    
    // function to return info of book as string
    this.info = function() {
        let info = title + " by " + author + ', ' + String(pages) + ' pages, ';
        if (read) {
            info += 'already read'
        } else {
            info += 'not read yet'
        }
        return info
    }
}

// create instance of Book called The Hobbit
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(theHobbit.info());
