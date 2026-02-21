export function DirectorySearch() {
    return (
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl flex-1">
                <div className="group relative">
                    <span className="material-symbols-outlined absolute top-1/2 left-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary">
                        search
                    </span>
                    <input
                        className="w-full rounded-xl border-none bg-white py-4 pr-4 pl-12 text-base shadow-sm ring-1 ring-slate-200 transition-all focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:ring-slate-700"
                        placeholder="Search for Artisans, Crafts, or Workshops..."
                        type="text"
                    />
                </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white shadow-sm">
                    <span className="material-symbols-outlined text-sm">
                        grid_view
                    </span>
                    <span className="text-xs font-bold tracking-wider uppercase">
                        Grid
                    </span>
                </button>
                <button className="flex items-center gap-2 rounded-md px-4 py-2 text-slate-500 transition-all hover:bg-slate-100 dark:hover:bg-slate-700">
                    <span className="material-symbols-outlined text-sm">
                        map
                    </span>
                    <span className="text-xs font-bold tracking-wider uppercase">
                        Map
                    </span>
                </button>
            </div>
        </div>
    );
}
