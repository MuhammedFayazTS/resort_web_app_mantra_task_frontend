import Link from 'next/link'

const Hero = () => {
    return (
        <section className="relative z-10 h-screen flex flex-col items-center justify-center min-h-screen text-center px-6">
            <h1 className="text-5xl font-bold mb-4">Breezo Resort</h1>
            <p className="text-xl max-w-xl mb-6">
                Escape to nature. Relax. Recharge. Discover paradise.
            </p>

            <Link href="#booking-form-section" className="bg-amber-600 hover:bg-amber-700 rounded-lg text-lg px-6 py-2">
                Book Now
            </Link>
        </section>
    )
}

export default Hero
