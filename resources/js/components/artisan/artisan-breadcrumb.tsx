import { Link } from '@inertiajs/react';

export function ArtisanBreadcrumb() {
    return (
        <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link className="text-slate-500 hover:text-primary" href="#">
                Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link className="text-slate-500 hover:text-primary" href="#">
                Artisans
            </Link>
            <span className="text-slate-400">/</span>
            <Link className="text-slate-500 hover:text-primary" href="#">
                Metal Casting
            </Link>
            <span className="text-slate-400">/</span>
            <span className="font-medium text-primary">Ratna's Metalworks</span>
        </div>
    );
}
