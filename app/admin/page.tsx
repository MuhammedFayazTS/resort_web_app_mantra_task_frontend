import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getAllBookings } from "@/lib/apis";

async function AdminPage() {
    const bookingData = await getAllBookings();
    const bookings = bookingData?.data || [];
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-6">Booking List</h1>

            <div className="overflow-x-auto border rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Package</TableHead>
                            <TableHead>Check-In</TableHead>
                            <TableHead>Check-Out</TableHead>
                            <TableHead>Adults</TableHead>
                            <TableHead>Children</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {bookings.map((b) => (
                            <TableRow key={b._id}>
                                <TableCell>{b.name}</TableCell>
                                <TableCell>{b.packageType.title ?? "N/A"}</TableCell>
                                <TableCell>{b.checkInDate.toString()}</TableCell>
                                <TableCell>{b.checkOutDate.toString()}</TableCell>
                                <TableCell>{b.adults}</TableCell>
                                <TableCell>{b.children}</TableCell>
                                <TableCell>{b.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AdminPage;
