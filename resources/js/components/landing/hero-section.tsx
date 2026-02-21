export function HeroSection() {
    return (
        <section className="bg-dhaka-pattern relative bg-repeat">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="relative z-10 flex flex-col gap-6">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-bold text-yellow-700 dark:text-yellow-400">
                            <span className="size-2 animate-pulse rounded-full bg-secondary"></span>
                            New Collection: Dashain Special
                        </div>
                        <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-text-main md:text-5xl lg:text-6xl dark:text-white">
                            Discover Authentic{' '}
                            <span className="text-primary">Handicrafts</span>{' '}
                            from Across Nepal
                        </h1>
                        <p className="max-w-lg text-lg leading-relaxed text-text-muted dark:text-gray-300">
                            Hand-knit, hand-carved, and hand-painted by local
                            artisans. Support sustainable livelihoods and bring
                            a piece of the Himalayas into your home.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="flex transform items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-light">
                                Shop All Products
                                <span className="material-symbols-outlined text-sm">
                                    arrow_forward
                                </span>
                            </button>
                            <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-8 py-3.5 font-bold text-text-main transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                                <span className="material-symbols-outlined text-primary">
                                    play_circle
                                </span>
                                Artisan Stories
                            </button>
                        </div>
                        <div className="mt-8 flex items-center gap-4 border-t border-gray-200 pt-8 dark:border-white/10">
                            <div className="flex -space-x-3">
                                <img
                                    alt="User avatar"
                                    className="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-surface-dark"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXqgjekOelvnsrsm5pQsfOYAWKl-fnPc_Zo-clY9qem5Fhn-kNbU3Zc2_EvLV4r-UL2FEbx1esPAgSgvZtrskUIHRyRQvX3dKqG82loGxawmbnMS85ygbNL9TY_1Ui8zBW7S6Oip9mZaXdOXIqKaWZBIpBogKOV8nSXUZVZ08kMr1lBXyEFWSHJcxnOfqnnxNqcbhxSKADXC9RZKfVwFqnA8QkkXZeHNkbKMYKWRldzpuzky1atT2-kYE7UfrmwlMKr9hbFZ8J-w"
                                />
                                <img
                                    alt="User avatar"
                                    className="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-surface-dark"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDByDfN4-GAJxPC7zrQDaCjkSAltOkQJ4D0mUnY0f-5Kppg50hzkb3v1Br5TFu7m6aefMfGwBtJk6LxBp1rFzCYgdNDI4FMlJJTRXTGJFXaZTn7b8Av3uZx2i1nj-KpwjpgYnJsWYeB6QONwOjJVaQJdRB2VNXxNh6roZ2VjRIsTEsKzhPLpVHkiMHSpvlhtjuzCJ7r14xVVpRLh-0hqKxvmCrjV5S8Gpq3DbBZM4dxMOrAq-jAmLVnOsVKUarxnWdm6SC9YXNjWA"
                                />
                                <img
                                    alt="User avatar"
                                    className="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-surface-dark"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9c-OIEinmsNqNRP8uoZcWaT6obB-3Ralbbt6vMcHoB8fqfI-5znJSn5jnZ0Slj7BIl7CBUe0QfY48lD5DTMsN2x9Jit6jwB1ibmJF3rwsaijQK9sob084zz3RAWGodR7SAKT0sr9Q-18TTfIh15wMiloirzkAal7XyZJr63pA8VZW-Ldz-67HUDoqOyExJyybP3qdnR-wfWknPePjN66iRNmtVGyqGAACG_gx_QnUcU2Xck3qqZof6HpQYWNvV2rDyLzM6cWCcA"
                                />
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs font-bold text-text-muted dark:border-surface-dark">
                                    +2k
                                </div>
                            </div>
                            <div className="text-sm font-medium text-text-muted dark:text-gray-400">
                                <span className="font-bold text-primary">
                                    500+
                                </span>{' '}
                                artisans supported
                            </div>
                        </div>
                    </div>
                    <div className="relative flex w-full items-center justify-center lg:h-[600px]">
                        <div className="absolute inset-0 translate-x-10 translate-y-10 transform rounded-full bg-secondary/10 blur-3xl filter"></div>
                        <div className="relative h-full w-full rotate-2 transform overflow-hidden rounded-2xl border-4 border-white shadow-2xl transition-transform duration-500 hover:rotate-0 dark:border-surface-dark">
                            <img
                                alt="Artisan carving wood"
                                className="h-full w-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8PknMLsPPBz1DWuN04XjQ18x0wy5hMWa-fV6P_cQY9iUDZj1_l0nt2PNB9-XtnRtNSmyZ_-2AY-np5cOTGM26U_tg5a2zxuUXUHCIoQRxV_KEb64uuiJ9aj4x0ecsSwou4J-V7lSLc1s_2OaZ4n04Y4R7s1AyeK-9RPhaBb5NzoazMvla1NhEGvsJD90ri9Hhw1gyqHAQgRkp-mTMxow0v58qEqL0sXcCaEQ4xolZRu8Z_FM6K38LUQlKmMoj9i3jfBeEgc8Kbw"
                            />
                            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                <p className="mb-1 font-medium text-white/90">
                                    Featured Artisan
                                </p>
                                <h3 className="text-xl font-bold text-white">
                                    Master Carver: Ram Bahadur
                                </h3>
                                <p className="text-sm text-white/70">
                                    Lalitpur, Nepal
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
