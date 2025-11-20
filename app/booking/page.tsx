import BookingForm from "@/components/BookingForm"

async function BookingPage () {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-background">
            Create a booking.
            <BookingForm  />
        </main>
    )
}

export default BookingPage
