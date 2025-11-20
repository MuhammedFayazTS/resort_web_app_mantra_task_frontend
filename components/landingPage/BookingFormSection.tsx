import { getAllPackages } from '@/lib/apis';
import BookingForm from '../BookingForm'

const BookingFormSection = async () => {
    const packageDetails = await getAllPackages();
    const packages = packageDetails?.data ?? [];
    return (
        <section id='booking-form-section' className="relative min-h-screen z-20 w-full  flex items-center justify-center bg-gray-50 py-12 px-6">
            <BookingForm packages={packages} />
        </section>
    )
}

export default BookingFormSection
