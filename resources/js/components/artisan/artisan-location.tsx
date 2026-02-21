export function ArtisanLocation() {
    return (
        <div className="space-y-6 lg:col-span-1">
            <div className="flex h-full max-h-[500px] flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-[#1e1e1e]">
                <div className="border-b border-gray-100 p-4 dark:border-gray-800">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Workshop Location
                    </h3>
                    <p className="text-sm text-slate-500">
                        Lalitpur District, Nepal
                    </p>
                </div>
                <div className="relative min-h-[250px] flex-grow bg-slate-200 dark:bg-slate-800">
                    {/* Interactive Map Placeholder */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-80"
                        data-location="Patan Map"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRp75_Jqq3aru6VOCH7IEIDM3OKOl6CUZ8augDs0THW90pPEAJ5vyGhsQxqrJz2vdfUvUCBK_uG6QAHsIBnrxBqWqsoP0a60ey2gByIztM1KDax8ggNQGbxHWy_k62xVOOo4ku6HlnfDRO1iEzDguMlzQh1xRZu3uTO-QahTJWTuv3iK5btJy8m_lFr_hmOX_K6XkYBTSmefx5RYfbqJ_Xp1-aKIfefK3Xfd1s-GHgrylnKYWVaPhWjed3nHkaD04AeAiFM9b0Bg')",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black/10"></div>
                    {/* Pin */}
                    <div className="group absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform cursor-pointer flex-col items-center">
                        <div className="mb-2 rounded bg-white px-3 py-1 text-xs font-bold opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-[#1e1e1e]">
                            Ratna's Workshop
                        </div>
                        <span className="material-symbols-outlined text-4xl text-primary drop-shadow-lg">
                            location_on
                        </span>
                        <div className="h-1 w-4 rounded-full bg-black/30 blur-sm"></div>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 dark:bg-[#252525]">
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined mt-1 text-primary">
                            storefront
                        </span>
                        <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                Visit the Showroom
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                                Open Sun-Fri, 10am - 6pm
                            </p>
                            <p className="text-xs text-slate-500">
                                Mangal Bazar, Patan Durbar Square
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
