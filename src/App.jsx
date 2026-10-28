import { useState } from "react";
import BookList from "./books/BookList";
import { BookContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <BookContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <BookList />
        </div>
        <Footer />
      </BookContext.Provider>
    </>
  );
}

export default App;
