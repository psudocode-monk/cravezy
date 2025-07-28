const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-10 bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold text-green-400 mb-4">About Craving + Crazy = Cravezy</h1>

      <p className="text-lg text-gray-300 max-w-2xl mb-6 leading-relaxed">
        Welcome to <span className="font-semibold text-green-400">Cravezy</span> — your go-to place for lightning-fast food delivery!
        We are building a modern web app where users can browse top-rated restaurants, search their favorite meals, and order food with just a few clicks.
      </p>

      <p className="text-md text-gray-400 max-w-xl leading-relaxed">
        This project is developed using <span className="text-green-400">React</span>, <span className="text-green-400">Tailwind CSS</span>, <span className="text-green-400">Vite</span>,
        and <span className="text-green-400">Swiggy’s public API</span> — a sleek clone built for learning and growth.
        Whether you're a food lover or a developer, this platform is designed to satisfy both your hunger and curiosity.
      </p>

      <p className="mt-6 text-sm text-gray-500 italic">🚀 More exciting features are on the way!</p>
    </div>
  )
}

export default About
