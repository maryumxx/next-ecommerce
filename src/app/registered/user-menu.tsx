"use client";
import Link from 'next/link';
import { useState } from 'react';

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* User Icon */}
      <button
        className="focus:outline-none cursor-pointer"
        onClick={toggleMenu}
      >
        <img className="w-8 h-8" src="user.png" alt="User Icon" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10"
          onBlur={closeMenu}
        >
          <ul className="text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Manage My Account
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              My Order
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              My Cancellations
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              My Reviews
            </li>
            <Link href="/">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Logout
            </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
