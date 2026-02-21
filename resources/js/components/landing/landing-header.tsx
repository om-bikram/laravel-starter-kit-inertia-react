import { dashboard, home, login, register } from '@/routes';
import artisans from '@/routes/artisans';
import cart from '@/routes/cart';
import products from '@/routes/products';
import regions from '@/routes/regions';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function LandingHeader() {
    const { auth } = usePage<SharedData>().props;

    return (
        <header className="sticky top-0 z-50 border-b border-[#f0e6e6] bg-white shadow-sm dark:border-primary/20 dark:bg-surface-dark">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between gap-8">
                    {/* Logo */}
                    <Link
                        href={home()}
                        className="flex shrink-0 cursor-pointer items-center gap-3"
                    >
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-white">
                            <span className="material-symbols-outlined">
                                temple_hindu
                            </span>
                        </div>
                        <div className="hidden md:block">
                            <h1 className="text-xl leading-none font-bold tracking-tight text-primary dark:text-white">
                                Nepal
                                <br />
                                Handicrafts
                            </h1>
                        </div>
                    </Link>
                    {/* Search Bar */}
                    <div className="hidden max-w-2xl flex-1 md:flex">
                        <div className="group relative w-full">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
                                <span className="material-symbols-outlined">
                                    search
                                </span>
                            </div>
                            <input
                                className="block w-full rounded-lg border-none bg-[#f5f0f0] py-2.5 pr-3 pl-10 leading-5 text-text-main placeholder-text-muted transition-colors duration-200 focus:bg-white focus:ring-2 focus:ring-primary focus:outline-none sm:text-sm dark:bg-white/5"
                                placeholder="Search for thangkas, pashminas, statues..."
                                type="text"
                            />
                            <div className="absolute inset-y-1 right-1 flex items-center">
                                <Link
                                    href={products.show()}
                                    className="rounded border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-text-muted transition-colors hover:text-primary dark:border-gray-700 dark:bg-surface-dark"
                                >
                                    Products
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Right Actions */}
                    <div className="flex shrink-0 items-center gap-6">
                        <nav className="hidden gap-6 text-sm font-semibold text-text-main lg:flex dark:text-gray-200">
                            <Link
                                className="transition-colors hover:text-primary"
                                href={regions.show()}
                            >
                                Regions
                            </Link>
                            <Link
                                className="transition-colors hover:text-primary"
                                href={artisans.index()}
                            >
                                Artisans
                            </Link>
                        </nav>

                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="hidden items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary/20 sm:flex dark:text-primary-light"
                            >
                                <span>Dashboard</span>
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="hidden items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary/20 sm:flex dark:text-primary-light"
                                >
                                    <span>Log in</span>
                                </Link>
                                <Link
                                    href={register()}
                                    className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-light sm:flex"
                                >
                                    <span>Register</span>
                                </Link>
                            </>
                        )}

                        <div className="flex items-center gap-3 border-l border-gray-200 pl-6 dark:border-gray-700">
                            <Link
                                href={cart.index()}
                                className="group relative rounded-full p-2 text-text-main transition-colors hover:bg-gray-100 dark:hover:bg-white/10"
                            >
                                <span className="material-symbols-outlined group-hover:text-primary">
                                    shopping_cart
                                </span>
                                <span className="absolute top-1 right-1 size-2 rounded-full border-2 border-white bg-secondary dark:border-surface-dark"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
