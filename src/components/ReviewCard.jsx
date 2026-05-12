import { FaStar } from "react-icons/fa"

const ReviewCard = ({name,image,review}) => {

  return (
    <div className="bg-card p-8 rounded-[30px] hover:scale-105 duration-300">

      <div className="flex items-center gap-4 mb-5">

        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>

          <h2 className="font-semibold text-lg">
            {name}
          </h2>

          <div className="flex gap-1 text-yellow-400 mt-1">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>

        </div>

      </div>

      <p className="text-grayText leading-7">
        {review}
      </p>

    </div>
  )
}

export default ReviewCard