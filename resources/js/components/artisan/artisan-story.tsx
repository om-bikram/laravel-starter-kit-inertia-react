export function ArtisanStory() {
    return (
        <div className="space-y-6 lg:col-span-2">
            <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-8 dark:border-gray-800 dark:bg-[#1e1e1e]">
                {/* Subtle pattern background */}
                <div
                    className="pointer-events-none absolute top-0 right-0 h-64 w-64 opacity-[0.03] dark:opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'0 0 2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                    }}
                ></div>
                <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                    <span className="h-8 w-1 rounded-full bg-primary"></span>
                    Artisan Story
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                    <p className="mb-4 leading-relaxed">
                        Namaste! I am Ratna Shakya, a third-generation metal
                        caster from the historic city of Patan. My family has
                        been preserving the 500-year-old tradition of "Lost Wax"
                        casting since the Malla era.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        Every piece you see in my shop is not just a product,
                        but a labor of love. From sculpting the initial wax
                        model to pouring the molten copper and the final
                        gold-gilding process, each statue takes weeks, sometimes
                        months, to complete.
                    </p>
                    <blockquote className="my-6 rounded-r-lg border-l-4 border-primary bg-gray-50 p-4 pl-4 text-lg text-slate-800 italic dark:bg-black/20 dark:text-slate-200">
                        "We don't just shape metal; we shape the spirit of our
                        ancestors into forms that bring peace to your home."
                    </blockquote>
                    <p className="leading-relaxed">
                        By supporting my shop, you help keep this intricate art
                        form alive for future generations. Thank you for valuing
                        authentic craftsmanship.
                    </p>
                </div>
                <div className="scrollbar-hide mt-8 flex gap-4 overflow-x-auto pb-2">
                    <div className="relative h-28 w-40 flex-none overflow-hidden rounded-lg">
                        <img
                            alt="Detail shot of hands carving wax"
                            className="h-full w-full object-cover transition duration-500 hover:scale-110"
                            data-alt="Close up of hands carving intricate details"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSMzqjbpZVcsVtZxjCg9ffoJbc6CGoQTMZwocNJ6M0wSNwNEy_6ZBxZtdF3fYUzUn9wK6ds7NVC2BARzjvdtp4KcGSSJfFSeijdbJLypBOVKkULd-3ZpJQ9fMhstbNBsCMu9SSvBhRSO7UibIqZOmbD9l6OugXqwIVaENCM02j4Gx2gWw5DEss7WbknCl-6pQXHPJ4MTznPdIfc_5pcYPCXYjwjRpZW6JvxcVu6jX9aDL6Zqz-y2tDxQhu2zAC9USA8iB8HGjKhg"
                        />
                    </div>
                    <div className="relative h-28 w-40 flex-none overflow-hidden rounded-lg">
                        <img
                            alt="Molten metal pouring process"
                            className="h-full w-full object-cover transition duration-500 hover:scale-110"
                            data-alt="Molten metal being poured into a mold"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP417TXX_vDe7aYf0pA43DOyUQtgwCKrOIr6fWMsKM8ytoYVJYPGFA6_7RlIFknQIEqSDmD87BmhabKCyRXZ259BaS9sLa9ZMZ-smOQm4UK0_1OsLrjEmaNGw-UABq3JYoIGb4j-PP6LY6PjGxQ0OkpTi5eKEDXS1GPtG_Z97p091n70y3zCVJ_tV-DFRV-O0nrlCLe9fQpR59FHAcyIxjZuWT93PVKfOtxdlfHvWQgrTH52sKE3Qr6wEvTR-wEzMYNqxXyoa9YQ"
                        />
                    </div>
                    <div className="relative h-28 w-40 flex-none overflow-hidden rounded-lg">
                        <img
                            alt="Finished statues on shelf"
                            className="h-full w-full object-cover transition duration-500 hover:scale-110"
                            data-alt="Rows of finished golden statues on shelves"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1-DjAhh9wUJxyY1WOuKlSdBu2oltZrybSYLVhGyieDg9j7vfi_WONWS6nidJuWgt5BJ0S30Vup1V3kdSR2z61JPLeaJOd0JGznDj6AEmiqGrbeuOr-L2lecDJgN_LxgbH7J1VMNo_JYwluzGgRF_BuiopEhJGcVjHUQfD23K8uMeFGF8j5kni4tfVRDOvISJ1U9-ReGTPmRkQvDrr9atXSRSO-nTokHEBau1g121Dq7y6wW_RL9DZWGOaMXqdV8T5a8RZX65I0w"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
