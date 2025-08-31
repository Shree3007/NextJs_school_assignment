import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-2xl font-bold">School App</p>
        </Link>
        <div className="space-x-4">
          <Link href="/addSchool">
            <p className="text-white hover:text-indigo-200">Add School</p>
          </Link>
          <Link href="/showSchools">
            <p className="text-white hover:text-indigo-200">Show Schools</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
