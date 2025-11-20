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
    status: 'Pending' | 'Confirmed' | 'Cancelled';
    packageType?: string | null | undefined;
    specialRequest?: string | null | undefined;
}