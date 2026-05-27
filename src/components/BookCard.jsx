function BookCard({ book, onDeleteBook, onEditBook }) {
  return (
    <div className="book-card">
      <h3 className="book-title">{book.title}</h3>

      <p>Author:{book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Year: {book.year}</p>
      <div className="card-buttons">
        <button onClick={() => onEditBook(book)} className="card-buttons">
          Edit
        </button>

        <button onClick={() => onDeleteBook(book.id)} className="delete-btn">
          Delete
        </button>
      </div>
      <hr />
    </div>
  );
}

export default BookCard;
