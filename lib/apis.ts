import { BookingListItem } from '@/types/booking.interface';
import { PackageItem } from '@/types/package.interface';
import { ServiceItem } from '@/types/service.interface';
import { bookingFormSchema, bookingValidationSchemaForCheckedOut, bookingValidationSchemaForCheckIn } from '@/validators/booking.schema';
import axios from 'axios';
import z from 'zod';

export const createBooking = async (bookingData: z.infer<typeof bookingFormSchema>) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`, bookingData);
    return response;
}

export const getAllBookings = async ({ search, status }: {
    search?: string
    status?: string
}): Promise<{ data: BookingListItem[]; count: number } | null> => {
    try {
        const params = {}
        if (search) Object.assign(params, { search })
        if (status) Object.assign(params, { status })
        const response = await axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`,
            {
                params
            });
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

export const getAllServices = async (): Promise<{ data: ServiceItem[]; count: number } | null> => {
    try {
        const response = await axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/services`);
        if (!response.data) {
            return {
                data: [],
                count: 0
            }
        }
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return null;
    }
}

export const addCheckIn = async (bookingId: string, checkedInPayload: z.infer<typeof bookingValidationSchemaForCheckIn>) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings/check-in/${bookingId}`, checkedInPayload);
        return response;
    } catch (error: unknown) {
        console.error(error)
        throw error;
    }
}

export const addCheckOut = async (bookingId: string, checkedOutPayload: z.infer<typeof bookingValidationSchemaForCheckedOut>) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings/check-out/${bookingId}`, checkedOutPayload);
        return response;
    } catch (error: unknown) {
        console.error(error)
        throw error;
    }
}

export const cancelBooking = async (bookingId: string) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings/cancel/${bookingId}`);
        return response;
    } catch (error: unknown) {
        console.error(error)
        throw error;
    }
}