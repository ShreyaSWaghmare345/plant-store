const Button = ({ text }) => {

  return (

    <button className="border border-white/70 bg-transparent text-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide shadow-lg">

      {text}

    </button>
  )
}

export default Button