import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-purple-900/40 bg-black/30 backdrop-blur-md sticky top-0 z-50">
      {/* Nama Web Berubah Jadi maladigi */}
      <Link to="/" className="font-extrabold text-2xl tracking-wider galaxy-title">
        maladigi
      </Link>
      
      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-300 hover:text-cyan-400 transition text-sm font-medium">Home</Link>
        <Link to="/admin" className="text-gray-300 hover:text-cyan-400 transition text-sm font-medium">Admin Panel</Link>
        
        <a href="https://github.com/username-kamu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-sm">GitHub</a>
        <a href="https://discord.gg/link-kamu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-sm">Discord</a>
        <a href="https://x.com/elonmusk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-sm">X</a>

        <Link to="/login" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-5 py-2 rounded-xl font-medium transition text-sm shadow-lg shadow-purple-500/20">
          Login
        </Link>
      </div>
    </nav>
  );
}