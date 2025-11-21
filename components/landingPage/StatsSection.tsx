import { Users, Star, CalendarCheck } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="relative h-screen sm:h-fit z-10 bg-gray-50 text-gray-900 py-16 px-8 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-center mb-10">Our Impact</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

        <div>
          <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-4xl font-bold mb-1">1,284+</h3>
          <p className="text-gray-600">Happy Guests</p>
        </div>

        <div>
          <Star className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
          <h3 className="text-4xl font-bold mb-1">4.8 / 5</h3>
          <p className="text-gray-600">Average Rating</p>
        </div>

        <div>
          <CalendarCheck className="w-12 h-12 mx-auto mb-4 text-green-600" />
          <h3 className="text-4xl font-bold mb-1">312</h3>
          <p className="text-gray-600">Bookings This Month</p>
        </div>

      </div>
    </section>
  );
}
