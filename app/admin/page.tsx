import { getAllBookings } from "@/lib/apis";
import BookingTables from "@/components/tables/BookingTables";
import SearchInput from "@/components/SearchInput";
import BookingTableFilters from "@/components/tables/BookingTableFilters";

async function AdminPage(props: {
    searchParams?: Promise<{
        search?: string;
        status?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const search = searchParams?.search || "";
    const status = searchParams?.status || "";
    const bookingData = await getAllBookings({ search, status });
    const bookings = bookingData?.data || [];
    const count = bookingData?.count;

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
            <div className="container mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6">
                    Booking List
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full mb-4">
                    <SearchInput count={count} />
                    <BookingTableFilters />
                </div>

                <BookingTables bookings={bookings} />
            </div>
        </div>
    );
}

export default AdminPage;
