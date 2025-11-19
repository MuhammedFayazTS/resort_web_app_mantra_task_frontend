import React from 'react'

const Footer = () => {
    return (
        <footer className="relative z-10 bg-gray-900 text-center py-10 text-gray-300">

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p className="text-sm">Breezo Resort, Kerala, India</p>
                <p className="text-sm">Phone: +91 0000000000</p>
                <p className="text-sm">Email: support@breezoresort.com</p>
            </div>

            <div className="flex justify-center gap-6 mb-6">
                <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
                <a href="#" aria-label="Facebook" className="hover:text-white">Facebook</a>
                <a href="#" aria-label="Twitter" className="hover:text-white">Twitter</a>
            </div>

            <p className="text-sm text-gray-500">
                ©2025 Breezo Resort. All rights reserved.
            </p>

        </footer>
    )
}

export default Footer
