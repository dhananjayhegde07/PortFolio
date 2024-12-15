export default function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-r h-screen w-screen text-white py-16 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Technical Skills</h2>
        <p className="text-lg text-gray-400 mt-4">
          A breakdown of my expertise in backend, frontend, databases, and other technologies.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Backend */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-accent">Backend</h3>
          <ul className="space-y-2 text-gray-300">
            <li>NodeJS</li>
            <li>Spring Boot</li>
            <li>Django</li>
            <li>Fast-API</li>
          </ul>
        </div>

        {/* Frontend */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-accent">Frontend</h3>
          <ul className="space-y-2 text-gray-300">
            <li>React</li>
            <li>SvelteKit</li>
            <li>React Native</li>
            <li>Kotlin</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-accent">Databases</h3>
          <ul className="space-y-2 text-gray-300">
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* Others */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-accent">Others</h3>
          <ul className="space-y-2 text-gray-300">
            <li>TensorFlow-Keras (ML)</li>
            <li>AWS</li>
            <li>Google Cloud</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
