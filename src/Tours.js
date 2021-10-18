import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="flex flex-col items-center w-full">
        <h2 className="font-semibold text-3xl pt-4">our tours</h2>
        <div className="h-1 w-20 mt-2 bg-green-400"></div>
      </div>
      <div className='lg:grid lg:grid-cols-2 '>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
        })}
      </div>
    </section>
  )
}

export default Tours
