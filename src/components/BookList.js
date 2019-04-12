import React from "react";

export default function BookList({ books }) {
  return (
    <div>
      <div>
        {books.map(book => {
          return (
            <div key={book.title}>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
