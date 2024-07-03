import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface Book {
  title: string;
  author: string;
  publishedDate: string;
  pdfFile: File | null;
}

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState<Book>({
    title: "",
    author: "",
    publishedDate: "",
    pdfFile: null,
  });
  const [notification, setNotification] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewBook((prev) => ({ ...prev, pdfFile: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({ title: "", author: "", publishedDate: "", pdfFile: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setNotification("Book added successfully!");
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Book List</h2>
      </div>
      {notification && (
        <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
          {notification}
        </div>
      )}
      <form onSubmit={handleSubmit} className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Add New Book</h3>
        <div className="space-y-2">
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
            placeholder="Book Title"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
            placeholder="Author"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="date"
            name="publishedDate"
            value={newBook.publishedDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Book
        </button>
      </form>
      <div>
        {books.map((book, index) => (
          <div key={index} className="mb-2 p-2 border rounded">
            <p>
              <strong>Title:</strong> {book.title}
            </p>
            <p>
              <strong>Author:</strong> {book.author}
            </p>
            <p>
              <strong>Published Date:</strong> {book.publishedDate}
            </p>
            <p>
              <strong>PDF:</strong>{" "}
              {book.pdfFile ? (
                <a
                  href={URL.createObjectURL(book.pdfFile)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {book.pdfFile.name}
                </a>
              ) : (
                "No PDF uploaded"
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Books };
