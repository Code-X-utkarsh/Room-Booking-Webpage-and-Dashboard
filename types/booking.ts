export type BookingStatus = "confirmed" | "pending" | "cancelled";

export interface Booking {
  id: string;
  roomId: string;
  roomName: string;
  userId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: BookingStatus;
}

export interface AvailabilityResult {
  available: boolean;
  message: string;
}

