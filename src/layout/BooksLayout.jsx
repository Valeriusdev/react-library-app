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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {books.map((book) =>(
              <Link 
                to={`books/${book.slug}`} 
                key={book.id}
                className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200 transition-all"
              >
                <h2 className="mb-2 text-xl font-bold text-black">{book.title}</h2>
              </Link>
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