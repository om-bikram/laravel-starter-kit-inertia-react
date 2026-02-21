import { ArtisanCard } from './artisan-card';

const artisans = [
    {
        id: 1,
        name: 'Bhaktapur Woodworks',
        specialty: 'Specialized in Newari Wood Carving',
        province: 'Bagmati',
        rating: 4.9,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3CZmwdQO1mtU_xf1pAar3fFkbBXuuhJ0jXPqYOB2cRUfXcENxGyHv5c4yVUF5FCoZcYYJuv70CesaDVzQQXLufQDWT8IM3UeuxR68g1GRt-FXPXcjn6Vvh90l2dnDkQw-HQ4SjhNiKNNwIqW0lQJka_06kiZv5xjm2z59eEMxSFy_UnyCxvBPjkYmFDV1bBkZADvWQ4fowQ5K-VvioSse1U-htOC0HxQO1mGgE53Z87sQajC9PmtLp9R8Z1JlUJUu3dfkgULTCQ',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa96RYnsGwo5zYrSC84mM-aex6U15ebuTbV-Lk2qgaXAy2RacHwzerYbBT6maMHoB5wMbamAWA8xQpW-MisgH9MlnmSm2IKZt5Q97k6GvW69M4W0WdIexYZaO80CUljUFm66oLhoWpuhHeFV71a9GtBALItNNzrhh5ZOK5y1RoXl0NIZ039czNE8CgRRSAzREVAoVgznLrA3SqHIOtJEMEXCy1VvrOVs_FM93_rQ_vME0TKyqnOKuD2DVlNO63Gn4f48we_taT-A',
        productCount: 3,
        slug: 'bhaktapur-woodworks',
    },
    {
        id: 2,
        name: 'Pokhara Singing Bowls',
        specialty: 'Handmade Healing Instruments',
        province: 'Gandaki',
        rating: 5.0,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAlFEhv8bOdxkFqLbOMp0c6142cVTDY2N53TkW1_eDt4k5EL1p1YuwmiE8pPUT0kzXNd_bLqf0k-uoo8E_0IyFG_f2Y_z1rUBHd8-kCNRSybugffbdIPfH2N-F-tRmD5_CrFsS1M82gGPvrKzJkpXaOkfbjzQd-w5q0CwYipEMp4X5FpaamslZoA5nJgmxPqCID0uOugkh3XmRs1WeZDtbw7Q8dTb5roaB98OPI7Sw4g3CqBzHLM5gqHznwqKvuOJl46nnhkYeXg',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeOM0L465A3dRy2Qm5KOOWkrgbzgej2sO5KVJmKbi6J192uxcLwZXIytijnFWolSKGcERj08JEisfvUGG9Ogh6Pgk1-s3t1udcU0H4OmNUzJA3thDwgc6FAPCIQYioWk67tAsxogfNEakxrlXv1DSxcO9ib8K5ldC7hL4V-v1_9sKZDqMhG7aOvTNXPQRcAeEyInyy4W7y4WdqZDrH1gG3zF2QaOM0fz5w0p6LMIW4iE6H8nthX-NyP0TaBFa16szoLVn-jnSoAA',
        productCount: 0,
        slug: 'pokhara-singing-bowls',
    },
    {
        id: 3,
        name: 'Dharan Weavers Hub',
        specialty: 'Authentic Dhaka Fabrics & Textiles',
        province: 'Koshi',
        rating: 4.8,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCueEdZ4GJgksyWG05jZY4n8304_dFLvNDtR_x6dJJkZ9mONj6ah5BSO8RBGCnKcRj1JFWE6BPvTobs9a9Rsw0IR3PrYPOOHIIrsvFDk0lVt21noMvVwKy1W8HphKeg42Thdlj3Q_vn4sF3HsVmN6007_9czrMJ3WzuG8MVNMrQb5hhh2_PytuEaOFdf6tac1sOgNSoeT1ear8wVW0uYXB21n5gS7VTVPRnjxS9SbdQQEi9mTnVK1mEarRZr38h0QFQFb2LlH_iCQ',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn4z7eGor7K8pWVBZQ_PdTfy0O4IHPAvuvRVBDBpYrVWLZUZRWgGWz1or8ZOr76OhYrE5ZT7r_qEbMSGkfgQiBT-X5NZkwNuCAPI5cDkJ8wshVZQe8SGEzhTi_YtzrYeR9gZpB0bJvb_blnVq51VbM7KP5Vd3M782hUsw6Bh4i93FsmhtLdpy4SKCwZ-SBIvvixJZMJOJ0xF4KNJ4e304FtsuIqFwHqKSqdjUD37rZOefTQPU6X_wvbf2MdXh3FfV4mUB6DpAA0A',
        productCount: 8,
        slug: 'dharan-weavers-hub',
    },
];

export function DirectoryGrid() {
    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                    Featured Artisans{' '}
                    <span className="ml-2 text-sm font-normal text-slate-400">
                        (124 results)
                    </span>
                </h2>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-500">
                        Sort by:
                    </span>
                    <select className="cursor-pointer border-none bg-transparent text-sm font-bold text-primary focus:ring-0">
                        <option>Most Popular</option>
                        <option>Newly Joined</option>
                        <option>Rating (High to Low)</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {artisans.map((artisan) => (
                    <ArtisanCard key={artisan.id} artisan={artisan} />
                ))}
                {/* Re-using for demo purposes to match layout */}
                {artisans.map((artisan) => (
                    <ArtisanCard
                        key={`demo-${artisan.id}`}
                        artisan={{
                            ...artisan,
                            id: artisan.id + 10,
                            name: `${artisan.name} II`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
