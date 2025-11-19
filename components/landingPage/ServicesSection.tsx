import { BedDouble, Mountain, SunMedium } from 'lucide-react'

const services = [
  {
    icon: BedDouble,
    title: "Accommodation",
    description: "Comfortable rooms with scenic views."
  },
  {
    icon: Mountain,
    title: "Adventure Activities",
    description: "Exciting outdoor experiences for all ages."
  },
  {
    icon: SunMedium,
    title: "Wellness & Spa",
    description: "Relaxing therapies and wellness programs."
  }
]

const ServicesSection = () => {
  return (
    <section className="relative z-10 min-h-screen flex flex-col bg-white text-gray-900 py-16 px-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-auto">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl text-center  mb-auto">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div key={index} className="flex flex-col justify-center items-center rounded-xl p-6 bg-gray-50 shadow-sm transition aspect-square group">
              <div className='w-25 h-25 p-5 mx-auto mb-4 flex justify-center items-center rounded-full bg-amber-200 group-hover:bg-amber-100'>
                <Icon className="w-full h-full group-hover:scale-125 group-hover:text-amber-500transition-transform duration-500 ease-in-out" />
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
