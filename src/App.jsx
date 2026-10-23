import BookList from "./books/BookList";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Header />
      <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <BookList />
      </div>
      <Footer />
    </>
  );
}

export default App;
