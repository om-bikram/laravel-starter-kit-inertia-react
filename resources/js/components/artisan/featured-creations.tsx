interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    rating: number;
    ratingCount: number;
    image: string;
    imageAlt: string;
    badge?: string;
}

const featuredProducts: Product[] = [
    {
        id: 1,
        title: 'Shakyamuni Buddha (8 inch)',
        category: 'Statues',
        price: 350.0,
        rating: 5.0,
        ratingCount: 24,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIi9kVONg2X5wC5impHSRx6GxInPJjDlYQ8gOIG1r4aRFJQl2qnRLf5j_FPc9WSGgjBZeYwDuzJDUCT5NSbAuSyDCa_zQv7vg3tMl5Gl7CvCNSxmftkWhlyXf6CcD0ioZdABt6EiTGnSNUzOvBsOZNeNqMRpL4-daLjlxAYQmI_tAOshvrF7chdSWoYI9MtZEvlq18zC8XDQxZztFmeQzOt7Z8Z3lpVP_Yfl7X9k4m9CE0_MtILGlzzsQSiYf-28sOVBd0cT3vig',
        imageAlt: 'Golden Buddha statue sitting in meditation',
        badge: 'Only 1 left',
    },
    {
        id: 2,
        title: 'Hand-beaten Singing Bowl',
        category: 'Ritual Items',
        price: 85.0,
        rating: 4.8,
        ratingCount: 56,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4Vhd9hOHm7W3IZw-THrYh-3KLDzcK1c6UO2OxSfbGwFn3Uqtf3QaIVMZSMrcKNlA6b98OluFkXAM2lvtTEP-xkxs4qjK3493XnVtgd_tyk1WcIh23rb-lArXcodHZkbiulBkGw3ZuenPEsuvYOPr9W4JRkHP4ScECo0iiYIR1cl6S8BbunmR710sJtotSXt5m9HHdUYy5ec-vlJ9pqWRIjeR0btVKCPCSBI9RvSmaPnBnBga1wjL6IGbdDjHTAFkCme2uCYv6eQ',
        imageAlt: 'Traditional Tibetan singing bowl with wooden mallet',
    },
    {
        id: 3,
        title: 'Engraved Copper Pitcher',
        category: 'Home Decor',
        price: 120.0,
        rating: 4.9,
        ratingCount: 12,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkjFQKG1JfbWmSGy_8LT2XJL64OAenf8BIomqDMD7vYAic0gjanqmGZN7ragAYo7LRfG-9VYpg5OA7ofM6DkLayQ9OzVDREp90g1AZ_K2LLWC7_kXyIcsvW8uYM-TKRACwZR26M8g6bNuUzdM6LG44pFaS6JulSsbw1XPVBHjN8tfoxixYz0Iqnp6-tyN0IY5p90t8OfHxhdQ6LcONoA2Kgp_2xDivOfnNeqkRikX8kHFO6kVQYV2Ok1KcI3W8g3J5Lab_b2Ovug',
        imageAlt: 'Antique style copper water pitcher with engraving',
    },
    {
        id: 4,
        title: 'Green Tara (6 inch)',
        category: 'Statues',
        price: 210.0,
        rating: 5.0,
        ratingCount: 8,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQZ5JxaWFU1SAVvea_-bQWHRa3uJr_-_ha1a-F_-IWdYM6_K-ErEGCOxFajzuA5zEB7jnwZrKVH8gWJFgv0BGwJ628NHAO8EMRK7RAukAF78eYP31V_wx7ZKrS6EECCU8l3YnNRoMydsRrwAjnfeD3MRm1FmZXv-4hwj2JBQs0XC9sxE7YbIz56uKzQa3BGtIDSCBTgXqdn4qPrCMoDPrauhXwg1v_210QieKaVI1kiXOKtLHG5xCrPfGktlLqcrBkjYHRrtAZ5A',
        imageAlt: 'Small detailed Green Tara statue',
    },
];

export function FeaturedCreations() {
    return (
        <section className="space-y-6 pt-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Featured Creations
                </h2>
                {/* Filter Bar */}
                <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2 md:pb-0">
                    <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium whitespace-nowrap text-white">
                        All Products
                    </button>
                    <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium whitespace-nowrap text-slate-700 transition hover:border-primary dark:border-gray-700 dark:bg-[#1e1e1e] dark:text-slate-300">
                        Statues
                    </button>
                    <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium whitespace-nowrap text-slate-700 transition hover:border-primary dark:border-gray-700 dark:bg-[#1e1e1e] dark:text-slate-300">
                        Ritual Items
                    </button>
                    <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium whitespace-nowrap text-slate-700 transition hover:border-primary dark:border-gray-700 dark:bg-[#1e1e1e] dark:text-slate-300">
                        Home Decor
                    </button>
                    <div className="ml-auto hidden items-center gap-2 border-l border-gray-200 pl-4 md:flex dark:border-gray-700">
                        <span className="text-sm text-slate-500">Sort by:</span>
                        <select className="cursor-pointer bg-transparent text-sm font-medium text-slate-900 focus:outline-none dark:text-white">
                            <option>Popularity</option>
                            <option>Price: Low to High</option>
                            <option>Newest</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-[#1e1e1e]"
                    >
                        <div className="relative aspect-square overflow-hidden bg-gray-100">
                            <img
                                alt={product.imageAlt}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                data-alt={product.imageAlt}
                                src={product.image}
                            />
                            <button className="absolute top-3 right-3 rounded-full bg-white/80 p-2 text-slate-600 opacity-0 transition group-hover:opacity-100 hover:bg-white hover:text-primary dark:bg-black/60 dark:text-white">
                                <span className="material-symbols-outlined text-[20px]">
                                    favorite
                                </span>
                            </button>
                            {product.badge && (
                                <div className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm">
                                    {product.badge}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-1 text-xs text-slate-500">
                                {product.category}
                            </div>
                            <h3 className="mb-1 text-lg leading-tight font-bold text-slate-900 transition group-hover:text-primary dark:text-white">
                                {product.title}
                            </h3>
                            <div className="mb-3 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px] text-yellow-500">
                                    star
                                </span>
                                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                    {product.rating.toFixed(1)} (
                                    {product.ratingCount})
                                </span>
                            </div>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-xl font-bold text-primary">
                                    ${product.price.toFixed(2)}
                                </span>
                                <button className="rounded-full bg-gray-100 p-2 text-primary transition hover:bg-primary hover:text-white dark:bg-gray-800">
                                    <span className="material-symbols-outlined text-[20px]">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center pt-8">
                <button className="rounded-lg border border-slate-300 px-8 py-3 font-semibold text-slate-600 transition hover:bg-gray-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-gray-800">
                    View All Products (86)
                </button>
            </div>
        </section>
    );
}
