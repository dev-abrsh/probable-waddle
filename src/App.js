import { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  useEffect(() => {
    fetchTours()
  }, [])

  async function fetchTours() {
    try {
      const res = await fetch(url)
      const tours = await res.json()
      setTours(tours)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  if (loading) {
    return (
      <main className="w-full min-h-screen bg-gray-200 p-8 text-gray-800 tracking-wide">
        <Loading />
      </main>
    )
  }
  if(tours.length === 0){
        return (
          <main className="w-full min-h-screen bg-gray-200 p-8 text-gray-800 tracking-wide">
            <h2 className='text-center font-semibold text-xl'>NO Tours Left</h2>
            <div className='flex justify-center mt-10'>
              <button
                onClick={fetchTours}
                className=" bg-white rounded-md p-5 text-green-400"
              >
                refresh
              </button>
            </div>
          </main>
        )
  }
  return (
    <main className="w-full min-h-screen  bg-gray-200 px-8 pb-8 md:pt-8 text-gray-800 text-lg tracking-wide">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
