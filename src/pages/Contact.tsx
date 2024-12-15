export default function Contact() {
    return (
      <section id="contact" className="bg-gradient-to-r h-screen w-screen flex-col justify-center text-white py-16 px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="text-lg text-gray-400 mt-4">
            I'm open to exciting opportunities and collaborations. Feel free to reach out through the platforms below!
          </p>
        </div>
  
        {/* Contact Methods */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2 text-accent">Email</h3>
            <a
              href="mailto:dhananjayhegde7@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              dhananjayhegde7@gmail.com
            </a>
          </div>
  
          {/* LinkedIn */}
          <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2 text-accent">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/dhananjay-hegde-588b43247"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              linkedin.com/in/dhananjay-hegde
            </a>
          </div>
  
          {/* GitHub */}
          <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2 text-accent">GitHub</h3>
            <a
              href="https://github.com/dhananjayhegde07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              github.com/dhananjayhegde07
            </a>
          </div>
        </div>
      </section>
    );
  }
  