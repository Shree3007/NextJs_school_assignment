"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap, Plus, List } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-education-primary" />
            <span className="text-xl font-bold bg-clip-text">
              SchoolHub
            </span>
          </Link>

          <div className="hidden md:flex space-x-4">
            <Link href="/showSchools">
              <Button
                className="cursor-pointer flex items-center space-x-2"
              >
                <List className="h-4 w-4" />
                <span>View Schools</span>
              </Button>
            </Link>
            <Link href="/addSchool">
              <Button
                className="cursor-pointer flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add School</span>
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg pb-4 animate-fade-in-down">
          <div className="flex flex-col items-center space-y-4 mt-4">
            <Link href="/showSchools">
              <p onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-lg py-2">View Schools</p>
            </Link>
            <Link href="/addSchool">
              <p onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-lg py-2">Add School</p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}