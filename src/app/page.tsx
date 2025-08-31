import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
          Welcome to School Management App
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          Your one-stop solution for managing school data efficiently.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        <Link href="/addSchool">
          <p className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Add New School
          </p>
        </Link>
        <Link href="/showSchools">
          <p className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            View All Schools
          </p>
        </Link>
      </div>
    </div>
  );
}
