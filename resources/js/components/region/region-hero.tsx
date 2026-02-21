export function RegionHero() {
    return (
        <div className="mb-6">
            <nav className="mb-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <a className="transition-colors hover:text-primary" href="#">
                    Home
                </a>
                <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                </span>
                <a className="transition-colors hover:text-primary" href="#">
                    Regions
                </a>
                <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                </span>
                <span className="font-medium text-primary">
                    Bagmati Province
                </span>
            </nav>
            <div className="relative mb-8 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-[#3a2a2a] dark:bg-[#2a1a1a]">
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 to-transparent"></div>
                {/* Hero Image */}
                <div
                    className="h-48 w-full bg-cover bg-center md:h-64"
                    data-alt="Traditional Nepali temple architecture in Kathmandu valley with intricate wood carvings"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjPRnMp4qOLVFxjwgPTwkEfOWtEAyofucdkw_zg0ARjyBUUEblOeHX82PzvDqYB_FeaSJSwWwNx-3jcmZ7wUad0UwBT6bleDaVHvt7kxFzdNZqEv8rDEb_Ftp3M7WLCi__eWx_SKkJELpi6L2DYQo9F0Gk-k_KeNnBim_NiEHR80Wg8hqNXMuM7urKzsRz9raGReKJadAB17bcojGQfFfIT5w1cu9xUl5ueKZIr7Tu_MFCWjiyxHQMgOt-QxAhAncNGuxJk0E2vQ')",
                    }}
                ></div>
                <div className="absolute bottom-0 left-0 z-20 max-w-2xl p-6 md:p-8">
                    <div className="text-primary-300 mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-white">
                            location_on
                        </span>
                        <span className="text-xs font-bold tracking-wider text-white uppercase">
                            Kathmandu Valley Region
                        </span>
                    </div>
                    <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                        Bagmati Province: The Heart of Heritage
                    </h1>
                    <p className="line-clamp-2 text-sm text-gray-200 md:line-clamp-none md:text-base">
                        Explore authentic handicrafts from Kathmandu, Bhaktapur,
                        and Lalitpur. From intricate wood carvings to delicate
                        pashmina, discover the soul of Nepal in every artifact.
                    </p>
                </div>
            </div>
        </div>
    );
}
