const PlantCard = ({image,name,price}) => {

  return (
    <div className="bg-card rounded-[30px] overflow-hidden hover:-translate-y-3 duration-300 shadow-2xl group">

      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover group-hover:scale-110 duration-500"
        />
      </div>

      <div className="p-6">

        <h2 className="text-2xl font-semibold mb-3">
          {name}
        </h2>

        <div className="flex items-center justify-between">

          <p className="text-primary text-xl font-bold">
            {price}
          </p>

          <button className="bg-primary px-5 py-2 rounded-full hover:bg-green-700 duration-300">
            Buy
          </button>

        </div>

      </div>

    </div>
  )
}

export default PlantCard