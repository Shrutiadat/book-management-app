import BookCard from "./BookCard";

function BookList({ books, onDeleteBook, onEditBook }) {
  return (
    <div>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onDeleteBook={onDeleteBook}
          onEditBook={onEditBook}
        />
      ))}
    </div>
  );
}

export default BookList;
