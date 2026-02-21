export default function FeaturedProducts() {
    return (
        <section className="bg-background-light py-16 dark:bg-background-dark">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-10 flex flex-col items-end justify-between gap-4 md:flex-row">
                    <div>
                        <h2 className="mb-2 text-3xl font-bold text-text-main dark:text-white">
                            Trending from the Himalayas
                        </h2>
                        <p className="text-text-muted dark:text-gray-400">
                            Handpicked items that are popular this week.
                        </p>
                    </div>
                    <a
                        className="group flex items-center gap-1 font-bold text-primary hover:text-primary-light"
                        href="#"
                    >
                        View All Trends
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                            arrow_forward
                        </span>
                    </a>
                </div>
                {/* Products Grid */}
                <div className="grid grid-cols-1 gap-6 mb-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Product Card 1 */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:bg-surface-dark">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <span className="absolute top-3 left-3 z-10 rounded-full bg-secondary px-2 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                                recent
                            </span>
                            <button className="absolute top-3 right-3 z-10 rounded-full bg-white/80 p-1.5 text-text-muted opacity-0 transition-colors group-hover:opacity-100 hover:bg-white hover:text-red-500">
                                <span className="material-symbols-outlined text-lg">
                                    favorite
                                </span>
                            </button>
                            <img
                                alt="Tibetan Singing Bowl on silk cushion"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXayjjSch2dOOjSAQUP75h8txBIgJ1fn3Qhm4vSZ0sBE3clcWxjlVn2zNq_a2RiqfiX-8TbYocGdQHIAimEfhFeGdg3b4ih_7lehPuL6hqObEKZ9eC5YST5c9CxPHMU-71_ZfxF6ei-XYmhUB-1fqZJ8DJVWTzZa1cfCd-JcYaOFHEpUE0b0D-y6LsyBR1_54yh09rjCuQNbsXxDgTdEo8qRCL5aApbX--4Lo_OdaG4km8nc5_jsL2AqdzFPHqHqjLszhJHRFTTg"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-text-muted dark:bg-white/10">
                                    <span className="material-symbols-outlined mr-1 text-[12px]">
                                        location_on
                                    </span>
                                    Lalitpur
                                </span>
                            </div>
                            <h3 className="mb-1 line-clamp-1 text-lg font-bold text-text-main transition-colors group-hover:text-primary dark:text-white">
                                Full Moon Singing Bowl
                            </h3>
                            <p className="mb-3 line-clamp-2 text-xs text-text-muted">
                                Hand-hammered 7 metal alloy bowl perfect for
                                meditation.
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-lg font-bold text-primary">
                                    $85.00
                                </span>
                                <button className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-lg">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Product Card 2 */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:bg-surface-dark">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                                alt="Traditional Thangka Painting"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOu5skODb7y043AMz1J4B8X4Aa1CvyLgyqVKC6l9esehT5Lu7_m_BbyNOauDqi5PhO4jcJXLFvdWQz26kJgLN7ZskZ9b29uwIoiArZ6JJDTkHsbFsgp7xz-fWO03OI0QSINsbyF7F4SCZGzyGLaBMWrqqpingEBqxUvD9zW2wc09TB2YUHYzzWx6b6uCL3sWP_CEvtCCJUHI8-tBtnjNjJ1zAL_p9QVm7vfOdTog-3i2ITB9u6gxaLiGgNBW3FwFQMHzIrqNyrWg"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-text-muted dark:bg-white/10">
                                    <span className="material-symbols-outlined mr-1 text-[12px]">
                                        location_on
                                    </span>
                                    Bhaktapur
                                </span>
                            </div>
                            <h3 className="mb-1 line-clamp-1 text-lg font-bold text-text-main transition-colors group-hover:text-primary dark:text-white">
                                Green Tara Thangka
                            </h3>
                            <p className="mb-3 line-clamp-2 text-xs text-text-muted">
                                Master quality hand painted with 24k gold leaf
                                details.
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-lg font-bold text-primary">
                                    $350.00
                                </span>
                                <button className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-lg">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Product Card 3 */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:bg-surface-dark">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                                alt="Hemp Backpack"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRFeppBm5soTY03RZSSy8LubDmd4ZYPdZX5VVw82h-KSq53ysi3iYUQ5A3EjERhk-lBEziIo7RPRhNts6V1osbgAbzIp9JFd_kVHcHE-krbmoRJ23a9DciReOOdoIukM521WhkVc-awlE45LVZp5-n-74qO-uXVkDlzdidgvpgXtdXVtCElwmzS6TABa9W4_IsQwbYfqoPZbAHg-WH5_qOiJ8TG-3X3Aoy5aWUW-AAx_EHYK_LpxP7f6kOKt2-AvFUL12FFR4nAA"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-text-muted dark:bg-white/10">
                                    <span className="material-symbols-outlined mr-1 text-[12px]">
                                        location_on
                                    </span>
                                    Pokhara
                                </span>
                            </div>
                            <h3 className="mb-1 line-clamp-1 text-lg font-bold text-text-main transition-colors group-hover:text-primary dark:text-white">
                                Organic Hemp Backpack
                            </h3>
                            <p className="mb-3 line-clamp-2 text-xs text-text-muted">
                                Eco-friendly, durable, and stylish for everyday
                                use.
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-lg font-bold text-primary">
                                    $45.00
                                </span>
                                <button className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-lg">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Product Card 4 */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:bg-surface-dark">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <span className="absolute top-3 left-3 z-10 rounded-full bg-primary px-2 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                                -15% OFF
                            </span>
                            <img
                                alt="Pashmina Shawl"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVXGlLnhXbMMdFq-_zzuuEtLCkoIELFF49BnmBWRGHejBJIPHTNJ_H1Sb2R6p2ZZdl0OMRRVZ3iax1F9gJaXe4Hmy81GPXV9daAonmbPrHz95q2dXcw2u2T0svt-bLamWCkw_RX-IJwHH9c-UqB5-T7uGo84Z9lAeLsyOKN_HYps9MvTiomNL9paCmXJOZbJ3d5HXcclNu9lL3VsHKr6iUPc7PgZwb4PqhwodG7OWSFNJz58jmWCy8v0Niq70co-jLQ_94l6_ndA"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-text-muted dark:bg-white/10">
                                    <span className="material-symbols-outlined mr-1 text-[12px]">
                                        location_on
                                    </span>
                                    Mustang
                                </span>
                            </div>
                            <h3 className="mb-1 line-clamp-1 text-lg font-bold text-text-main transition-colors group-hover:text-primary dark:text-white">
                                Pure Cashmere Shawl
                            </h3>
                            <p className="mb-3 line-clamp-2 text-xs text-text-muted">
                                Luxuriously soft, hand-loomed in the high
                                Himalayas.
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-primary">
                                        $120.00
                                    </span>
                                    <span className="text-xs text-text-muted line-through">
                                        $140.00
                                    </span>
                                </div>
                                <button className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-lg">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mb-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Product Card 1 */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:bg-surface-dark">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <span className="absolute top-3 left-3 z-10 rounded-full bg-secondary px-2 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                                recent
                            </span>
                            <button className="absolute top-3 right-3 z-10 rounded-full bg-white/80 p-1.5 text-text-muted opacity-0 transition-colors group-hover:opacity-100 hover:bg-white hover:text-red-500">
                                <span className="material-symbols-outlined text-lg">
                                    favorite
                                </span>
                            </button>
                            <img
                                alt="Tibetan Singing Bowl on silk cushion"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXayjjSch2dOOjSAQUP75h8txBIgJ1fn3Qhm4vSZ0sBE3clcWxjlVn2zNq_a2RiqfiX-8TbYocGdQHIAimEfhFeGdg3b4ih_7lehPuL6hqObEKZ9eC5YST5c9CxPHMU-71_ZfxF6ei-XYmhUB-1fqZJ8DJVWTzZa1cfCd-JcYaOFHEpUE0b0D-y6LsyBR1_54yh09rjCuQNbsXxDgTdEo8qRCL5aApbX--4Lo_OdaG4km8nc5_jsL2AqdzFPHqHqjLszhJHRFTTg"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-text-muted dark:bg-white/10">
                                    <span className="material-symbols-outlined mr-1 text-[12px]">
                                        location_on
                                    </span>
                                    Lalitpur
                                </span>
                            </div>
                            <h3 className="mb-1 line-clamp-1 text-lg font-bold text-text-main transition-colors group-hover:text-primary dark:text-white">
                                Full Moon Singing Bowl
                            </h3>
                            <p className="mb-3 line-clamp-2 text-xs text-text-muted">
                                Hand-hammered 7 metal alloy bowl perfect for
                                meditation.
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-lg font-bold text-primary">
                                    $85.00
                                </span>
                                <button className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-lg">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Product Card 2 */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:bg-surface-dark">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                                alt="Traditional Thangka Painting"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOu5skODb7y043AMz1J4B8X4Aa1CvyLgyqVKC6l9esehT5Lu7_m_BbyNOauDqi5PhO4jcJXLFvdWQz26kJgLN7ZskZ9b29uwIoiArZ6JJDTkHsbFsgp7xz-fWO03OI0QSINsbyF7F4SCZGzyGLaBMWrqqpingEBqxUvD9zW2wc09TB2YUHYzzWx6b6uCL3sWP_CEvtCCJUHI8-tBtnjNjJ1zAL_p9QVm7vfOdTog-3i2ITB9u6gxaLiGgNBW3FwFQMHzIrqNyrWg"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-text-muted dark:bg-white/10">
                                    <span className="material-symbols-outlined mr-1 text-[12px]">
                                        location_on
                                    </span>
                                    Bhaktapur
                                </span>
                            </div>
                            <h3 className="mb-1 line-clamp-1 text-lg font-bold text-text-main transition-colors group-hover:text-primary dark:text-white">
                                Green Tara Thangka
                            </h3>
                            <p className="mb-3 line-clamp-2 text-xs text-text-muted">
                                Master quality hand painted with 24k gold leaf
                                details.
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-lg font-bold text-primary">
                                    $350.00
                                </span>
                                <button className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-lg">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Product Card 3 */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:bg-surface-dark">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                                alt="Hemp Backpack"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRFeppBm5soTY03RZSSy8LubDmd4ZYPdZX5VVw82h-KSq53ysi3iYUQ5A3EjERhk-lBEziIo7RPRhNts6V1osbgAbzIp9JFd_kVHcHE-krbmoRJ23a9DciReOOdoIukM521WhkVc-awlE45LVZp5-n-74qO-uXVkDlzdidgvpgXtdXVtCElwmzS6TABa9W4_IsQwbYfqoPZbAHg-WH5_qOiJ8TG-3X3Aoy5aWUW-AAx_EHYK_LpxP7f6kOKt2-AvFUL12FFR4nAA"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-text-muted dark:bg-white/10">
                                    <span className="material-symbols-outlined mr-1 text-[12px]">
                                        location_on
                                    </span>
                                    Pokhara
                                </span>
                            </div>
                            <h3 className="mb-1 line-clamp-1 text-lg font-bold text-text-main transition-colors group-hover:text-primary dark:text-white">
                                Organic Hemp Backpack
                            </h3>
                            <p className="mb-3 line-clamp-2 text-xs text-text-muted">
                                Eco-friendly, durable, and stylish for everyday
                                use.
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-lg font-bold text-primary">
                                    $45.00
                                </span>
                                <button className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-lg">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Product Card 4 */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:bg-surface-dark">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <span className="absolute top-3 left-3 z-10 rounded-full bg-primary px-2 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                                -15% OFF
                            </span>
                            <img
                                alt="Pashmina Shawl"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVXGlLnhXbMMdFq-_zzuuEtLCkoIELFF49BnmBWRGHejBJIPHTNJ_H1Sb2R6p2ZZdl0OMRRVZ3iax1F9gJaXe4Hmy81GPXV9daAonmbPrHz95q2dXcw2u2T0svt-bLamWCkw_RX-IJwHH9c-UqB5-T7uGo84Z9lAeLsyOKN_HYps9MvTiomNL9paCmXJOZbJ3d5HXcclNu9lL3VsHKr6iUPc7PgZwb4PqhwodG7OWSFNJz58jmWCy8v0Niq70co-jLQ_94l6_ndA"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-text-muted dark:bg-white/10">
                                    <span className="material-symbols-outlined mr-1 text-[12px]">
                                        location_on
                                    </span>
                                    Mustang
                                </span>
                            </div>
                            <h3 className="mb-1 line-clamp-1 text-lg font-bold text-text-main transition-colors group-hover:text-primary dark:text-white">
                                Pure Cashmere Shawl
                            </h3>
                            <p className="mb-3 line-clamp-2 text-xs text-text-muted">
                                Luxuriously soft, hand-loomed in the high
                                Himalayas.
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-primary">
                                        $120.00
                                    </span>
                                    <span className="text-xs text-text-muted line-through">
                                        $140.00
                                    </span>
                                </div>
                                <button className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-lg">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mb-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Product Card 1 */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:bg-surface-dark">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <span className="absolute top-3 left-3 z-10 rounded-full bg-secondary px-2 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                                recent
                            </span>
                            <button className="absolute top-3 right-3 z-10 rounded-full bg-white/80 p-1.5 text-text-muted opacity-0 transition-colors group-hover:opacity-100 hover:bg-white hover:text-red-500">
                                <span className="material-symbols-outlined text-lg">
                                    favorite
                                </span>
                            </button>
                            <img
                                alt="Tibetan Singing Bowl on silk cushion"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXayjjSch2dOOjSAQUP75h8txBIgJ1fn3Qhm4vSZ0sBE3clcWxjlVn2zNq_a2RiqfiX-8TbYocGdQHIAimEfhFeGdg3b4ih_7lehPuL6hqObEKZ9eC5YST5c9CxPHMU-71_ZfxF6ei-XYmhUB-1fqZJ8DJVWTzZa1cfCd-JcYaOFHEpUE0b0D-y6LsyBR1_54yh09rjCuQNbsXxDgTdEo8qRCL5aApbX--4Lo_OdaG4km8nc5_jsL2AqdzFPHqHqjLszhJHRFTTg"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-text-muted dark:bg-white/10">
                                    <span className="material-symbols-outlined mr-1 text-[12px]">
                                        location_on
                                    </span>
                                    Lalitpur
                                </span>
                            </div>
                            <h3 className="mb-1 line-clamp-1 text-lg font-bold text-text-main transition-colors group-hover:text-primary dark:text-white">
                                Full Moon Singing Bowl
                            </h3>
                            <p className="mb-3 line-clamp-2 text-xs text-text-muted">
                                Hand-hammered 7 metal alloy bowl perfect for
                                meditation.
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-lg font-bold text-primary">
                                    $85.00
                                </span>
                                <button className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-lg">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Product Card 2 */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:bg-surface-dark">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                                alt="Traditional Thangka Painting"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOu5skODb7y043AMz1J4B8X4Aa1CvyLgyqVKC6l9esehT5Lu7_m_BbyNOauDqi5PhO4jcJXLFvdWQz26kJgLN7ZskZ9b29uwIoiArZ6JJDTkHsbFsgp7xz-fWO03OI0QSINsbyF7F4SCZGzyGLaBMWrqqpingEBqxUvD9zW2wc09TB2YUHYzzWx6b6uCL3sWP_CEvtCCJUHI8-tBtnjNjJ1zAL_p9QVm7vfOdTog-3i2ITB9u6gxaLiGgNBW3FwFQMHzIrqNyrWg"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-text-muted dark:bg-white/10">
                                    <span className="material-symbols-outlined mr-1 text-[12px]">
                                        location_on
                                    </span>
                                    Bhaktapur
                                </span>
                            </div>
                            <h3 className="mb-1 line-clamp-1 text-lg font-bold text-text-main transition-colors group-hover:text-primary dark:text-white">
                                Green Tara Thangka
                            </h3>
                            <p className="mb-3 line-clamp-2 text-xs text-text-muted">
                                Master quality hand painted with 24k gold leaf
                                details.
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-lg font-bold text-primary">
                                    $350.00
                                </span>
                                <button className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-lg">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Product Card 3 */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:bg-surface-dark">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                                alt="Hemp Backpack"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRFeppBm5soTY03RZSSy8LubDmd4ZYPdZX5VVw82h-KSq53ysi3iYUQ5A3EjERhk-lBEziIo7RPRhNts6V1osbgAbzIp9JFd_kVHcHE-krbmoRJ23a9DciReOOdoIukM521WhkVc-awlE45LVZp5-n-74qO-uXVkDlzdidgvpgXtdXVtCElwmzS6TABa9W4_IsQwbYfqoPZbAHg-WH5_qOiJ8TG-3X3Aoy5aWUW-AAx_EHYK_LpxP7f6kOKt2-AvFUL12FFR4nAA"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-text-muted dark:bg-white/10">
                                    <span className="material-symbols-outlined mr-1 text-[12px]">
                                        location_on
                                    </span>
                                    Pokhara
                                </span>
                            </div>
                            <h3 className="mb-1 line-clamp-1 text-lg font-bold text-text-main transition-colors group-hover:text-primary dark:text-white">
                                Organic Hemp Backpack
                            </h3>
                            <p className="mb-3 line-clamp-2 text-xs text-text-muted">
                                Eco-friendly, durable, and stylish for everyday
                                use.
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-lg font-bold text-primary">
                                    $45.00
                                </span>
                                <button className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-lg">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Product Card 4 */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:bg-surface-dark">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <span className="absolute top-3 left-3 z-10 rounded-full bg-primary px-2 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                                -15% OFF
                            </span>
                            <img
                                alt="Pashmina Shawl"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVXGlLnhXbMMdFq-_zzuuEtLCkoIELFF49BnmBWRGHejBJIPHTNJ_H1Sb2R6p2ZZdl0OMRRVZ3iax1F9gJaXe4Hmy81GPXV9daAonmbPrHz95q2dXcw2u2T0svt-bLamWCkw_RX-IJwHH9c-UqB5-T7uGo84Z9lAeLsyOKN_HYps9MvTiomNL9paCmXJOZbJ3d5HXcclNu9lL3VsHKr6iUPc7PgZwb4PqhwodG7OWSFNJz58jmWCy8v0Niq70co-jLQ_94l6_ndA"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-text-muted dark:bg-white/10">
                                    <span className="material-symbols-outlined mr-1 text-[12px]">
                                        location_on
                                    </span>
                                    Mustang
                                </span>
                            </div>
                            <h3 className="mb-1 line-clamp-1 text-lg font-bold text-text-main transition-colors group-hover:text-primary dark:text-white">
                                Pure Cashmere Shawl
                            </h3>
                            <p className="mb-3 line-clamp-2 text-xs text-text-muted">
                                Luxuriously soft, hand-loomed in the high
                                Himalayas.
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-primary">
                                        $120.00
                                    </span>
                                    <span className="text-xs text-text-muted line-through">
                                        $140.00
                                    </span>
                                </div>
                                <button className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-lg">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
}
