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

export async function getAllBookings({ search, status }: {
    search?: string;
    status?: string;
}): Promise<{ data: BookingListItem[]; count: number } | null> {

    const query = new URLSearchParams();
    if (search) query.set("search", search);
    if (status) query.set("status", status);

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings?${query.toString()}`,
            { cache: "no-store" }
        );

        if (!res.ok) return { data: [], count: 0 };

        return res.json();
    } catch (err) {
        console.error("Error fetching bookings:", err);
        return null;
    }
}


export async function getAllPackages(): Promise<{ data: PackageItem[]; count: number } | null> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/packages`,
            {
                next: { revalidate: 60 },
            }
        );

        if (!res.ok) return { data: [], count: 0 };
        return res.json();
    } catch (err) {
        console.error("Error fetching packages:", err);
        return null;
    }
}

export async function getAllServices(): Promise<{ data: ServiceItem[]; count: number } | null> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/services`,
            {
                next: { revalidate: 60 },
            }
        );

        if (!res.ok) return { data: [], count: 0 };
        return res.json();
    } catch (err) {
        console.error("Error fetching services:", err);
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