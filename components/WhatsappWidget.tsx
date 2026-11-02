'use client'

import Image from "next/image"

export default function WhatsappWidget() {
    const phoneNumber = '918888285951'
    const message = encodeURIComponent("Hi Vaibhav, I checked your portfolio and would like to connect with you regarding an opportunity.")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    return (
        <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener norefrrer"
            aria-label="Chat on Whatsapp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:scale-110 group"
        >
            <Image
                src="/whatsapp.svg"
                width={28}
                height={28}
                alt="Whatsapp Image"
                className="w-8 h-8 object-contain brightness-0 invert"
            />
            <span
                    className="absolute right-16 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-medium rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700"
                >
                    Chat On WhatsApp
                </span>
        </a>
    )
}