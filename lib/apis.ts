import { BookingListItem } from '@/types/booking.interface';
import { PackageItem } from '@/types/package.interface';
import { bookingFormSchema } from '@/validators/booking.schema';
import axios from 'axios';
import z from 'zod';

export const createBooking = async (bookingData: z.infer<typeof bookingFormSchema>) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`, bookingData);
    return response;
}

export const getAllBookings = async (): Promise<{ data: BookingListItem[]; count: number } | null> => {
    try {
        const response = await axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`);
        if (!response.data) {
            return {
                data: [],
                count: 0
            }
        }
        return response.data;
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return null;
    }
}

export const getAllPackages = async (): Promise<{ data: PackageItem[]; count: number } | null> => {
    try {
        const response = await axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/packages`);
        if (!response.data) {
            return {
                data: [],
                count: 0
            }
        }
        return response.data;
    } catch (error) {
        console.error("Error fetching packages:", error);
        return null;
    }
}