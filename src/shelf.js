function shelfBook(book, shelf) {
  if (shelf.length >= 3) {
    return
  }
  else {
    shelf.unshift(book)
  }
  return shelf
};

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if(title === shelf[i].title) {
    shelf.splice(i, 1);
    }
  }
};

function listTitles(shelf) {
  var shelfTitles = []
  for (var i = 0; i < shelf.length; i++) {
    shelfTitles.push(shelf[i].title)
  }
  return shelfTitles.join(", ")
};

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
    return false;
  };




module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
