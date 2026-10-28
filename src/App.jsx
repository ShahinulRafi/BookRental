import { useState } from "react";
import BookList from "./books/BookList";
import { BookContext, ThemeContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <BookContext.Provider value={{ cartData, setCartData }}>
          <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
            <Header />
            <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar />
              <BookList />
            </div>
            <Footer />
          </div>
        </BookContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
