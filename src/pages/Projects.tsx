export default function Projects() {
    const projects = [
      {
        title: "KrishiSakha",
        description:
          "A scalable backend for real-time agricultural disease detection using Spring Boot, Express, and FastAPI. Features localized Kannada chat service and deep learning integration.",
        technologies: ["Spring Boot", "Express", "FastAPI", "React", "Kotlin"],
        github: "https://github.com/dhananjayhegde07",
      },
      {
        title: "Distributed Cloud Storage System",
        description:
          "A distributed storage system with data chunking, regional replication, and NGINX load balancing for high availability and scalability.",
        technologies: ["Spring Boot", "MongoDB", "NGINX"],
        github: "https://github.com/dhananjayhegde07/DecentralizedCloud.git",
      },
      {
        title: "LOLO Quizz",
        description:
          "A dynamic quiz website with customizable quizzes, real-time feedback, and secure data handling, built using SvelteKit and NodeJS.",
        technologies: ["SvelteKit", "NodeJS", "MongoDB"],
        github: "https://github.com/dhananjayhegde07/quizz.git",
      },
      {
        title: "Hostel Management System",
        description:
          "Streamlined hostel management with Angular, NodeJS, and MySQL for student registration, room allocation, and fee management.",
        technologies: ["Angular", "NodeJS", "MySQL"],
        github: "https://github.com/dhananjayhegde07/hostel.git",
      },
    ];
  
    return (
      <section id="projects" className="bg-gradient-to-r h-screen w-screen text-white py-16 px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="text-lg text-gray-400 mt-4">
            A showcase of my recent work in backend, full-stack, and scalable systems development.
          </p>
        </div>
  
        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-400 mb-2">Technologies:</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-700 px-3 py-1 text-sm rounded-full text-gray-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={project.github}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  