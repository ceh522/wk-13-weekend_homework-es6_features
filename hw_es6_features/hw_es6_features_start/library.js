export default class Library {
  constructor(books = []) {
    this.books = books;
  }

bookCount(){
  return this.books.length;
}

addBook(newBook){
  this.books.push(newBook);
}

addBooks(newBooks){
  newBooks.forEach(book => this.books.push(book));
}

printInventory() {
  let book = {
    title: book.title,
    author: book.author
  }
  this.books.forEach((book) => {
    console.log(title + `by` + author);
  })
};
};
