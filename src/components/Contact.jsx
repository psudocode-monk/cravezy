const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-green-400 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-300 max-w-2xl mb-6">
        Have questions, feedback, or just want to say hello? Fill out the form below and we&apos;ll get back to you soon!
      </p>

      <form className="w-full max-w-md bg-gray-800 shadow-2xl rounded-2xl p-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 bg-gray-900 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 bg-gray-900 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full px-4 py-2 bg-gray-900 text-white placeholder-gray-400 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white py-2 rounded-xl font-semibold transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
