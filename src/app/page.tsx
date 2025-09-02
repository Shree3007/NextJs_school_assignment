import { Button } from '@/components/ui/button';
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Plus, List, BookOpen, Users, Award } from 'lucide-react';
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-education.jpg"
            alt="Education Hero"
            fill={true}
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-education-primary/80 to-education-secondary/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl text-gray-900 md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-education-accent">SchoolHub</span>
          </h1>
          <p className="text-xl text-gray-900 md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Your comprehensive platform for managing and discovering Schools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/showSchools">
              <Button size="lg" className=" cursor-pointer w-full hover:bg-white hover:text-gray-900 sm:w-auto">
                <List className="h-5 w-5 mr-2" />
                Browse Schools
              </Button>
            </Link>
            <Link href="/addSchool">
              <Button size="lg" className=" cursor-pointer w-full bg-white text-gray-900 hover:bg-black hover:text-white sm:w-auto backdrop-blur-sm">
                <Plus className="h-5 w-5 mr-2" />
                Add School
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose SchoolHub?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the features that make school management and discovery seamless
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="bg-education-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Management</h3>
              <p className="text-gray-600">
                Add and manage school information
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="bg-education-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Directory</h3>
              <p className="text-gray-600">
                Browse through a beautiful catalog of schools
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200">
              <div className="bg-education-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                All schools are verified with complete contact and location information
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;