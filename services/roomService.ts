import { Room } from "@/types/room";

const mockRooms: Room[] = [
  {
    id: "room-1",
    name: "Sunrise Suite",
    description:
      "A bright and spacious suite with floor-to-ceiling windows, perfect for morning meetings and creative brainstorming sessions.",
    price: 150,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=1000&fit=crop",
    capacity: 8,
    location: "Whistler, British Columbia, Canada",
    rating: 4.9,
    tag: "Nature retreat",
  },
  {
    id: "room-2",
    name: "Ocean View Lounge",
    description:
      "A relaxing lounge area with panoramic views, ideal for casual discussions and small team gatherings.",
    price: 200,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=1000&fit=crop",
    capacity: 12,
    location: "Austin, Texas, US",
    rating: 4.85,
    tag: "Culinary adventure",
  },
  {
    id: "room-3",
    name: "Executive Boardroom",
    description:
      "A premium boardroom with state-of-the-art AV equipment, designed for high-level executive meetings.",
    price: 350,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=1000&fit=crop",
    capacity: 20,
    location: "Sedona, Arizona, US",
    rating: 4.75,
    tag: "Wellness escape",
  },
  {
    id: "room-4",
    name: "Creative Hub",
    description:
      "An inspiring open-plan space with whiteboards and modular furniture for workshops and design sprints.",
    price: 120,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=1000&fit=crop",
    capacity: 6,
    location: "Santa Fe, New Mexico, US",
    rating: 4.9,
    tag: "Artistic retreat",
  },
  {
    id: "room-5",
    name: "Garden Pavilion",
    description:
      "A serene outdoor meeting space surrounded by greenery, perfect for informal gatherings and team-building.",
    price: 180,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=1000&fit=crop",
    capacity: 15,
    location: "Cortez, Colorado, US",
    rating: 4.98,
    tag: "Guest favorite",
  },
  {
    id: "room-6",
    name: "Tech Lab",
    description:
      "A high-tech room equipped with multiple screens and fast connectivity for technical demos and hackathons.",
    price: 250,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=1000&fit=crop",
    capacity: 10,
    location: "Portland, Oregon, US",
    rating: 4.65,
    tag: "Urban getaway",
  },
];

/**
 * Get all available rooms.
 */
export function getRooms(): Room[] {
  return mockRooms;
}

/**
 * Get a single room by its ID.
 */
export function getRoomById(id: string): Room | undefined {
  return mockRooms.find((room) => room.id === id);
}
