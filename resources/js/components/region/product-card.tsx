export interface Product {
    id: number;
    title: string;
    category: string;
    location: string;
    artisan: string;
    price: number;
    usdPrice: number;
    originalPrice?: number;
    image: string;
    imageAlt: string;
    isVerified?: boolean;
}

export function ProductCard({ product }: { product: Product }) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 dark:border-[#3a2a2a] dark:bg-[#2a1a1a] dark:hover:shadow-black/30">
            <div className="relative h-64 overflow-hidden">
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 shadow-sm backdrop-blur-sm dark:bg-black/70">
                    <span className="material-symbols-outlined text-[14px] text-primary">
                        location_on
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {product.location}
                    </span>
                </div>
                <button className="absolute top-3 right-3 z-10 rounded-full bg-white/80 p-2 text-gray-500 opacity-0 transition-all group-hover:opacity-100 hover:bg-white hover:text-primary dark:bg-black/50">
                    <span className="material-symbols-outlined text-[20px]">
                        favorite
                    </span>
                </button>
                <img
                    alt={product.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-alt={product.imageAlt}
                    src={product.image}
                />
            </div>
            <div className="flex flex-grow flex-col p-4">
                <div className="mb-1 text-xs font-medium tracking-wide text-primary uppercase">
                    {product.category}
                </div>
                <h3 className="mb-2 cursor-pointer text-lg leading-tight font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-100">
                    {product.title}
                </h3>
                <a
                    className="mb-4 flex items-center gap-1 text-sm text-gray-500 hover:text-primary hover:underline dark:text-gray-400"
                    href="#"
                >
                    {product.isVerified && (
                        <span className="material-symbols-outlined text-[16px] text-green-600">
                            verified
                        </span>
                    )}{' '}
                    {product.artisan}
                </a>
                <div className="mt-auto flex items-end justify-between">
                    <div>
                        {product.originalPrice ? (
                            <div className="flex items-center gap-2">
                                <p className="text-xl font-bold text-primary">
                                    NPR {product.price.toLocaleString()}
                                </p>
                                <span className="text-xs text-gray-400 line-through">
                                    NPR {product.originalPrice.toLocaleString()}
                                </span>
                            </div>
                        ) : (
                            <p className="text-xl font-bold text-primary">
                                NPR {product.price.toLocaleString()}
                            </p>
                        )}
                        <p className="text-xs text-gray-400">
                            ≈ USD ${product.usdPrice.toFixed(2)}
                        </p>
                    </div>
                    <button className="flex items-center justify-center rounded-lg bg-primary p-2.5 text-white shadow-md shadow-primary/20 transition-colors hover:bg-primary/90">
                        <span className="material-symbols-outlined text-[20px]">
                            add_shopping_cart
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
