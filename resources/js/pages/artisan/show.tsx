import { ArtisanBreadcrumb } from '@/components/artisan/artisan-breadcrumb';
import { ArtisanHero } from '@/components/artisan/artisan-hero';
import { ArtisanLocation } from '@/components/artisan/artisan-location';
import { ArtisanReviews } from '@/components/artisan/artisan-reviews';
import { ArtisanStats } from '@/components/artisan/artisan-stats';
import { ArtisanStory } from '@/components/artisan/artisan-story';
import { FeaturedCreations } from '@/components/artisan/featured-creations';
import LandingFooter from '@/components/landing/landing-footer';
import { LandingHeader } from '@/components/landing/landing-header';
import { Head } from '@inertiajs/react';

export default function Show() {
    return (
        <>
            <Head title="Ratna's Metalworks - NepalArtisans">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="flex min-h-screen flex-col bg-background-light font-display text-slate-900 dark:bg-background-dark dark:text-slate-100">
                <LandingHeader />

                <main className="mx-auto w-full max-w-[1200px] flex-grow space-y-8 px-4 py-6 md:px-10 lg:px-40">
                    <ArtisanBreadcrumb />
                    <ArtisanHero />

                    {/* Spacer for mobile profile overlap */}
                    <div className="h-16 md:hidden"></div>

                    <ArtisanStats />

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <ArtisanStory />
                        <ArtisanLocation />
                    </div>

                    <FeaturedCreations />
                    <ArtisanReviews />
                </main>

                <LandingFooter />
            </div>
        </>
    );
}
