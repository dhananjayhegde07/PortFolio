import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-secondary text-white fixed top-0 left-0 w-full shadow-md z-10">
      <nav className="max-w-7xl mx-auto flex justify-between items-end py-4 px-6">
        <div className="space-x-6">
          <Link to="/" className="hover:text-accent transition">Home</Link>
          <Link to="/skills" className="hover:text-accent transition">Skills</Link>
          <Link to="/projects" className="hover:text-accent transition">Projects</Link>
          <Link to="/contact" className="hover:text-accent transition">Contact Me</Link>
        </div>
      </nav>
    </header>
  );
}
