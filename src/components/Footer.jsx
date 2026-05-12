import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from "react-icons/fa"

const Footer = () => {

  return (
    <footer className="bg-black border-t border-gray-800 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        <div>

          <h1 className="text-3xl font-bold text-primary mb-4">
            Earth's Exhale
          </h1>

          <p className="text-grayText leading-7">
            Premium indoor plants for modern homes.
          </p>

        </div>

        <div>

          <h2 className="text-xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3 text-grayText">
            <li>Home</li>
            <li>Plants</li>
            <li>Reviews</li>
            <li>Contact</li>
          </ul>

        </div>

        <div>

          <h2 className="text-xl font-semibold mb-4">
            Newsletter
          </h2>

          <div className="flex flex-col gap-4">

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-card p-4 rounded-full outline-none"
            />

            <button className="bg-primary py-3 rounded-full hover:bg-green-700 duration-300">
              Subscribe
            </button>

          </div>

        </div>

        <div>

          <h2 className="text-xl font-semibold mb-4">
            Social Media
          </h2>

          <div className="flex gap-4 text-2xl">

            <FaFacebook className="hover:text-primary cursor-pointer"/>
            <FaInstagram className="hover:text-primary cursor-pointer"/>
            <FaTwitter className="hover:text-primary cursor-pointer"/>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer