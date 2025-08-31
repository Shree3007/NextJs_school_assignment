import Link from "next/link";
import { Button } from '@/components/ui/button';
import { GraduationCap, Plus, List } from 'lucide-react';

const Navigation = () => {

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-education-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-education-primary to-education-secondary bg-clip-text">
              SchoolHub
            </span>
          </Link>
          <div className="flex space-x-4">
            <Link href="/showSchools">
              <Button 
                className="flex items-center space-x-2"
              >
                <List className="h-4 w-4" />
                <span>View Schools</span>
              </Button>
            </Link>
            <Link href="/addSchool">
              <Button 
                className="flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add School</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;