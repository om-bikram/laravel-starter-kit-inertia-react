import { Product, ProductCard } from './product-card';

const products: Product[] = [
    {
        id: 1,
        title: 'Hand-Carved Peacock Window',
        category: 'Woodcraft',
        location: 'Bhaktapur',
        artisan: 'Newa Crafts',
        price: 12000,
        usdPrice: 90.0,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi088RTzhYP-xJLHzlPPt53laBrP4m5Wj_R_ulWHBotG3QTna5SLGUY-5yhoj6FpRGLEsGXHiJ03e7ypq5bTOvBZu-bxzC2ik5U4aPw0vRbp-pkWtKfoIyVLHbVElLHzQrpLxjLVpc2QxVUykt_7EMpAlQnFf0rFLLUNCUreGK5EsJ8JUGXhNGHWUtK-kswB40-DdlHsNdSec8xmHPXdDYoOXb8xFtPBAim7BKH8uV0waDXexx1IKcH_QsFc_FwTlNQmVb5qrR2g',
        imageAlt: 'Intricate traditional wooden peacock window frame',
        isVerified: true,
    },
    {
        id: 2,
        title: 'Pure Cashmere Shawl',
        category: 'Pashmina',
        location: 'Lalitpur',
        artisan: 'Himalayan Weavers',
        price: 4500,
        usdPrice: 35.0,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXB4tv3_RQjn9Dtlpk3unF3O5TeKWGhmo9t2_K5wlPdcODmlb0g6I1hRYMIbouUyDmKp6_d6k_URZPY1qwqZxi3gVKuTYI6aewo9SAeLFOAkE0NnxEiY5RLdewJ6tre3C7keqV0uVnlnW4uuVDQQzfCuLrVw37Stzy0f4Hn8KbZBk85FM8-r_LCFEkIldLONkdB-SlXI_DxzSGMVHdUTtzZOa1p0qjfpgglFn1MaPBuiUe_kYebH6eeQe_5cLXFp9UoJOk-CWoCA',
        imageAlt: 'Fine pashmina shawl with intricate embroidery',
        isVerified: false,
    },
    {
        id: 3,
        title: 'Hand-Beaten Singing Bowl',
        category: 'Metalwork',
        location: 'Kathmandu',
        artisan: 'Sound of Soul',
        price: 2500,
        usdPrice: 19.0,
        originalPrice: 3200,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl5c8EKZ1hBZ7uBCpObeWkGlt1AzetcFkalH38moBIDSw-rC86_GVmThwMp5_xFSTNBMD-DDoXNQeQmvNhn_9cBo4JHlbsky2_mPUfRW6_h0Xini8QX8o81JQQQRBYeqontLsGfi-k47DbQLNOc_oqENhLKfzsU3fRSwBhWxt3D6M3veXScEKCfBW0axwM7MXdSjROw6TKyk-I-AegLZd20z5HK2IQk7xexv5A0JBwZwwKAQHdfFrRqo-C6xT4vhEW70R18QpoXA',
        imageAlt: 'Tibetan singing bowl with wooden mallet',
        isVerified: true,
    },
    {
        id: 4,
        title: 'Bronze Sakyamuni Buddha',
        category: 'Statues',
        location: 'Patan',
        artisan: 'Patan Metal Arts',
        price: 25000,
        usdPrice: 188.0,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApEz0-xKLgw4M7xXlOIZnbRg8BTIiWzgCLjn340wSLtiZngVzw1dz4vvGHoQO5hM8sbWdWR0MmJOposg-BbazC3Els6sG-t14TU08J-EZem56eGjlXYyPfVTiiVrZBrSSAGzXbmIKvUIybXCaQVrxIzGtItwK6Ku_avFGu6pIz4GiWfGfDiiKD2ismMg91hHygpy3IJpLzoaGMkpUuFvuMdiH4w3Sr0H1cpHUzz_OuNWMRSsCrcZNdqmZVBq2HeA_9RucN0V0tVg',
        imageAlt: 'Buddha statue made of bronze',
        isVerified: false,
    },
    {
        id: 5,
        title: 'Traditional Clay Water Pot',
        category: 'Pottery',
        location: 'Thimi',
        artisan: 'Thimi Ceramics',
        price: 800,
        usdPrice: 6.0,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuLTfi1FjeS2mjyPGm5FLYXappqC80WcL5IPAVPmPse-t3dCTMMPKcjnbZ6tSeTbLBc1SC1XLo3kZ97X8K-hAfxRpnu78XNT04QA4eBVtYNTMByEkiWvdN4KEtAN1xRHGuBRZhAz4fCx6LN6N9_6Zx9TsQkzvqQA7aGN6sRZC8mSCyenIEdJW1f1wUIKf3IWKdonMlDk-XVbY3OsR0Fd1QWkYwDfabcQM4o94CFHfBBZY9qBCOzjVra6DSpTSY-9rhBd59qqRVIA',
        imageAlt: 'Traditional clay pottery pots',
        isVerified: false,
    },
    {
        id: 6,
        title: 'Wheel of Life Thangka',
        category: 'Thangka',
        location: 'Boudha',
        artisan: 'Boudha Art House',
        price: 18000,
        usdPrice: 135.0,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBanwNLCJVZxqpJ9I80UlCmeMzHfSrFDcFOqpagutpxl4wd92AEiJladwXrEozNMU6cuFjuRSioMH8wlO1iNhWN_mK6-8IqxEbzobWpb0I3o8aGE5Mwqk2x9YumiW58N4Qae1pQFzcqmors7TSlhjkpx7a4Gq76htvIFSw4ObJ08i4YWrBPQYGcGsRJLAzmkbKN9VNKWIsJ8Pxuisw01SgZFglNiC8qfH1MHcwyUu8bCbabO2dDIjvOqvdIEOQz6yNBmVumG1LGgQ',
        imageAlt: 'Thangka painting with intricate details',
        isVerified: true,
    },
];

export function RegionProductGrid() {
    return (
        <div className="flex-1">
            {/* Sort & Results Bar */}
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Showing{' '}
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                        12
                    </span>{' '}
                    of{' '}
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                        341
                    </span>{' '}
                    results
                </p>
                <div className="flex items-center gap-3 self-end sm:self-auto">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Sort by:
                    </span>
                    <div className="relative">
                        <select className="cursor-pointer appearance-none rounded-lg border border-gray-200 bg-white py-2 pr-10 pl-3 text-sm text-slate-900 shadow-sm focus:ring-1 focus:ring-primary focus:outline-none dark:border-[#3a2a2a] dark:bg-[#2a1a1a] dark:text-slate-100">
                            <option>Popularity</option>
                            <option>Newest Arrivals</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                            <span className="material-symbols-outlined text-sm">
                                expand_more
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
                <nav
                    aria-label="Pagination"
                    className="flex items-center gap-2"
                >
                    <a
                        className="rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-50 disabled:opacity-50 dark:border-[#3a2a2a] dark:bg-[#2a1a1a] dark:hover:bg-[#3a2a2a]"
                        href="#"
                    >
                        <span className="material-symbols-outlined text-sm">
                            chevron_left
                        </span>
                    </a>
                    <a
                        className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white"
                        href="#"
                    >
                        1
                    </a>
                    <a
                        className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50 dark:border-[#3a2a2a] dark:bg-[#2a1a1a] dark:text-slate-300 dark:hover:bg-[#3a2a2a]"
                        href="#"
                    >
                        2
                    </a>
                    <a
                        className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50 dark:border-[#3a2a2a] dark:bg-[#2a1a1a] dark:text-slate-300 dark:hover:bg-[#3a2a2a]"
                        href="#"
                    >
                        3
                    </a>
                    <span className="px-2 text-gray-400">...</span>
                    <a
                        className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50 dark:border-[#3a2a2a] dark:bg-[#2a1a1a] dark:text-slate-300 dark:hover:bg-[#3a2a2a]"
                        href="#"
                    >
                        12
                    </a>
                    <a
                        className="rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-50 dark:border-[#3a2a2a] dark:bg-[#2a1a1a] dark:hover:bg-[#3a2a2a]"
                        href="#"
                    >
                        <span className="material-symbols-outlined text-sm">
                            chevron_right
                        </span>
                    </a>
                </nav>
            </div>
        </div>
    );
}
