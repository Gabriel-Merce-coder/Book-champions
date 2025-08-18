import { useState } from "react";
import BookItem from "../bookItem/BookItem";

const ListadoDeLibros = ({ books }) => {
  const [busqueda, setBusqueda] = useState("");

  const filtrados = books.filter((book) =>
    book.bookTitle.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar libro..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="mb-3"
      />

      <div className='d-flex flex-wrap'>
        {filtrados.map((book) => (
          <BookItem
            key={book.id}
            title={book.bookTitle}
            author={book.bookAuthor}
            rating={book.bookRating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            available={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ListadoDeLibros;
