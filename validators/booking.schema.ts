import z from "zod";

export const bookingFormSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.email("Invalid email address"),
    phone: z.string().min(7, "Phone number is too short"),
    address: z.string().min(10, "Address is too short"),

    checkInDate: z.date({
        error: "Check In Date is required.",
    }),
    checkOutDate: z.date({
        error: "Check Out Date is required.",
    }),

    adults: z.number().min(1, "At least 1 adult required"),
    children: z.number().min(0),

    packageId: z.string().min(1, "Select a room type"),
    serviceIds: z.array(z.string()).optional(),

    specialRequest: z.string().optional()
})

export const bookingValidationSchemaForCheckIn = z.object({
    actualCheckInDate: z.date({
        error: "Actual Check In Date is required.",
    }),
});

export const bookingValidationSchemaForCheckedOut = z.object({
    actualCheckOutDate: z.date({
        error: "Actual Checked Out Date is required.",
    }),
});