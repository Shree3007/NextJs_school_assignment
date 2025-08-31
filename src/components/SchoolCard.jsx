import Image from "next/image";

export default function SchoolCard({ school }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <Image
        className="w-full h-48 object-cover"
        src={school.image}
        alt={school.name}
        width={400}
        height={300}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{school.name}</div>
        <p className="text-gray-700 text-base">
          {school.address}, {school.city}
        </p>
      </div>
    </div>
  );
}
