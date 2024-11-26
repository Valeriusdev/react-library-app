import Header from '../components/Header'
import Component1 from '../components/Component1'

const HomeLayout = () => {
  return (
    <div className="w-full">
      <section className="h-screen w-full">
        <Header />
      </section>
      <main className="w-full">
        <div className="w-full">
          <div className="flex justify-center w-full">
            <Component1 />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomeLayout