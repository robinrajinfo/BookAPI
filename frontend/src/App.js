import React, { useEffect, useState } from 'react';
import { getBooks } from './api/bookAPI';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div>
      <h1>Books from Django API</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
