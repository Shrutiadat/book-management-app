import { useEffect, useState } from "react";
import { getBooks, addBooks, deleteBook, updateBook } from "./services/api";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

function App() {
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (books.length === 0) {
          setLoading(true);
        }
        const data = await getBooks();
        setBooks(data);
        setError("");
      } catch (error) {
        setError("Failed to fetch books");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleAddBook = async (newBook) => {
    try {
      const addedBook = await addBooks(newBook);

      setBooks([...books, addedBook]);
    } catch (error) {
      console.log("Error adding book:", error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);

      const updatedBooks = books.filter((book) => book.id !== id);
      setBooks(updatedBooks);
    } catch (error) {
      console.log("Error deleting book:", error);
    }
  };

  const handleEditBook = (book) => {
    setEditBook(book);
  };

  const handleUpdateBook = async (updatedBookData) => {
    try {
      const updatedBook = await updateBook(editBook.id, updatedBookData);

      const updatedBooks = books.map((book) =>
        book.id === editBook.id ? updatedBook : book,
      );

      setBooks(updatedBooks);

      setEditBook(null);
    } catch (error) {
      console.log("Error updating book:", error);
    }
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGenre = genreFilter === "" || book.genre === genreFilter;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="app-container">
      <h1 className="book-title">Book Management System</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Filter genreFilter={genreFilter} setGenreFilter={setGenreFilter} />
      <BookForm
        onAddBook={handleAddBook}
        editBook={editBook}
        onUpdateBook={handleUpdateBook}
        loading={loading}
      />

      {loading && (
        <div className="loading">
          {" "}
          <p>Loading books...</p>
        </div>
      )}
      {error && <p>{error}</p>}

      <BookList
        books={filteredBooks}
        onDeleteBook={handleDeleteBook}
        onEditBook={handleEditBook}
      />

      {filteredBooks.length === 0 && <p>No books found</p>}
    </div>
  );
}

export default App;
