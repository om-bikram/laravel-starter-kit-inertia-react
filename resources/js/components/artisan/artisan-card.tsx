import { Link } from '@inertiajs/react';

interface Artisan {
    id: number;
    name: string;
    specialty: string;
    province: string;
    rating: number;
    image: string;
    avatar: string;
    productCount: number;
    slug: string;
}

export function ArtisanCard({ artisan }: { artisan: Artisan }) {
    return (
        <div className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    alt={artisan.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={artisan.image}
                />
                <div className="absolute top-4 left-4">
                    <span className="rounded-full border border-primary/20 bg-white/90 px-3 py-1 text-[10px] font-bold tracking-tighter text-primary uppercase backdrop-blur-sm dark:bg-slate-800/90">
                        {artisan.province}
                    </span>
                </div>
                <div className="absolute right-4 bottom-4 flex items-center gap-1 rounded bg-yellow-500 px-2 py-1 text-[10px] font-bold text-white shadow-lg">
                    <span
                        className="material-symbols-outlined filled-icon text-[12px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                        star
                    </span>{' '}
                    {artisan.rating}
                </div>
            </div>
            <div className="p-6">
                <div className="mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-primary">
                        verified
                    </span>
                    <h3 className="text-lg font-extrabold transition-colors group-hover:text-primary">
                        {artisan.name}
                    </h3>
                </div>
                <p className="mb-6 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-sm">
                        hardware
                    </span>
                    {artisan.specialty}
                </p>
                <div className="flex items-center justify-between gap-4">
                    <div className="flex -space-x-2">
                        <div className="size-8 rounded-full border-2 border-white bg-slate-200 dark:border-slate-800">
                            <img
                                alt="Artisan portrait"
                                className="h-full w-full rounded-full object-cover"
                                src={artisan.avatar}
                            />
                        </div>
                        {artisan.productCount > 0 && (
                            <div className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-primary/20 text-[8px] font-bold text-primary dark:border-slate-800">
                                +{artisan.productCount}
                            </div>
                        )}
                    </div>
                    <Link
                        className="flex-1 rounded-lg bg-primary py-2.5 text-center text-xs font-bold tracking-widest text-white uppercase shadow-md shadow-primary/20 transition-all hover:bg-primary/90"
                        href={`/artisans/${artisan.slug}`}
                    >
                        View Shop
                    </Link>
                </div>
            </div>
        </div>
    );
}
