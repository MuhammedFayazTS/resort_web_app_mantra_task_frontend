import Image from 'next/image'

const services = [
  {
    title: "Accommodation",
    image: '/stay.svg',
    bg:'bg-gray-100',
    hover: 'group-hover:bg-gray-200',
    description: "Comfortable rooms with scenic views."
  },
  {
    title: "Adventure Activities",
    bg:'bg-amber-100',
    image: '/adventure.svg',
    hover: 'group-hover:bg-amber-200',
    description: "Exciting outdoor experiences for all ages."
  },
  {
    title: "Wellness & Spa",
    image: '/spa.svg',
    bg:'bg-sky-50',
    hover: 'group-hover:bg-sky-100',
    description: "Relaxing therapies and wellness programs."
  }
]

const ServicesSection = () => {
  return (
    <section className="relative z-10 min-h-screen flex flex-col bg-gray-100 text-gray-900 py-16 px-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-10 sm:mb-auto">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl text-center  mb-auto">
        {services.map((service, index) => {
          const image = service.image
          return (
            <div key={index} className="flex flex-col justify-center items-center rounded-xl p-6 bg-white shadow-sm  aspect-square group">
              <div className={`w-2/3 h-2/3 relative p-5 mx-auto mb-4 flex justify-center items-center rounded-full ${service.bg} ${service.hover} transition-colors ease-in-out duration-400`}>
                <Image
                  fill
                  src={image}
                  alt={service.title}
                  className='group-hover:scale-105 transition-transform ease-in-out duration-400'
                />
              </div>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesSection
