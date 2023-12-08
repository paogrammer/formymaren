// components/Navbar.js

import Link from 'next/link';
import './nav.css'

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="nav-container mx-auto">
        <Link href="/greeting">
          <div className="">Birthday Note</div>
        </Link>
        <span className="mx-4">|</span>
        <Link href="/home">
          <div className="">Flowers for You</div>
        </Link>
        
        <span className="mx-4 ">|</span>
        <Link href="/letters">
          <div className="">Letters to Maren</div>
        </Link>
        <span className="mx-4 ">|</span>
        <Link href="/album">
          <div className="">Photo Album</div>
        </Link>
       
      </div>
    </nav>
  );
};

export default Navbar;
