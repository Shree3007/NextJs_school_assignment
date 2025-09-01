import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap } from "lucide-react";

export default function SchoolCard({ school }) {
  return (
    <Card className="max-w-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-2xl m-4">
      {/* School image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={school.image}
          alt={school.name}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge className=" text-white">
            <GraduationCap className="h-3 w-3 mr-1" />
            School
          </Badge>
        </div>
      </div>

      {/* Card Content */}
      <CardContent className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {school.name}
        </h3>

        <div className="flex items-start space-x-2 text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-400" />
          <span className="text-sm line-clamp-2 font-bold">
            {school.address}, {school.city}
          </span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <Badge variant="secondary" className="text-blue-400">
            {school.city}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
