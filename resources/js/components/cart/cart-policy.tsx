export function CartPolicy() {
    return (
        <div className="mt-6 flex items-start gap-4 rounded-2xl border-2 border-dashed border-gray-200 p-6 dark:border-white/10">
            <span className="material-symbols-outlined text-primary">
                verified_user
            </span>
            <div>
                <h4 className="text-sm font-bold text-text-main dark:text-white">
                    Artisan Direct Policy
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-text-muted">
                    Every purchase directly supports the artisans in Nepal. We
                    ensure fair pricing and sustainable practices.
                </p>
            </div>
        </div>
    );
}
