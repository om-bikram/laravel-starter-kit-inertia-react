export function ProductInfo() {
    return (
        <div className="flex h-full flex-col lg:col-span-5">
            <div className="sticky top-6">
                <div className="mb-2 flex items-start justify-between">
                    <h1 className="text-3xl leading-tight font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
                        Hand-Carved Wooden Peacock Window
                    </h1>
                    <button className="rounded-full p-2 text-slate-400 transition-colors hover:bg-gray-100 hover:text-primary dark:hover:bg-white/10">
                        <span className="material-symbols-outlined">
                            favorite
                        </span>
                    </button>
                </div>
                <div className="mb-6 flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        <span className="material-symbols-outlined fill-current text-[20px]">
                            star
                        </span>
                        <span className="material-symbols-outlined fill-current text-[20px]">
                            star
                        </span>
                        <span className="material-symbols-outlined fill-current text-[20px]">
                            star
                        </span>
                        <span className="material-symbols-outlined fill-current text-[20px]">
                            star
                        </span>
                        <span className="material-symbols-outlined fill-current text-[20px]">
                            star_half
                        </span>
                    </div>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        4.8 (124 reviews)
                    </span>
                </div>
                <div className="mb-6 flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-primary">
                        $125.00
                    </span>
                    <span className="text-lg text-slate-400 line-through">
                        $160.00
                    </span>
                    <span className="rounded bg-green-100 px-2 py-1 text-xs font-bold text-green-700">
                        In Stock
                    </span>
                </div>
                <p className="mb-8 leading-relaxed text-slate-600 dark:text-slate-300">
                    A miniature replica of the famous peacock windows of
                    Bhaktapur, known as "Mayur Jhyal". Meticulously carved from
                    sustainable Sal wood by master artisans, this piece brings
                    the rich architectural heritage of the Kathmandu Valley into
                    your home.
                </p>
                {/* Selectors */}
                <div className="mb-8 flex flex-col gap-4">
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                            Size
                        </label>
                        <div className="flex gap-3">
                            <button className="rounded-lg border-2 border-primary bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                                Medium (12"x12")
                            </button>
                            <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-primary dark:border-gray-700 dark:text-slate-300">
                                Large (18"x18")
                            </button>
                        </div>
                    </div>
                </div>
                {/* Action Buttons */}
                <div className="mb-10 flex gap-4">
                    <div className="flex items-center rounded-lg border border-gray-200 dark:border-gray-700">
                        <button className="px-3 py-2 text-slate-500 transition-colors hover:text-primary">
                            <span className="material-symbols-outlined text-[20px]">
                                remove
                            </span>
                        </button>
                        <span className="min-w-[20px] px-2 text-center font-semibold text-slate-900 dark:text-white">
                            1
                        </span>
                        <button className="px-3 py-2 text-slate-500 transition-colors hover:text-primary">
                            <span className="material-symbols-outlined text-[20px]">
                                add
                            </span>
                        </button>
                    </div>
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-[#6e0000]">
                        <span className="material-symbols-outlined text-[20px]">
                            shopping_bag
                        </span>
                        Add to Cart
                    </button>
                </div>
                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 border-t border-gray-100 py-6 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full bg-blue-50 p-2 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                            <span className="material-symbols-outlined text-[20px]">
                                verified
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 dark:text-white">
                                Fair Trade
                            </span>
                            <span className="text-xs text-slate-500">
                                Certified Authentic
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="rounded-full bg-green-50 p-2 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                            <span className="material-symbols-outlined text-[20px]">
                                forest
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 dark:text-white">
                                Sustainable
                            </span>
                            <span className="text-xs text-slate-500">
                                Ethically Sourced Wood
                            </span>
                        </div>
                    </div>
                </div>
                {/* Accordion Details */}
                <div className="flex flex-col gap-2">
                    <details className="group border-b border-gray-100 py-3 dark:border-gray-800">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900 dark:text-white">
                            Product Specifications
                            <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">
                                expand_more
                            </span>
                        </summary>
                        <div className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            <p>Material: Sal Wood</p>
                            <p>Weight: 2.5 kg</p>
                            <p>Origin: Bhaktapur, Nepal</p>
                        </div>
                    </details>
                    <details className="group border-b border-gray-100 py-3 dark:border-gray-800">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900 dark:text-white">
                            Care Instructions
                            <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">
                                expand_more
                            </span>
                        </summary>
                        <div className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            Wipe clean with a dry cloth. Avoid direct sunlight
                            and moisture to preserve the wood's natural finish.
                            Apply wood polish once a year.
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
}
