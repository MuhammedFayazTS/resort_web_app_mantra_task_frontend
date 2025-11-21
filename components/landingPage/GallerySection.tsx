import Image from 'next/image'

const GallerySection = () => {
    return (
        <section className="relative min-h-screen z-10 bg-white text-gray-900 py-16 px-8">
            <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 group">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                        key={num}
                        className="
                            relative w-full h-64 rounded overflow-hidden bg-stone-950 
                        "
                    >
                        <Image
                            src={`/gallery/${num}.webp`}
                            alt={`Gallery Image ${num}`}
                            fill
                            className="object-cover rounded group-hover:opacity-40 hover:!opacity-100
                            transition-opacity duration-500 ease-in-out"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default GallerySection
