import { useParams } from "react-router-dom";
import books from "../data/books";
import Header from "../components/Header";
import Component1 from "../components/Component1";
import Footer from "../components/Footer";

const SingleBookLayout = () => {
  const params = useParams();
  const book = book.find((book) => book.slug === params.slug);

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
            <Component1 />
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
