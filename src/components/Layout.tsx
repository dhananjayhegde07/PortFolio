import { Outlet } from 'react-router-dom';
import Header from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-secondary to-primary text-white">
      <Header />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
