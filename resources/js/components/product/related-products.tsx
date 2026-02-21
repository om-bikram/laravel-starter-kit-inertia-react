interface RelatedProduct {
    id: number;
    title: string;
    category: string;
    price: number;
    rating: number;
    image: string;
    imageAlt: string;
}

const relatedProducts: RelatedProduct[] = [
    {
        id: 1,
        title: 'Mandala of Compassion',
        category: 'Thangka Painting',
        price: 85.0,
        rating: 4.9,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6oUsqfvDNZ6dN-aaQq-9fgVmQm4JoOfcBMPz9S77VgIzp6nWuRXI7yGfbAuEcf43mos4DsSmGXc0QrOVupGinNWNI2NZFifYaVFJQV5ZIdtV9GXuF582Tl1KwdoCUFiKyuFdljy3KXeyxaEW2NMtP-XHkynnG1zpXSY-u9vcTe6xm-0sXbwCsVzrX8dLXkPobpSKAAubZT0NGMgDibSExhxVzFpRPRJOIRyozpxVs49ByMIikGFpzHO7IA2O4LUA8UbdqQ2UT0A',
        imageAlt: 'Intricate mandala artwork',
    },
    {
        id: 2,
        title: 'Tibetan Singing Bowl',
        category: 'Metal Craft',
        price: 45.0,
        rating: 4.7,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLKuiL_Qq-XNEf0DRQtMSXScOdSOgmtd_-Cuueda7C9rhINojp8kAzmR-NuvDlrKmoGJTmrBtA7vr1Phnu8kv73W_ifvCpc6yeoXPfMXt69RoEuCohVswM6Z-3kkkU2WcSl01YeWwOmXHxB8DPSQIUYkeAHk0wQ8tHHLMVv8UeC1RiDdPEi0dobTIT0WrUy-R6oT_yXviLtfcyMR0cA0Zlg9SrlyFwYYuP-crUjz_CsVLve2m9PeOXjyOlN794LNCTVxJweBci5A',
        imageAlt: 'Brass singing bowl on cushion',
    },
    {
        id: 3,
        title: 'Handmade Nature Journal',
        category: 'Lokta Paper',
        price: 22.0,
        rating: 5.0,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxeslWcmLJPd1HRjYA9sN9e5EclYf1QffKWd-w_ongFf59JC0v0TyaKSKf4fa1EeHx-r5YrAOKK5husXTE84BOc06Bve_bamUg_f7kaVO76fHsQbRJ6h5gpxXElZWNepHCdLfzWEGYdWgtXc5T5iI8czkz57rNFqnVfja8sKvltNstDr69-6LsnosJv7022y4FCnHqvxl48RG708WBBzs3JhbkLLHnzA9YH0CFWTdRNdalTwRnkhw8p_cNia8C9_e2q3TESEmpQA',
        imageAlt: 'Textured lokta paper journal',
    },
    {
        id: 4,
        title: 'Sitting Buddha Statue',
        category: 'Metal Craft',
        price: 195.0,
        rating: 4.8,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBs9nM4i8ZA3dUfwWiO5bPla3Hhi4WXqdNI0WHKM78kSysB4LajmBAcAxMrDxrJTGByjJ1JC7IxNYK5XJYDjfM3aMhUTYM2u4DpGzXZ-eiluLGoYE_zWNqfZ6LhvZ09T8l4Vbc3mUl0RTDpsZa-0AKVp71aWFpU4hikxauJiLMwNWMyojhtowY7Oo9ZpSdzd4OpcJ7ohX-7mp6d9iEAS5lr-sM0aFgi0QEnLorJQGcMfiaTMswh7YIYVezpO4GoENtZYefLwdJ1Xw',
        imageAlt: 'Small bronze buddha statue',
    },
];

export function RelatedProducts() {
    return (
        <div className="mt-20">
            <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
                More from Kathmandu Valley
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((product) => (
                    <div
                        key={product.id}
                        className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-all hover:shadow-lg hover:shadow-primary/5 dark:border-gray-800 dark:bg-[#1a0b0b]"
                    >
                        <div className="relative aspect-square overflow-hidden bg-gray-100">
                            <img
                                alt={product.imageAlt}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                data-alt={product.imageAlt}
                                src={product.image}
                            />
                            <button className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/90 text-slate-400 shadow-sm backdrop-blur-sm transition-colors hover:text-primary">
                                <span className="material-symbols-outlined text-[20px]">
                                    favorite
                                </span>
                            </button>
                        </div>
                        <div className="p-4">
                            <p className="mb-1 text-xs font-medium text-primary">
                                {product.category}
                            </p>
                            <h3 className="mb-2 line-clamp-1 font-bold text-slate-900 dark:text-white">
                                {product.title}
                            </h3>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-slate-900 dark:text-white">
                                    ${product.price.toFixed(2)}
                                </span>
                                <div className="flex items-center text-xs text-yellow-400">
                                    <span className="material-symbols-outlined fill-current text-[16px]">
                                        star
                                    </span>
                                    <span className="ml-1 text-slate-500">
                                        {product.rating.toFixed(1)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
