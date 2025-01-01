import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import books from '../data/books'

const BooksLayout = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="h-screen w-full">
        <Header />
      </section>
      <main className="w-full">
        <div className="w-full px-6 py-8 space-y-4">
          <div className="flex justify-center w-full">
            <h1>Books</h1>
          </div>
          <div className="flex justify-center w-full">
            {books.map((book) =>(
              <Link to={`books/${book.slug}`} key={book.id}>{book.title}</Link>
            ))}
          </div>
        </div>
      </main>
      <div className="w-full h-[40vh]">
        <Footer />
      </div>
    </div>
  )
}

export default BooksLayout