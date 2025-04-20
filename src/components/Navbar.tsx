// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-surface shadow-md">
      <nav className="container flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-primary">
          Logo
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-muted hover:text-primary transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-muted hover:text-primary transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-muted hover:text-primary transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
