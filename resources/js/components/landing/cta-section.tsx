export default function CtaSection() {
    return (
        <section className="relative overflow-hidden bg-primary py-20">
            {/* Pattern Overlay */}
            <div className="bg-dhaka-pattern pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="items-center justify-between rounded-3xl border border-white/10 bg-surface-dark/10 p-8 backdrop-blur-sm md:p-12 lg:flex">
                    <div className="mb-8 lg:mb-0 lg:w-1/2">
                        <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
                            Are you a Nepali Artisan?
                        </h2>
                        <p className="mb-6 max-w-md text-lg text-white/80">
                            Join our marketplace to showcase your authentic
                            crafts to a global audience. We handle logistics,
                            you focus on creation.
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-white/70">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">
                                    check_circle
                                </span>{' '}
                                Zero listing fees
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">
                                    check_circle
                                </span>{' '}
                                Global shipping
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">
                                    check_circle
                                </span>{' '}
                                Direct payments
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-auto">
                        <button className="w-full rounded-xl bg-white px-8 py-4 text-lg font-bold text-primary shadow-xl transition-colors hover:bg-gray-100 sm:w-auto">
                            Start Selling Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
