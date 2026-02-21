import LandingFooter from '@/components/landing/landing-footer';
import { LandingHeader } from '@/components/landing/landing-header';
import { RegionFilters } from '@/components/region/region-filters';
import { RegionHero } from '@/components/region/region-hero';
import { RegionProductGrid } from '@/components/region/region-product-grid';
import { Head } from '@inertiajs/react';

export default function Show() {
    return (
        <>
            <Head title="Bagmati Province - NepalCrafts">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="flex min-h-screen flex-col bg-background-light font-display text-slate-900 dark:bg-background-dark dark:text-slate-100">
                <LandingHeader />

                {/* Main Content */}
                <main className="mx-auto w-full max-w-[1440px] flex-grow px-4 py-6 sm:px-6 lg:px-8">
                    <RegionHero />

                    <div className="flex flex-col gap-8 lg:flex-row">
                        <RegionFilters />
                        <RegionProductGrid />
                    </div>
                </main>

                <LandingFooter />
            </div>
        </>
    );
}
