import { memo } from "react";
import Image from "next/image";
import { Room } from "@/types/room";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface RoomCardProps {
  room: Room;
  onBook: (room: Room) => void;
}

function RoomCardInner({ room, onBook }: RoomCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-sm">
          ${room.price}/night
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">{room.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-500">
          {room.description}
        </p>

        {/* Meta */}
        <div className="mt-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Up to {room.capacity}
          </span>
        </div>

        {/* Book button */}
        <Button
          onClick={() => onBook(room)}
          className="mt-4 w-full rounded-xl"
        >
          Book Now
        </Button>
      </div>
    </Card>
  );
}

const RoomCard = memo(RoomCardInner);
RoomCard.displayName = "RoomCard";

export default RoomCard;

