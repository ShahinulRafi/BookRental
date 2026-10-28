import { useState } from "react";
import { getImgUrl } from "../utils/book-utility";
import BookDetailsModal from "./BookDetailsModal";
import Rating from "./Rating";
export default function BookCard({ book }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  function handleModalClose() {
    setSelectedBook(null);
    setShowModal(false);
  }
  function handleBookSelection() {
    setSelectedBook(book);
    setShowModal(true);
  }
  return (
    <>
      {showModal && (
        <BookDetailsModal book={selectedBook} onClose={handleModalClose} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleBookSelection(book)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(book.cover)}
            alt={book.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{book.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{book.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={book.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${book.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
