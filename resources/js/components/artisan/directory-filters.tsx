export function DirectoryFilters() {
    return (
        <aside className="w-full shrink-0 space-y-8 lg:w-72">
            {/* Province Filter */}
            <div>
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-widest text-slate-400 uppercase">
                    <span className="material-symbols-outlined text-sm">
                        location_on
                    </span>
                    Filter by Province
                </h3>
                <div className="space-y-1">
                    {[
                        'Koshi Province',
                        'Madhesh Province',
                        'Bagmati Province',
                        'Gandaki Province',
                        'Lumbini Province',
                        'Karnali Province',
                        'Sudurpashchim Province',
                    ].map((province) => (
                        <label
                            key={province}
                            className={`group flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-all ${province === 'Bagmati Province' ? 'bg-primary/10 text-primary' : 'hover:bg-white dark:hover:bg-slate-800'}`}
                        >
                            <input
                                defaultChecked={province === 'Bagmati Province'}
                                className={`size-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 ${province === 'Bagmati Province' ? 'border-primary/30' : ''}`}
                                type="checkbox"
                            />
                            <span
                                className={`text-sm font-medium transition-colors ${province === 'Bagmati Province' ? 'font-bold' : 'group-hover:text-primary'}`}
                            >
                                {province}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Craft Type Filter */}
            <div className="border-t border-slate-200 pt-6 dark:border-slate-700">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-widest text-slate-400 uppercase">
                    <span className="material-symbols-outlined text-sm">
                        category
                    </span>
                    Craft Type
                </h3>
                <div className="grid grid-cols-2 gap-2">
                    {[
                        'Woodwork',
                        'Metalwork',
                        'Textiles',
                        'Ceramics',
                        'Jewelry',
                        'Sculpture',
                    ].map((craft) => (
                        <button
                            key={craft}
                            className={`rounded-md border px-3 py-2 text-xs font-bold transition-all ${craft === 'Metalwork' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 hover:border-primary hover:text-primary dark:border-slate-700'}`}
                        >
                            {craft}
                        </button>
                    ))}
                </div>
            </div>

            {/* Rating Filter */}
            <div className="border-t border-slate-200 pt-6 dark:border-slate-700">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-widest text-slate-400 uppercase">
                    <span className="material-symbols-outlined text-sm">
                        star
                    </span>
                    Minimum Rating
                </h3>
                <div className="space-y-2">
                    {[4, 5].map((stars) => (
                        <label
                            key={stars}
                            className="group flex cursor-pointer items-center justify-between"
                        >
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`material-symbols-outlined text-lg ${i < stars ? 'filled-icon' : ''}`}
                                        style={{
                                            fontVariationSettings:
                                                "'FILL' " + (i < stars ? 1 : 0),
                                        }}
                                    >
                                        star
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs font-semibold text-slate-500">
                                & Up
                            </span>
                            <input
                                className="sr-only"
                                name="rating"
                                type="radio"
                            />
                        </label>
                    ))}
                </div>
            </div>

            {/* Sidebar Promo */}
            <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-primary/5 p-6">
                <div className="relative z-10">
                    <h4 className="mb-2 font-bold text-primary">
                        Are you an Artisan?
                    </h4>
                    <p className="mb-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        Join our community and showcase your authentic Nepali
                        handicrafts to the world.
                    </p>
                    <button className="flex items-center gap-1 text-xs font-bold tracking-widest text-primary uppercase underline decoration-2 underline-offset-4 transition-all hover:gap-2">
                        Register Now{' '}
                        <span className="material-symbols-outlined text-sm">
                            arrow_forward
                        </span>
                    </button>
                </div>
                <span className="material-symbols-outlined absolute -right-4 -bottom-4 rotate-12 text-8xl text-primary/10 select-none">
                    palette
                </span>
            </div>
        </aside>
    );
}
