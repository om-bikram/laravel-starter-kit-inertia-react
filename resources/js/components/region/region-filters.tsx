export function RegionFilters() {
    return (
        <aside className="w-full flex-shrink-0 space-y-8 lg:w-64">
            {/* Mobile Filter Toggle (Visible only on small screens) */}
            <div className="mb-4 flex items-center justify-between lg:hidden">
                <h3 className="text-lg font-bold">Filters</h3>
                <button className="flex items-center gap-2 font-medium text-primary">
                    <span className="material-symbols-outlined">tune</span>
                    Show Filters
                </button>
            </div>
            <div className="sticky top-24 hidden space-y-8 lg:block">
                {/* Categories */}
                <div>
                    <h3 className="mb-4 flex items-center justify-between font-bold text-slate-900 dark:text-slate-100">
                        Category
                        <span
                            className="material-symbols-outlined cursor-pointer text-sm text-gray-400 hover:text-primary"
                            title="Reset"
                        >
                            restart_alt
                        </span>
                    </h3>
                    <div className="space-y-3">
                        <label className="group flex cursor-pointer items-center gap-3">
                            <input
                                defaultChecked
                                className="rounded border-gray-300 bg-white text-primary focus:ring-primary/20 dark:border-gray-600 dark:bg-[#3a2a2a]"
                                type="checkbox"
                            />
                            <span className="text-sm text-gray-600 transition-colors group-hover:text-primary dark:text-gray-300">
                                Pashmina & Wool
                            </span>
                            <span className="ml-auto text-xs text-gray-400">
                                120
                            </span>
                        </label>
                        <label className="group flex cursor-pointer items-center gap-3">
                            <input
                                className="rounded border-gray-300 bg-white text-primary focus:ring-primary/20 dark:border-gray-600 dark:bg-[#3a2a2a]"
                                type="checkbox"
                            />
                            <span className="text-sm text-gray-600 transition-colors group-hover:text-primary dark:text-gray-300">
                                Woodcraft
                            </span>
                            <span className="ml-auto text-xs text-gray-400">
                                85
                            </span>
                        </label>
                        <label className="group flex cursor-pointer items-center gap-3">
                            <input
                                className="rounded border-gray-300 bg-white text-primary focus:ring-primary/20 dark:border-gray-600 dark:bg-[#3a2a2a]"
                                type="checkbox"
                            />
                            <span className="text-sm text-gray-600 transition-colors group-hover:text-primary dark:text-gray-300">
                                Thangka Paintings
                            </span>
                            <span className="ml-auto text-xs text-gray-400">
                                42
                            </span>
                        </label>
                        <label className="group flex cursor-pointer items-center gap-3">
                            <input
                                className="rounded border-gray-300 bg-white text-primary focus:ring-primary/20 dark:border-gray-600 dark:bg-[#3a2a2a]"
                                type="checkbox"
                            />
                            <span className="text-sm text-gray-600 transition-colors group-hover:text-primary dark:text-gray-300">
                                Metal Statues
                            </span>
                            <span className="ml-auto text-xs text-gray-400">
                                64
                            </span>
                        </label>
                        <label className="group flex cursor-pointer items-center gap-3">
                            <input
                                className="rounded border-gray-300 bg-white text-primary focus:ring-primary/20 dark:border-gray-600 dark:bg-[#3a2a2a]"
                                type="checkbox"
                            />
                            <span className="text-sm text-gray-600 transition-colors group-hover:text-primary dark:text-gray-300">
                                Pottery
                            </span>
                            <span className="ml-auto text-xs text-gray-400">
                                30
                            </span>
                        </label>
                    </div>
                </div>
                {/* Price Range */}
                <div>
                    <h3 className="mb-4 font-bold text-slate-900 dark:text-slate-100">
                        Price Range (NPR)
                    </h3>
                    <div className="px-2">
                        <input
                            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-primary dark:bg-gray-700"
                            max="50000"
                            min="500"
                            type="range"
                        />
                        <div className="mt-3 flex justify-between text-sm text-gray-600 dark:text-gray-300">
                            <div className="rounded border border-gray-200 bg-white px-2 py-1 dark:border-gray-600 dark:bg-[#2a1a1a]">
                                500
                            </div>
                            <div className="rounded border border-gray-200 bg-white px-2 py-1 dark:border-gray-600 dark:bg-[#2a1a1a]">
                                50,000+
                            </div>
                        </div>
                    </div>
                </div>
                {/* Rating */}
                <div>
                    <h3 className="mb-4 font-bold text-slate-900 dark:text-slate-100">
                        Rating
                    </h3>
                    <div className="space-y-2">
                        <label className="group flex cursor-pointer items-center gap-3">
                            <input
                                className="border-gray-300 bg-white text-primary focus:ring-primary/20 dark:border-gray-600 dark:bg-[#3a2a2a]"
                                name="rating"
                                type="radio"
                            />
                            <div className="flex text-sm text-yellow-500">
                                <span className="material-symbols-outlined fill-current text-[18px]">
                                    star
                                </span>
                                <span className="material-symbols-outlined fill-current text-[18px]">
                                    star
                                </span>
                                <span className="material-symbols-outlined fill-current text-[18px]">
                                    star
                                </span>
                                <span className="material-symbols-outlined fill-current text-[18px]">
                                    star
                                </span>
                                <span className="material-symbols-outlined fill-current text-[18px]">
                                    star
                                </span>
                            </div>
                            <span className="text-xs text-gray-500">& Up</span>
                        </label>
                        <label className="group flex cursor-pointer items-center gap-3">
                            <input
                                className="border-gray-300 bg-white text-primary focus:ring-primary/20 dark:border-gray-600 dark:bg-[#3a2a2a]"
                                name="rating"
                                type="radio"
                            />
                            <div className="flex text-sm text-yellow-500">
                                <span className="material-symbols-outlined fill-current text-[18px]">
                                    star
                                </span>
                                <span className="material-symbols-outlined fill-current text-[18px]">
                                    star
                                </span>
                                <span className="material-symbols-outlined fill-current text-[18px]">
                                    star
                                </span>
                                <span className="material-symbols-outlined fill-current text-[18px]">
                                    star
                                </span>
                                <span className="material-symbols-outlined text-[18px] text-gray-300">
                                    star
                                </span>
                            </div>
                            <span className="text-xs text-gray-500">& Up</span>
                        </label>
                    </div>
                </div>
                {/* Map Teaser */}
                <div className="rounded-xl border border-primary/10 bg-primary/5 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-bold text-primary">
                        <span className="material-symbols-outlined">map</span>
                        Explore Map
                    </div>
                    <p className="mb-3 text-xs text-gray-600 dark:text-gray-400">
                        View artisans and products by their exact location in
                        Bagmati.
                    </p>
                    <button className="w-full rounded-lg border border-gray-200 bg-white py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-primary hover:text-primary dark:border-[#3a2a2a] dark:bg-[#2a1a1a] dark:text-slate-300">
                        Open Interactive Map
                    </button>
                </div>
            </div>
        </aside>
    );
}
