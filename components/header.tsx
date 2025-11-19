import { Instagram } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-20 ::select:bg-blue-600 ::selection:bg-blue-600 ::selection:text-white">
            <nav className="flex items-center justify-between px-8 py-6">
                <h2 className="text-3xl font-bold">
                    <Link href="/">
                    Breezo
                    </Link>
                    </h2>

                <div className="flex items-center gap-6 text-gray-200">
                    <a href="#" aria-label="Instagram" className="hover:text-white">
                        <Instagram />
                    </a>

                    <a href="#" aria-label="Facebook" className="hover:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" />
                        </svg>
                    </a>

                    <a href="#" aria-label="Twitter" className="hover:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.48v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header