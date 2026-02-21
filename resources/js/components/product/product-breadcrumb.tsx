import { Link } from '@inertiajs/react';

export function ProductBreadcrumb() {
    return (
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm">
            <Link
                className="font-medium text-slate-500 transition-colors hover:text-primary"
                href="#"
            >
                Home
            </Link>
            <span className="material-symbols-outlined text-[16px] text-slate-400">
                chevron_right
            </span>
            <Link
                className="font-medium text-slate-500 transition-colors hover:text-primary"
                href="#"
            >
                Kathmandu Valley
            </Link>
            <span className="material-symbols-outlined text-[16px] text-slate-400">
                chevron_right
            </span>
            <Link
                className="font-medium text-slate-500 transition-colors hover:text-primary"
                href="#"
            >
                Wood Carving
            </Link>
            <span className="material-symbols-outlined text-[16px] text-slate-400">
                chevron_right
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">
                Peacock Window
            </span>
        </nav>
    );
}
