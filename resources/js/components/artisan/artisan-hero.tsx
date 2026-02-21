export function ArtisanHero() {
    return (
        <section className="group relative w-full overflow-hidden rounded-xl shadow-lg">
            {/* Banner Image */}
            <div
                className="h-64 w-full bg-cover bg-center md:h-80"
                data-alt="Traditional metal workshop with tools and warm lighting"
                style={{
                    backgroundImage:
                        "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 60%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuClSxSYN0QlvfTM5Fpx3gf0yUJ2J04sqHPRDQmTPbSJKQ9XBGHX_AbYJr6nK3oLBmiqIopzDNu0ljh7YnJt4RyFjcz22_1UfzzzFHR1CXn188RuG8nG680L8idzGCL39QjahwzFDvM5o8LhfEMmm8xjyd0If4gZjNsAi7xMLRh0hRP20B5j8jk-9rIdIOh58MTNx64IVClLvloutLXusmnU9lkwD06L90nipFh4zR4_hk_oXgfdXmXRDk1PMKtYdGGnzuM7bYQP_Q')",
                }}
            >
                <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary shadow-sm backdrop-blur-sm dark:bg-black/80">
                    <span className="material-symbols-outlined text-[16px]">
                        verified
                    </span>{' '}
                    Verified Artisan
                </div>
            </div>
            {/* Profile Info Overlay */}
            <div className="absolute -bottom-16 left-4 flex w-[calc(100%-2rem)] flex-col items-end gap-4 md:bottom-6 md:left-10 md:w-auto md:flex-row md:items-center">
                <div className="relative">
                    <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-md dark:border-[#230f0f]">
                        <img
                            alt="Portrait of Ratna Shakya"
                            className="h-full w-full object-cover"
                            data-alt="Portrait of an elderly Nepali artisan smiling"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOcRC9N4yIWEh8b0JFUo6MDgztO5Dd6fahRBg-K-iZFvmLn9KWY8W0dwDxsJJLpcQutsQSr2FXQQkkwEzhpsFxrBOuNYli5rkeZQveIByYQ2zDWIDR6ZDSL8dTAn2NfA5nKQSTk0jDBYW-SCeO93_VOAod4fmYy3nKatqQznjE6OMoHrYec7E_gkr1iCZBCpMyuz-v3asGuafYEL18AUzLSg70NmFIsLD8nFbQdxlGNTFrmtwsdWI7vXHFNpojMmhWWUWPkumeuw"
                        />
                    </div>
                    <div
                        className="absolute right-2 bottom-2 h-4 w-4 rounded-full border-2 border-white bg-green-500 dark:border-[#230f0f]"
                        title="Online now"
                    ></div>
                </div>
                <div className="flex-1 pb-2 text-slate-900 drop-shadow-md md:pb-0 md:text-white md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    <h1 className="text-3xl font-bold">Ratna's Metalworks</h1>
                    <div className="mt-1 flex items-center gap-2 text-sm font-medium opacity-90 md:text-base">
                        <span className="material-symbols-outlined text-[18px]">
                            location_on
                        </span>{' '}
                        Patan, Nepal
                        <span className="mx-1">•</span>
                        <span>Member since 2018</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
