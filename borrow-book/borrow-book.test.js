const borrowBook = require('./borrow-book');

describe('borrowBook', () => {
  test('borrows a book that is available', () => {
    const books = ["Harry Potter", "The Great Gatsby", "To Kill a Mockingbird"];
    const message = borrowBook("The Great Gatsby", books);
    expect(message).toBe("You have borrowed 'The Great Gatsby'.");
    expect(books).toEqual(["Harry Potter", "To Kill a Mockingbird"]);
  });

  test('tries to borrow a book that is not available', () => {
    const books = ["Harry Potter", "To Kill a Mockingbird"];
    const message = borrowBook("The Hobbit", books);
    expect(message).toBe("Sorry, 'The Hobbit' is not available.");
    expect(books).toEqual(["Harry Potter", "To Kill a Mockingbird"]);
  });

  test('borrowing a book when the list is empty', () => {
    const books = [];
    const message = borrowBook("The Great Gatsby", books);
    expect(message).toBe("Sorry, there are no books available to borrow.");
    expect(books).toEqual([]);
  });

  test('updates the list correctly after borrowing multiple books', () => {
    const books = ["Percy Jackson", "Dune", "The Catcher in the Rye"];
    borrowBook("Percy Jackson", books);
    borrowBook("The Catcher in the Rye", books);
    expect(books).toEqual(["Dune"]);
  });
});
