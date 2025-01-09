import { useParams } from "react-router-dom";
import books from "../data/books";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SingleBookLayout = () => {
  const params = useParams();
  const book = books.find((book) => book.slug === params.slug);

  return (
    <div className="flex flex-col w-full">
      <section className="h-screen w-full">
        <Header />
      </section>
      <main className="w-full">
        <div className="w-full px-6 py-8 space-y-4">
          <div className="flex justify-center w-full">
            <h1>Single Book Info</h1>
          </div>
          <div className="flex justify-center w-full">
            <h2>{book.title}</h2>
          </div>
        </div>
      </main>
      <div className="w-full h-[40vh]">
        <Footer />
      </div>
    </div>
  );
};

export default SingleBookLayout;
