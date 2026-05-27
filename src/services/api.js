import axios from "axios";

const API_URL = "https://6a1448946c7db8aac054391d.mockapi.io/books/books";

export const getBooks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addBooks = async (bookData) => {
    const response = await axios.post(API_URL, bookData);
    return response.data;
};

export const deleteBook = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
}

export const updateBook = async (id, updatedBook) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedBook);

    return response.data;
}