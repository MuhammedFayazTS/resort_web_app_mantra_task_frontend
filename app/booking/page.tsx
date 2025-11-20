import BookingForm from "@/components/BookingForm"
import Image from "next/image"

async function BookingPage() {
    return (
        <main className="min-h-screen flex flex-col lg:flex-row bg-background">

            <section className="relative w-full lg:w-1/2 h-64 lg:h-screen">
                <Image
                    src="/landing_page_bg.webp"
                    alt="Background Image"
                    fill
                    priority
                    className="object-cover z-0"
                />

                <div className="absolute inset-0 bg-black/40 lg:bg-black/20"></div>

                <div className="absolute p-8 md:p-16 inset-0 flex items-end justify-start">
                    <h1 className="text-3xl font-bold text-white drop-shadow-md">
                        Book Your Stay
                    </h1>
                </div>
            </section>

            <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-6">
                <div className="w-full max-w-lg">
                    <BookingForm />
                </div>
            </div>

        </main>
    )
}

export default BookingPage
