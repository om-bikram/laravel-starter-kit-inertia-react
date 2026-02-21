import LandingFooter from '@/components/landing/landing-footer';
import { LandingHeader } from '@/components/landing/landing-header';
import { ArtisanStory } from '@/components/product/artisan-story';
import { ProductBreadcrumb } from '@/components/product/product-breadcrumb';
import { ProductGallery } from '@/components/product/product-gallery';
import { ProductInfo } from '@/components/product/product-info';
import { RelatedProducts } from '@/components/product/related-products';
import { Head } from '@inertiajs/react';

export default function Show() {
    return (
        <>
            <Head title="NepalCrafts - Hand-Carved Wooden Peacock Window">
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
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="flex min-h-screen flex-col overflow-x-hidden bg-background-light font-display text-slate-900 antialiased dark:bg-background-dark dark:text-slate-100">
                <LandingHeader />

                <main className="mx-auto w-full max-w-[1280px] px-4 py-6 md:px-8 md:py-10">
                    <ProductBreadcrumb />

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 xl:gap-16">
                        <ProductGallery />
                        <ProductInfo />
                    </div>

                    <ArtisanStory />
                    <RelatedProducts />
                </main>

                <LandingFooter />
            </div>
        </>
    );
}
