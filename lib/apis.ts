import { bookingFormSchema } from '@/validators/booking.schema';
import axios from 'axios';
import z from 'zod';

export const createBooking = async (bookingData: z.infer<typeof bookingFormSchema>) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`,bookingData);
    return response;
}

export const getAllBookings = async () => {
    const response = await axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`);
    return response;
}