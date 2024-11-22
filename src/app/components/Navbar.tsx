import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-black text-gold">
      <h1 className="text-2xl font-bold">Jayson Carboo</h1>
      <ul className="flex space-x-4">
        <li><Link href="/about" className="hover:underline">About</Link></li>
        <li><Link href="/projects" className="hover:underline">Projects</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;