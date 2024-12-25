import Header from "../components/Header";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="h-[40vh] w-full">
        <Header />
      </section>
      <main className="w-full">
        <div className="w-full px-6 py-8 space-y-4">
          <div className="flex justify-center w-full">
            <Link
              to="/about"
              className="font-medium text-blue-400 hover:text-blue-800"
            >
              About
            </Link>
          </div>
          <div className="flex justify-center w-full">
            <Component2 />
          </div>
        </div>
      </main>
      <div className="w-full h-[40vh]">
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
