import Button from "./Button"
import { FaPlay } from "react-icons/fa"

import aglaonema from "../assets/aglaonema.png"

const Hero = () => {

  return (

    <section
      className="min-h-screen relative overflow-hidden pt-28 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1600&auto=format&fit=crop')"
      }}
    >

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Soft Glow */}

      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-green-500/10 blur-[80px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* LEFT CONTENT */}

          <div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">

              Earth’s Exhale

            </h1>

            <p className="text-gray-200 max-w-xl leading-8 mb-8 text-lg">

              “Earth Exhale” symbolizes the purity and vitality of the Earth’s
              natural environment and its essential role in sustaining life.

            </p>

            {/* BUTTONS */}

            <div className="flex items-center gap-6 mb-16 flex-wrap">

              <Button text="Buy Now" />

              <div className="flex items-center gap-4 cursor-pointer group">

                <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center hover:bg-white/10 duration-300">

                  <FaPlay className="text-white ml-1" />

                </div>

                <p className="text-white">
                  Live Demo
                </p>

              </div>

            </div>

            {/* REVIEW CARD */}

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[30px] p-6 max-w-sm shadow-2xl">

              <div className="flex items-center gap-4 mb-4">

                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="user"
                  className="w-14 h-14 rounded-full"
                />

                <div>

                  <h3 className="font-semibold text-white">
                    Ronnie Hamill
                  </h3>

                  <p className="text-yellow-400">
                    ★★★★★
                  </p>

                </div>

              </div>

              <p className="text-gray-200 text-sm leading-7">

                I can express how thrilled I am with my new natural plant!
                They bring such a fresh and vibrant energy to my home.

              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative flex justify-center lg:justify-end">

            {/* Glass Card */}

            <div className="w-[270px] bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-6 shadow-2xl">

              {/* Plant Image */}

              <img
                src={aglaonema}
                alt="Aglaonema Plant"
                className="w-44 mx-auto mb-5 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              />

              {/* Text */}

              <p className="text-gray-300 text-sm mb-2">

                Indoor Plant

              </p>

              <h2 className="text-3xl font-semibold leading-tight mb-5 text-white">

                Aglaonema Plant

              </h2>

              {/* Buy Button */}

              <button className="border border-white/60 bg-transparent text-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition-all duration-300">

                Buy Now

              </button>

              {/* Slider Dots */}

              <div className="flex justify-center gap-2 mt-6">

                <div className="w-2 h-2 rounded-full bg-white"></div>

                <div className="w-2 h-2 rounded-full bg-gray-500"></div>

                <div className="w-2 h-2 rounded-full bg-gray-500"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero