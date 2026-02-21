export function ArtisanStory() {
    return (
        <div className="mt-20 lg:mt-32">
            <div className="mb-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Meet the Artisan
                </h2>
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            </div>
            <div className="flex flex-col gap-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:p-8 lg:gap-12 dark:border-gray-800 dark:bg-[#1a0b0b]">
                {/* Map */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 md:aspect-auto md:w-1/3">
                    <img
                        alt="Map of Kathmandu Valley highlighting Bhaktapur"
                        className="h-full w-full object-cover opacity-80"
                        data-location="Bhaktapur, Nepal"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc_EsHZINSMUtDbFpt_jzeC4xqeN6TLzW9ZoKCqDFP_OamNgt0iddiu-zL0twKenGv7xXsQrpafnVYBpke_uIloHXQTwVOqCxvd1DGSM7wEPtdNjEleJLhNZikr-T2T77U9JmrcUd2PpTVeUnxjkkK2HZsJG8XwT2VXKvL5crgSABmgFm7TxVJKFJSoME1N2YvX4tH88h3NTrIzxOeq3mry_mNCramEov4zLEnFNVFyBxLXaXeKKsDdVtPTVUg97BwvAeOTcjMgw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                        <div className="mb-1 flex items-center gap-1">
                            <span className="material-symbols-outlined fill-current text-red-500">
                                location_on
                            </span>
                            <span className="text-sm font-bold tracking-wide uppercase">
                                Bhaktapur, Nepal
                            </span>
                        </div>
                        <p className="pl-6 text-xs opacity-90">
                            Region known for Wood Carving
                        </p>
                    </div>
                </div>
                {/* Bio */}
                <div className="flex flex-1 flex-col justify-center">
                    <div className="mb-4 flex items-center gap-4">
                        <img
                            alt="Portrait of artisan Raju Shilpakar"
                            className="size-16 rounded-full object-cover ring-2 ring-primary/20"
                            data-alt="Close up portrait of an elderly man smiling"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa5pFnP1sOGtgWQ_uX-BPOSjRrpKbQqBHcyCOvYMpbS_XL1n2Z_Cg7mgtB_ps6Cp7cmLZ0CcR4AF_U4ht4SxalRirVPbVNNm02VtuBMGvLf8G6MTvFxTE4J2SffUcNH0ILkyN85PiFE_zjHkAaowdT_V5OM-63mITBwQALvPHnDMD6k7Q0sykoGuUsp_tAwTKWpH98nAAgt_aWeN6FYLS2DN-GspFJJvbX3410XxfUYCeRuP_If_93Fw0Wav6T3kQfvDnWdxgA0Q"
                        />
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Raju Shilpakar
                                </h3>
                                <span
                                    className="material-symbols-outlined text-[18px] text-blue-500"
                                    title="Verified Artisan"
                                >
                                    verified
                                </span>
                            </div>
                            <p className="text-sm text-slate-500">
                                Master Woodcarver • 35 Years Experience
                            </p>
                        </div>
                    </div>
                    <blockquote className="mb-6 border-l-4 border-primary/20 py-1 pl-4 text-slate-700 italic dark:text-slate-300">
                        "I learned the art of wood carving from my father, who
                        learned it from his. Every chisel stroke carries the
                        history of our ancestors. When you buy this window, you
                        are taking a piece of our soul with you."
                    </blockquote>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-primary hover:text-primary dark:border-gray-700 dark:text-slate-300">
                            View Artisan Profile
                        </button>
                        <button className="flex items-center gap-2 rounded-lg bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20">
                            <span className="material-symbols-outlined text-[18px]">
                                chat
                            </span>
                            Message Seller
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
