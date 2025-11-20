export interface BookingListItem {
    _id: string;
    name: string;
    email: string;
    phone: string;
    checkInDate: Date;
    checkOutDate: Date;
    adults: number;
    children: number;
    accommodation: boolean;
    adventureActivities: boolean;
    wellnessSpa: boolean;
    status: "booked" | "checkedIn" | "checkedOut" | "cancelled";
    packageType: {
        packageId: string;
        title: string;
    };
    specialRequest?: string | null | undefined;
}