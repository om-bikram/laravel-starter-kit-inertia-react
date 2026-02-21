import { Link } from '@inertiajs/react';

export function DirectoryPagination() {
    return (
        <div className="mt-12 flex items-center justify-center gap-2">
            <Link
                href="#"
                className="flex size-10 items-center justify-center rounded-lg border border-slate-200 transition-all hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800"
            >
                <span className="material-symbols-outlined">chevron_left</span>
            </Link>
            <Link
                href="#"
                className="flex size-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white"
            >
                1
            </Link>
            <Link
                href="#"
                className="flex size-10 items-center justify-center rounded-lg border border-slate-200 text-sm font-bold transition-all hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800"
            >
                2
            </Link>
            <Link
                href="#"
                className="flex size-10 items-center justify-center rounded-lg border border-slate-200 text-sm font-bold transition-all hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800"
            >
                3
            </Link>
            <span className="px-2 text-slate-400">...</span>
            <Link
                href="#"
                className="flex size-10 items-center justify-center rounded-lg border border-slate-200 text-sm font-bold transition-all hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800"
            >
                12
            </Link>
            <Link
                href="#"
                className="flex size-10 items-center justify-center rounded-lg border border-slate-200 transition-all hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800"
            >
                <span className="material-symbols-outlined">chevron_right</span>
            </Link>
        </div>
    );
}
