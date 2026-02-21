export function ProductGallery() {
    return (
        <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
                {/* Main Image */}
                <img
                    alt="Intricate wooden peacock window carving detail"
                    className="h-full w-full object-cover"
                    data-alt="Close up of detailed wood carving texture"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiztWm4O70eB4GPgpuSvVYReHBa97onsXKgMvIcZh3otYLEDzUd9gx7lLqMMW4VAuPOUNsmWkvqchPTfv8TvWB_rwhyNBJYZZgQsjG41V0nXZqa-YHquSqmZ3WbRbjsTxkxYZQyVi54hSbst6D4OBFFuVFTFur9yB3jNA9nkXMb7hQhmVcju_hvFSyuwwqIZgg6xSK3k9zXxoTqQ5X5jEpiGllpSXmtS2ACiYR4TWUNbwe9Sn2kOCRyc9vzfEDncr56JAGcnDo7A"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary shadow-sm backdrop-blur-sm">
                    Authentic Handcraft
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <button className="aspect-square overflow-hidden rounded-lg border-2 border-primary ring-2 ring-primary/20">
                    <img
                        alt="Front view of peacock window"
                        className="h-full w-full object-cover"
                        data-alt="Wooden window carving front view"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRqPE6PaseI5pYj4zwf9m0xKhqW_axINrJnNQvS-h3c8sFQxU1tkaEURu27AYZaW_yIGnqbTzQCO28q4Qvlk6GkZ8LHEDktsy6CU7keBDugiW6JsdaleN9oZ15gN4TpW4rPuLNWIIqagNtHdxeh0ev4mjsrBKgqjGurI-Asb9PT27Ck8P1xznLGtYaCjISTKwtR8FKkDvfPVGH25s3cyySDGUtH22rcSsm3mMirZgrgPZLhChQDX-lyK1uuPvzqrRpu3L630A7NQ"
                    />
                </button>
                <button className="aspect-square overflow-hidden rounded-lg border border-gray-200 transition-colors hover:border-primary">
                    <img
                        alt="Side angle showing depth of carving"
                        className="h-full w-full object-cover"
                        data-alt="Wood texture close up"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK8dCUkJWVMud-uiIJg88Iz4n837hT-2tOWPuardV2Y-RSU_MUCe_emrgRC7azu74xLNmHJRO8QNZbWUtf8NZ5ZD5coGyTLAO96cdv_DOY-O33NZ6zwRa3t5I41tGYHP5yuQ74CxGvzuM7sYYKwuzLoT2kcj3lrhtPUrMu3fTPpJHT5vP6UEAzAQAqX-abmO1vEOX_DA7OO5qg6DCfV1wB3dDUScdgqUZY6LR50UubK8elKhbvVkHmf8V_OPBib-IgwsivBwqirw"
                    />
                </button>
                <button className="aspect-square overflow-hidden rounded-lg border border-gray-200 transition-colors hover:border-primary">
                    <img
                        alt="Detail of the peacock feathers"
                        className="h-full w-full object-cover"
                        data-alt="Close up of wood grain"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw2HmNYaC1QGxbt1qPZk_2WsPlHSPBtXkRYsMhJlsuogl9byIMNXvBGqjyGzSO92G9RVNRD_2rkc_rCEeB-9U1_q-YpFjMB4HvAhZa8857A2rlkANMybV6gjlXfQ6UGn5MapVdx3qFK7pNn0VrwnCQBZDMf3EPgNUEpfeeClQL4qEFEGXMWEV_38axJf2cBpaqsJT7rYWI8-BC4psX8bi2iPuy6bqyvGb6fdSSYRc3k3mN-ehJBSU7DfWJHgB0U-geUR2qNLNcqQ"
                    />
                </button>
                <button className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 transition-colors hover:border-primary">
                    <img
                        alt="Window in a traditional setting"
                        className="h-full w-full object-cover opacity-70"
                        data-alt="Traditional nepali architecture background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDctk2G8MUgJp1YPPfcpvmOHxaF_cXPL9WCFR01l9Q2OwO6NvjXSJkLmo6tUStuKOTkZuE2zu03jq4cI8V6wHf7MfNg9JH7ow3ehGgdYtWUrrdmJjbW83O2xjc-Aql3dzI365_8tsclQZ9yI4XBX8QJDuwhzFEjsczDLW4CD_bDFb33Q7x6Nf7fWMPfbgD0WGnjtfZAI8Z53tmd2AiJ_TTW3OSvoRoyKaudgCaiS-uRYUWESBYoM58BMbbaXO7BLgSXDrt-8VaqJw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-lg font-bold text-white">
                        +2
                    </div>
                </button>
            </div>
        </div>
    );
}
