export default function LandingFooter() {
    return (
        <footer className="border-t border-gray-200 bg-white pt-16 pb-8 dark:border-white/5 dark:bg-surface-dark">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary dark:text-white">
                            <div className="flex size-8 items-center justify-center rounded bg-primary text-white">
                                <span className="material-symbols-outlined text-sm">
                                    temple_hindu
                                </span>
                            </div>
                            <h3 className="text-lg font-bold">
                                Nepal Handicrafts
                            </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-text-muted dark:text-gray-400">
                            Connecting the world to the rich heritage and
                            skillful artistry of Nepal. Every purchase directly
                            empowers local communities.
                        </p>
                        <div className="flex gap-4">
                            <a
                                className="text-text-muted transition-colors hover:text-primary"
                                href="#"
                            >
                                <span className="material-symbols-outlined">
                                    public
                                </span>
                            </a>
                            <a
                                className="text-text-muted transition-colors hover:text-primary"
                                href="#"
                            >
                                <span className="material-symbols-outlined">
                                    alternate_email
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* Links 1 */}
                    <div>
                        <h4 className="mb-6 font-bold text-text-main dark:text-white">
                            Shop
                        </h4>
                        <ul className="space-y-3 text-sm text-text-muted dark:text-gray-400">
                            <li>
                                <a
                                    className="transition-colors hover:text-primary"
                                    href="#"
                                >
                                    All Products
                                </a>
                            </li>
                            <li>
                                <a
                                    className="transition-colors hover:text-primary"
                                    href="#"
                                >
                                    By Region
                                </a>
                            </li>
                            <li>
                                <a
                                    className="transition-colors hover:text-primary"
                                    href="#"
                                >
                                    New Arrivals
                                </a>
                            </li>
                            <li>
                                <a
                                    className="transition-colors hover:text-primary"
                                    href="#"
                                >
                                    Sale
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Links 2 */}
                    <div>
                        <h4 className="mb-6 font-bold text-text-main dark:text-white">
                            Support
                        </h4>
                        <ul className="space-y-3 text-sm text-text-muted dark:text-gray-400">
                            <li>
                                <a
                                    className="transition-colors hover:text-primary"
                                    href="#"
                                >
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    className="transition-colors hover:text-primary"
                                    href="#"
                                >
                                    Shipping & Returns
                                </a>
                            </li>
                            <li>
                                <a
                                    className="transition-colors hover:text-primary"
                                    href="#"
                                >
                                    Seller Guidelines
                                </a>
                            </li>
                            <li>
                                <a
                                    className="transition-colors hover:text-primary"
                                    href="#"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h4 className="mb-6 font-bold text-text-main dark:text-white">
                            Stay Connected
                        </h4>
                        <p className="mb-4 text-sm text-text-muted dark:text-gray-400">
                            Get updates on new collections and artisan stories.
                        </p>
                        <form className="flex gap-2">
                            <input
                                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:outline-none dark:border-white/10 dark:bg-white/5"
                                placeholder="Email address"
                                type="email"
                            />
                            <button className="rounded-lg bg-primary px-3 py-2 text-white transition-colors hover:bg-primary-light">
                                <span className="material-symbols-outlined text-sm">
                                    send
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-xs text-text-muted md:flex-row dark:border-white/5 dark:text-gray-500">
                    <p>
                        © 2023 Nepal Handicrafts Marketplace. All rights
                        reserved.
                    </p>
                    <div className="flex gap-6">
                        <a
                            className="transition-colors hover:text-text-main dark:hover:text-white"
                            href="#"
                        >
                            Privacy Policy
                        </a>
                        <a
                            className="transition-colors hover:text-text-main dark:hover:text-white"
                            href="#"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
