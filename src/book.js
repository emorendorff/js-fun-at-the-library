function createTitle(bookIdea) {
  return `The ${bookIdea}`;

};
function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return character
};

function saveReview(content,reviews) {
  if (reviews.indexOf(content) === -1) {
    reviews.push(content);
  }
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
};

function writeBook(title, character, genre) {
  var book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre:genre,
  }
  return book
};

function editBook(book) {
  var newPageCount = book.pageCount * 0.75
  book.pageCount = newPageCount 
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
