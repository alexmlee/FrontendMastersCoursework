function addFavoriteBook(bookName) {
  if (typeof bookName != "string") {
    return;
  }
  if (bookName.toLowerCase().includes("great")) {
    return;
  }
  favoriteBooks.push(bookName);
}

function printFavoriteBooks() {
  console.log(`Favorite Books: ${favoriteBooks.length}`);
  for (let book of favoriteBooks) {
    console.log(book);
  }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books

printFavoriteBooks();
