import { BookingListItem } from '@/types/booking.interface';
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { format } from 'date-fns';
import BookingTableActions from './BookingTableActions';

const BookingTables = ({ bookings }: { bookings: BookingListItem[] }) => {
    const statusColumnStyle = {
        booked: "bg-blue-600 text-white",
        checkedIn: "bg-green-600 text-white",
        checkedOut: "bg-amber-600 text-white",
        cancelled: "bg-red-600 text-white",
    }

    return (
        <div className="overflow-x-auto w-full border rounded-md bg-white">
            <Table className="min-w-max text-sm">
                <TableHeader className="bg-gray-300">
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Package</TableHead>
                        <TableHead>Adults</TableHead>
                        <TableHead>Children</TableHead>
                        <TableHead>Check-In</TableHead>
                        <TableHead>Check-Out</TableHead>
                        <TableHead>Actual Check-In</TableHead>
                        <TableHead>Actual Check-Out</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {bookings.map(b => (
                        <TableRow key={b._id}>
                            <TableCell>{b.name}</TableCell>
                            <TableCell>{b.phone}</TableCell>
                            <TableCell>{b.packageType.title ?? "N/A"}</TableCell>
                            <TableCell>{b.adults}</TableCell>
                            <TableCell>{b.children}</TableCell>
                            <TableCell>{format(b.checkInDate, "dd-MM-yyyy")}</TableCell>
                            <TableCell>{format(b.checkOutDate, "dd-MM-yyyy")}</TableCell>
                            <TableCell>{b.actualCheckInDate ? format(b.actualCheckInDate, "dd-MM-yyyy") : "N/A"}</TableCell>
                            <TableCell>{b.actualCheckOutDate ? format(b.actualCheckOutDate, "dd-MM-yyyy") : "N/A"}</TableCell>
                            <TableCell>
                                <Badge className={`${statusColumnStyle[b.status]} cursor-pointer`}>
                                    {b.status}
                                </Badge>
                            </TableCell>
                            <BookingTableActions booking={b} />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default BookingTables;
