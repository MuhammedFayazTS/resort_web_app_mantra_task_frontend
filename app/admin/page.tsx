import { getAllBookings } from "@/lib/apis";
import BookingTables from "@/components/tables/BookingTables";
import SearchInput from "@/components/SearchInput";

async function AdminPage(props: {
    searchParams?: Promise<{
        search?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const search = searchParams?.search || '';
    // const currentPage = Number(searchParams?.page) || 1;
    const bookingData = await getAllBookings({search});
    const bookings = bookingData?.data || [];
    const count = bookingData?.count;

    return (
        <div className="p-10 min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold mb-6">Booking List</h1>
            <SearchInput count={count} />
            <BookingTables bookings={bookings} />
        </div>
    );
};

export default AdminPage;
