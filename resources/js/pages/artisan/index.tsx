import { DirectoryFilters } from '@/components/artisan/directory-filters';
import { DirectoryGrid } from '@/components/artisan/directory-grid';
import { DirectoryPagination } from '@/components/artisan/directory-pagination';
import { DirectorySearch } from '@/components/artisan/directory-search';
import LandingFooter from '@/components/landing/landing-footer';
import { LandingHeader } from '@/components/landing/landing-header';
import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <>
            <Head title="Artisans Directory - Nepali Handicrafts">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="flex min-h-screen flex-col bg-background-light font-display text-slate-900 dark:bg-background-dark dark:text-slate-100">
                <LandingHeader />

                <main className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
                    <DirectorySearch />

                    <div className="flex flex-col gap-10 lg:flex-row">
                        <DirectoryFilters />
                        <div className="flex-1">
                            <DirectoryGrid />
                            <DirectoryPagination />
                        </div>
                    </div>
                </main>

                <LandingFooter />
            </div>
        </>
    );
}
