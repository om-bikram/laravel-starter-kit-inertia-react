import { CartItem } from '@/components/cart/cart-item';
import { CartPolicy } from '@/components/cart/cart-policy';
import { CartSummary } from '@/components/cart/cart-summary';
import LandingFooter from '@/components/landing/landing-footer';
import { LandingHeader } from '@/components/landing/landing-header';
import { Head, Link } from '@inertiajs/react';

const cartItems = [
    {
        id: 1,
        name: 'Full Moon Singing Bowl',
        store: 'Lalitpur Metal Crafts',
        price: 85.0,
        priceNpr: 'NPR 11,250',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXayjjSch2dOOjSAQUP75h8txBIgJ1fn3Qhm4vSZ0sBE3clcWxjlVn2zNq_a2RiqfiX-8TbYocGdQHIAimEfhFeGdg3b4ih_7lehPuL6hqObEKZ9eC5YST5c9CxPHMU-71_ZfxF6ei-XYmhUB-1fqZJ8DJVWTzZa1cfCd-JcYaOFHEpUE0b0D-y6LsyBR1_54yh09rjCuQNbsXxDgTdEo8qRCL5aApbX--4Lo_OdaG4km8nc5_jsL2AqdzFPHqHqjLszhJHRFTTg',
        quantity: 1,
    },
    {
        id: 2,
        name: 'Green Tara Thangka',
        store: 'Bhaktapur Art Gallery',
        price: 350.0,
        priceNpr: 'NPR 46,375',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOu5skODb7y043AMz1J4B8X4Aa1CvyLgyqVKC6l9esehT5Lu7_m_BbyNOauDqi5PhO4jcJXLFvdWQz26kJgLN7ZskZ9b29uwIoiArZ6JJDTkHsbFsgp7xz-fWO03OI0QSINsbyF7F4SCZGzyGLaBMWrqqpingEBqxUvD9zW2wc09TB2YUHYzzWx6b6uCL3sWP_CEvtCCJUHI8-tBtnjNjJ1zAL_p9QVm7vfOdTog-3i2ITB9u6gxaLiGgNBW3FwFQMHzIrqNyrWg',
        quantity: 1,
    },
    {
        id: 3,
        name: 'Pure Cashmere Shawl',
        store: 'Himalayan Weaves',
        price: 120.0,
        priceNpr: 'NPR 15,900',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVXGlLnhXbMMdFq-_zzuuEtLCkoIELFF49BnmBWRGHejBJIPHTNJ_H1Sb2R6p2ZZdl0OMRRVZ3iax1F9gJaXe4Hmy81GPXV9daAonmbPrHz95q2dXcw2u2T0svt-bLamWCkw_RX-IJwHH9c-UqB5-T7uGo84Z9lAeLsyOKN_HYps9MvTiomNL9paCmXJOZbJ3d5HXcclNu9lL3VsHKr6iUPc7PgZwb4PqhwodG7OWSFNJz58jmWCy8v0Niq70co-jLQ_94l6_ndA',
        quantity: 1,
    },
];

export default function Index() {
    return (
        <>
            <Head title="Shopping Cart - Nepal Handicrafts">
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

            <div className="flex min-h-screen flex-col bg-background-light font-body text-text-main antialiased dark:bg-background-dark dark:text-slate-100">
                <LandingHeader />

                <main className="flex-grow bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M20%2020L0%2040h40L20%2020zm0%200L40%200H0l20%2020z%27%20fill=%27%238a0000%27%20fill-opacity=%270.03%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E')] py-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-8">
                            <h1 className="text-3xl font-extrabold text-text-main dark:text-white">
                                Your Shopping Cart
                            </h1>
                            <nav className="mt-2 flex text-sm">
                                <Link
                                    className="group flex items-center gap-1 font-medium text-primary hover:text-primary-light"
                                    href="/"
                                >
                                    <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">
                                        arrow_back
                                    </span>
                                    Continue Shopping
                                </Link>
                            </nav>
                        </div>

                        <div className="grid items-start gap-8 lg:grid-cols-12">
                            <div className="space-y-4 lg:col-span-8">
                                {cartItems.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>

                            <div className="sticky top-24 lg:col-span-4">
                                <CartSummary />
                                <CartPolicy />
                            </div>
                        </div>
                    </div>
                </main>

                <LandingFooter />
            </div>
        </>
    );
}
