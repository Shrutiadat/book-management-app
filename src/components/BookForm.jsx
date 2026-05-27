import { useEffect, useState } from "react";

function BookForm({ onAddBook, onUpdateBook, editBook, loading }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  useEffect(() => {
    if (editBook) {
      setFormData(editBook);
    }
  }, [editBook]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editBook) {
      onUpdateBook(formData);
    } else {
      onAddBook(formData);
    }

    setFormData({
      title: "",
      author: "",
      genre: "",
      year: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter book title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="author"
        placeholder="Enter book author"
        value={formData.author}
        onChange={handleChange}
      />

      <input
        type="text"
        name="genre"
        placeholder="Enter book genre"
        value={formData.genre}
        onChange={handleChange}
      />
      <input
        type="text"
        name="year"
        placeholder="Enter book year"
        value={formData.year}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Please wait..." : editBook ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}

export default BookForm;
