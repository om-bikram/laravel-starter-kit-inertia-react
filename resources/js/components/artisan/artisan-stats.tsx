export function ArtisanStats() {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 py-4 dark:border-gray-800">
            <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-yellow-500">
                        star
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                        4.9
                    </span>
                    <span className="cursor-pointer underline transition hover:text-primary">
                        (124 Reviews)
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined">
                        inventory_2
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                        86
                    </span>
                    <span>Products</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined">
                        local_shipping
                    </span>
                    <span>Ships within 3 days</span>
                </div>
            </div>
            <div className="flex w-full gap-3 md:w-auto">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-2.5 font-semibold text-slate-700 transition hover:bg-gray-50 md:flex-none dark:border-slate-700 dark:text-slate-200 dark:hover:bg-gray-800">
                    <span className="material-symbols-outlined">favorite</span>{' '}
                    Follow
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-semibold text-white shadow-sm transition hover:bg-primary-light md:flex-none">
                    <span className="material-symbols-outlined">mail</span>{' '}
                    Contact Artisan
                </button>
            </div>
        </div>
    );
}
