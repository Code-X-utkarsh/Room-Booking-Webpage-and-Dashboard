import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-white pt-12 sm:pt-16 lg:pt-20 pb-8 border-t border-gray-100 mt-8">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">

        {/* Massive Display Title */}
        <div className="relative mb-16 flex w-full items-center justify-center">
          {/* The overlapping images */}
          <div className="hidden lg:block absolute left-20 z-20 h-40 w-32 -rotate-6 overflow-hidden rounded-2xl border-4 border-white shadow-xl">
            <Image src="/Whisk_bed.jpeg" alt="Footer overlay" fill className="object-cover" />
          </div>

          <h1 className="w-full text-center text-[11vw] font-bold leading-none tracking-tighter text-gray-900 lg:text-[11.5vw] whitespace-nowrap">
            AETHER- CONTACT
          </h1>

          <div className="hidden lg:block absolute right-20 z-20 h-48 w-36 rotate-6 overflow-hidden rounded-2xl border-4 border-white shadow-xl translate-y-8">
            <Image src="/Whisk_75.jpeg" alt="Footer overlay 2" fill className="object-cover" />
          </div>
        </div>

        {/* Top Minimalist Links & Info */}
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-8 sm:gap-12">
            <a href="#about" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">About us</a>
            <a href="#faq" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">FAQ</a>
            <a href="#contact" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">Contact us</a>
          </div>

          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-gray-500 mt-2">
            With our dedication and expertise in hospitality, you draw in into a fully transparent and unforgettable amazing journey that will be memories and our promise.
          </p>

          <div className="flex justify-center gap-5 mt-4">
            <button aria-label="LinkedIn" className="text-gray-300 transition-colors hover:text-gray-900">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </button>
            <button aria-label="Twitter" className="text-gray-300 transition-colors hover:text-gray-900">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </button>
            <button aria-label="Instagram" className="text-gray-300 transition-colors hover:text-gray-900">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:mt-24 sm:flex-row px-4 lg:px-12 text-center sm:text-left">
          <p className="text-xs font-semibold text-gray-500">
            Helpline: +1 234 567 890
          </p>
          <p className="text-xs font-semibold text-gray-500">
            © 2023 Aether Hotels. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
