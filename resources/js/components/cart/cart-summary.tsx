export function CartSummary() {
    return (
        <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg dark:border-white/5 dark:bg-surface-dark">
            <div className="border-b border-gray-100 bg-primary/5 p-6 dark:border-white/5">
                <h2 className="text-xl font-bold text-text-main dark:text-white">
                    Order Summary
                </h2>
            </div>
            <div className="space-y-4 p-6">
                <div className="flex justify-between text-text-muted">
                    <span>Subtotal</span>
                    <span className="font-bold text-text-main dark:text-white">
                        $555.00
                    </span>
                </div>
                <div className="flex justify-between text-text-muted">
                    <span>Shipping (International)</span>
                    <span className="font-bold text-text-main dark:text-white">
                        $45.00
                    </span>
                </div>
                <div className="border-t border-dashed border-gray-200 py-4 dark:border-white/10">
                    <label className="mb-2 block text-xs font-bold tracking-wider text-text-muted uppercase">
                        Shipping Region
                    </label>
                    <div className="relative">
                        <select className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pr-10 pl-3 text-sm focus:border-primary focus:ring-primary dark:border-white/10 dark:bg-white/5">
                            <option>North America</option>
                            <option>Europe</option>
                            <option>Asia Pacific</option>
                            <option>Domestic (Nepal)</option>
                        </select>
                        <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
                            expand_more
                        </span>
                    </div>
                </div>
                <div className="border-t border-gray-100 pt-4 dark:border-white/10">
                    <div className="mb-6 flex items-end justify-between">
                        <span className="text-lg font-bold text-text-main dark:text-white">
                            Total
                        </span>
                        <div className="text-right">
                            <p className="text-xs text-text-muted">
                                Approx. NPR 79,500
                            </p>
                            <p className="text-3xl font-extrabold text-primary">
                                $600.00
                            </p>
                        </div>
                    </div>
                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-lg font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-light">
                        Proceed to Checkout
                        <span className="material-symbols-outlined">
                            payments
                        </span>
                    </button>
                    <p className="mt-4 text-center text-[10px] font-bold tracking-widest text-text-muted uppercase">
                        <span className="inline-block rounded bg-secondary/10 px-2">
                            Secure Transaction
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
