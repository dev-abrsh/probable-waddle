import { useState } from 'react'

const Tour = ({ id, image, price, name, info, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <article className="shadow-xl rounded lg:mx-12 lg:my-16 bg-white mt-10 lg:px-12 lg:pt-8 ">
      <img className=" max-h-96 w-full object-cover object-center rounded" src={image} alt={name} />
      <div className="p-5 flex justify-between font-semibold">
        <h4 className="mr-6">{name}</h4>
        <h4 className="text-green-400 bg-green-50 px-1 rounded h-full">
          <span>$</span>
          {price}
        </h4>
      </div>
      <p className="p-6 text-gray-700">
        {readMore ? info : info.substring(0, 200)}...
        <button
          onClick={() => setReadMore(!readMore)}
          className="pl-4 font-semibold text-green-400 hover:text-green-500"
        >
          {readMore ? 'Show less' : 'read more'}
        </button>
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => removeTour(id)}
          className="hover:bg-red-100 delay-200 border-light-red-500 border-solid border-2 rounded-md px-3 mb-5 text-red-600"
        >
          !Not Interested
        </button>
      </div>
    </article>
  )
}

export default Tour
