function borrowBook(bookTitle, availableBooks) {
  if (availableBooks.length === 0) {
    return "Sorry, there are no books available to borrow.";
  }

  const index = availableBooks.indexOf(bookTitle);

  if (index !== -1) {
    availableBooks.splice(index, 1);
    return `You have borrowed '${bookTitle}'.`;
  } else {
    return `Sorry, '${bookTitle}' is not available.`;
  }
}

module.exports = borrowBook;
