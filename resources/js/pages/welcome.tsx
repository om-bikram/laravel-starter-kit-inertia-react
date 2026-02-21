import CtaSection from '@/components/landing/cta-section';
import FeaturedProducts from '@/components/landing/featured-products';
import { HeroSection } from '@/components/landing/hero-section';
import InteractiveMap from '@/components/landing/interactive-map';
import LandingFooter from '@/components/landing/landing-footer';
import { LandingHeader } from '@/components/landing/landing-header';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Nepal Handicrafts - Authentic Marketplace">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                    rel="stylesheet"
                />
            </Head>

            <div className="flex min-h-screen flex-col bg-background-light font-body text-text-main antialiased dark:bg-background-dark dark:text-slate-100">
                <LandingHeader />
                <main className="flex-grow">
                    <HeroSection />
                    <InteractiveMap />
                    <FeaturedProducts />
                    <CtaSection />
                </main>
                <LandingFooter />
            </div>
        </>
    );
}
