import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ReviewCard from "./components/ReviewCard"
import Footer from "./components/Footer"

import { FaShoppingBag } from "react-icons/fa"
import aglaonema from "./assets/aglaonema.png"
import plant3 from "./assets/plant3.png"
import plant4 from "./assets/plant4.png"
import plant5 from "./assets/plant5.png"

function App() {

  return (

    <div
      className="bg-cover bg-center bg-fixed bg-no-repeat min-h-screen relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1600&auto=format&fit=crop')"
      }}
    >

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/75"></div>

      {/* Main Content */}

      <div className="relative z-10">

        <Navbar />

        <Hero />

        {/* OUR TRENDY PLANTS */}

        <section className="max-w-7xl mx-auto px-6 py-24">

          <h1 className="text-5xl font-bold text-center mb-16 text-white">

            Our Trendy Plants

          </h1>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">

            <div className="grid lg:grid-cols-2 items-center">

              {/* LEFT IMAGE */}

              <div className="flex justify-center p-10">

                <img
                  src={plant3}
                  alt="Trendy Plant"
                  className="w-[280px] md:w-[350px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                />

              </div>

              {/* RIGHT CONTENT */}

              <div className="p-10 md:p-16">

                <p className="text-white uppercase tracking-[5px] mb-4 font-bold text-lg">

                  For Your Desks Decorations

                </p>

                <p className="text-gray-300 leading-7 mb-8 text-sm md:text-base font-normal">

                  I recently added a beautiful desk decoration plant to my workspace,
                  and it has made such a positive difference!

                </p>

                <h3 className="text-3xl font-bold text-white mb-8">

                  Rs. 599 /-

                </h3>

                {/* BUTTONS */}

                <div className="flex items-center gap-4">

                  {/* Explore Button */}

                  <button className="border border-white/60 bg-transparent text-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition-all duration-300">

                    Explore

                  </button>

                  {/* Cart Button */}

                  <button className="w-14 h-14 border border-white/60 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">

                    <FaShoppingBag />

                  </button>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SECOND TRENDY PLANT SECTION */}

<section className="max-w-7xl mx-auto px-6 py-10">

  <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">

    <div className="grid lg:grid-cols-2 items-center">

      {/* LEFT CONTENT */}

      <div className="p-10 md:p-16 order-2 lg:order-1">

        <p className="text-white uppercase tracking-[5px] mb-4 font-bold text-lg">

          For Your Desks Decorations

        </p>

        <p className="text-gray-300 leading-7 mb-8 text-sm md:text-base font-normal">

          The greenery adds a touch of nature and serenity to my desk,
          making it feel more inviting and calming.

        </p>

        <h3 className="text-3xl font-bold text-white mb-8">

          Rs. 399 /-

        </h3>

        {/* BUTTONS */}

        <div className="flex items-center gap-4">

          {/* Explore Button */}

          <button className="border border-white/60 bg-transparent text-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition-all duration-300">

            Explore

          </button>

          {/* Cart Button */}

          <button className="w-14 h-14 border border-white/60 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">

            <FaShoppingBag />

          </button>

        </div>

      </div>

      {/* RIGHT IMAGE */}

      <div className="flex justify-center p-10 order-1 lg:order-2">

        <img
          src={plant4}
          alt="Trendy Plant"
          className="w-[280px] md:w-[350px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        />

      </div>

    </div>

  </div>

</section>
{/* OUR TOP SELLING PLANTS */}

<section className="max-w-7xl mx-auto px-6 py-16">

  <h1 className="text-5xl font-bold text-center mb-16 text-white">

    Our Top Selling Plants

  </h1>

  {/* MAIN GLASS BORDER */}

  <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 shadow-2xl">

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* CARD 1 */}

      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] pt-16 pb-10 px-6 shadow-2xl overflow-hidden flex items-center justify-center">

        {/* TOP CURVE */}

        <div className="absolute top-0 left-0 w-full h-20 bg-white/5 rounded-b-[100px]"></div>

        <img
          src={aglaonema}
          alt="plant"
          className="w-60 h-60 object-contain relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        />

      </div>

      {/* CARD 2 */}

      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] pt-16 pb-10 px-6 shadow-2xl overflow-hidden flex items-center justify-center">

        {/* TOP CURVE */}

        <div className="absolute top-0 left-0 w-full h-20 bg-white/5 rounded-b-[100px]"></div>

        <img
          src={plant3}
          alt="plant"
          className="w-60 h-60 object-contain relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        />

      </div>

      {/* CARD 3 */}

      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] pt-16 pb-10 px-6 shadow-2xl overflow-hidden flex items-center justify-center">

        {/* TOP CURVE */}

        <div className="absolute top-0 left-0 w-full h-20 bg-white/5 rounded-b-[100px]"></div>

        <img
          src={plant5}
          alt="plant"
          className="w-60 h-60 object-contain relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        />

      </div>

    </div>

  </div>

</section>

{/* O2 PLANTS */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[40px] overflow-hidden grid lg:grid-cols-2 items-center">

    <div className="p-10 md:p-16">

      <p className="text-green-400 uppercase tracking-[5px] mb-4">

        O₂ Plants

      </p>

      <h1 className="text-5xl font-bold leading-tight mb-6 text-white">

        Bring Fresh Oxygen To Your Home

      </h1>

      <p className="text-gray-300 leading-8 mb-8">

        Premium indoor plants improve air quality and aesthetics.

      </p>

      <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black duration-300 text-white">

        Explore Now

      </button>

    </div>

    <img
      src={plant4}
      alt="plant"
      className="w-full h-full object-cover"
    />

  </div>

</section>
{/* CUSTOMER REVIEWS */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <h1 className="text-5xl font-bold text-center mb-14 text-white">

    Customer Reviews

  </h1>

  <div className="grid lg:grid-cols-3 gap-8">

    <ReviewCard
      name="Rahul"
      image="https://randomuser.me/api/portraits/men/32.jpg"
      review="Amazing plant quality and beautiful packaging."
    />

    <ReviewCard
      name="Sneha"
      image="https://randomuser.me/api/portraits/women/45.jpg"
      review="My room looks aesthetic now. Loved the plants."
    />

    <ReviewCard
      name="Vikram"
      image="https://randomuser.me/api/portraits/men/52.jpg"
      review="Healthy plants and fast delivery service."
    />

  </div>

</section>


<Footer />

      </div>

    </div>
  )
}

export default App
        