
function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  };
  return library;
};

//function addBook(library, book) {
  //if (book.genre === 'fantasy') {
  //   return library.book.genre.push(book)
  // }
// else if (book.genre === 'fiction') {
  //  return library.book.genre.push(book)
//}
//else (book.genre === 'nonFiction')
//  return library.book.genre.push(book)
//};
//WHY DOES THIS NOT WORK I'M GONNA ASK OK

function addBook(library, book) {
  library['shelves'][book.genre].push(book);
};

function checkoutBook (library, book, genre) {
  //console.log(library['shelves'][genre])
  library['shelves'][genre].pop(book)
  return(`You have now checked out ${title} from ${library.name}`)
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
