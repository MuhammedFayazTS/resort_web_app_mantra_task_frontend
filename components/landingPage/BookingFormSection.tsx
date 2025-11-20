import { getAllPackages, getAllServices } from '@/lib/apis';
import BookingForm from '../BookingForm'

const BookingFormSection = async () => {
    const packageDetails = await getAllPackages();
    const packages = packageDetails?.data ?? [];
    const serviceDetails = await getAllServices();
    const services = serviceDetails?.data ?? [];
    return (
        <section id='booking-form-section' className="relative min-h-screen z-20 w-full  flex items-center justify-center bg-gray-50 py-12 px-6">
            <BookingForm packages={packages} services={services} />
        </section>
    )
}

export default BookingFormSection
