import { Link } from '@inertiajs/react';

export default function InteractiveMap() {
    return (
        <section className="relative overflow-hidden bg-white py-16 dark:bg-surface-dark">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-text-main md:text-4xl dark:text-white">
                        Explore by Region
                    </h2>
                    <p className="mx-auto max-w-2xl text-text-muted dark:text-gray-400">
                        Click on a province to discover its unique crafts, from
                        the pashminas of the mountains to the pottery of the
                        plains.
                    </p>
                </div>
                <div className="grid items-start gap-8 lg:grid-cols-12">
                    {/* Sidebar List */}
                    <div className="space-y-2 lg:col-span-3">
                        <h3 className="mb-4 px-3 text-sm font-bold tracking-wider text-text-muted uppercase">
                            Provinces
                        </h3>
                        {/* List items active state managed via JS in real app, simulated here */}
                        <button className="group flex w-full items-center justify-between rounded-lg border-l-4 border-primary bg-primary/5 px-4 py-3 text-left font-semibold text-primary transition-all">
                            Bagmati Province
                            <span className="material-symbols-outlined text-sm opacity-0 transition-opacity group-hover:opacity-100">
                                chevron_right
                            </span>
                        </button>
                        <button className="group flex w-full items-center justify-between rounded-lg border-l-4 border-transparent px-4 py-3 text-left font-medium text-text-muted transition-all hover:border-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">
                            Gandaki Province
                            <span className="material-symbols-outlined text-sm opacity-0 transition-opacity group-hover:opacity-100">
                                chevron_right
                            </span>
                        </button>
                        <button className="group flex w-full items-center justify-between rounded-lg border-l-4 border-transparent px-4 py-3 text-left font-medium text-text-muted transition-all hover:border-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">
                            Lumbini Province
                            <span className="material-symbols-outlined text-sm opacity-0 transition-opacity group-hover:opacity-100">
                                chevron_right
                            </span>
                        </button>
                        <button className="group flex w-full items-center justify-between rounded-lg border-l-4 border-transparent px-4 py-3 text-left font-medium text-text-muted transition-all hover:border-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">
                            Karnali Province
                            <span className="material-symbols-outlined text-sm opacity-0 transition-opacity group-hover:opacity-100">
                                chevron_right
                            </span>
                        </button>
                        <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-background-light p-4 text-center dark:border-gray-600 dark:bg-white/5">
                            <span className="material-symbols-outlined mb-2 text-3xl text-primary">
                                location_on
                            </span>
                            <p className="mb-2 text-sm font-medium text-text-main dark:text-white">
                                Bagmati Selected
                            </p>
                            <p className="mb-3 text-xs text-text-muted">
                                Famous for Wood Carving, Metal Statues, and
                                Thangka Paintings.
                            </p>
                            <Link
                                href="/regions/bagmati"
                                className="text-xs font-bold text-primary hover:underline"
                            >
                                View 124 Products
                            </Link>
                        </div>
                    </div>
                    {/* Interactive Map */}
                    <div className="relative flex min-h-[400px] items-center justify-center rounded-2xl bg-background-light p-6 lg:col-span-9 lg:min-h-[500px] lg:p-12 dark:bg-black/20">
                        {/* Simplified SVG Map of Nepal Structure */}
                        <svg
                            className="nepal-map h-auto w-full max-w-4xl drop-shadow-xl"
                            fill="none"
                            viewBox="0 0 800 350"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Abstract representations of provinces for visual mockup */}
                            {/* Sudurpashchim */}
                            <path
                                d="M10,120 Q50,50 120,80 T150,150 T80,220 T10,120 Z"
                                fill="#D4C5C5"
                                stroke="white"
                                strokeWidth="2"
                            >
                                <title>Sudurpashchim Province</title>
                            </path>
                            {/* Karnali */}
                            <path
                                d="M120,80 Q200,20 300,60 T320,160 T200,180 T120,80 Z"
                                fill="#E8DED2"
                                stroke="white"
                                strokeWidth="2"
                            >
                                <title>Karnali Province</title>
                            </path>
                            {/* Lumbini */}
                            <path
                                d="M150,150 Q220,140 280,180 T250,280 T100,250 T150,150 Z"
                                fill="#D4C5C5"
                                stroke="white"
                                strokeWidth="2"
                            >
                                <title>Lumbini Province</title>
                            </path>
                            {/* Gandaki */}
                            <path
                                d="M300,60 Q400,10 480,80 T450,180 T320,160 T300,60 Z"
                                fill="#E8DED2"
                                stroke="white"
                                strokeWidth="2"
                            >
                                <title>Gandaki Province</title>
                            </path>
                            {/* Bagmati (Highlighted) */}
                            <path
                                d="M480,80 Q550,50 600,100 T580,200 T450,180 T480,80 Z"
                                fill="#8a0000"
                                stroke="white"
                                strokeWidth="2"
                                style={{
                                    filter: 'drop-shadow(0 4px 6px rgba(138,0,0,0.3))',
                                    transform: 'translateY(-4px)',
                                }}
                            >
                                <title>Bagmati Province</title>
                            </path>
                            {/* Madhesh */}
                            <path
                                d="M450,180 Q550,180 620,200 T600,280 T400,260 T450,180 Z"
                                fill="#D4C5C5"
                                stroke="white"
                                strokeWidth="2"
                            >
                                <title>Madhesh Province</title>
                            </path>
                            {/* Koshi */}
                            <path
                                d="M600,100 Q700,50 780,120 T750,250 T620,200 T600,100 Z"
                                fill="#E8DED2"
                                stroke="white"
                                strokeWidth="2"
                            >
                                <title>Koshi Province</title>
                            </path>
                            {/* Tooltip indicator for mockup */}
                            <foreignObject
                                height="60"
                                width="160"
                                x="480"
                                y="30"
                            >
                                <div className="animate-bounce rounded border border-gray-100 bg-white p-2 text-center text-xs text-text-main shadow-lg dark:border-gray-700 dark:bg-surface-dark dark:text-white">
                                    <strong>Bagmati</strong>
                                    <br />
                                    Home of Kathmandu
                                </div>
                            </foreignObject>
                        </svg>
                        <div className="absolute right-6 bottom-6 rounded-lg border border-white/20 bg-white/80 p-3 text-xs text-text-muted backdrop-blur-sm dark:bg-black/50">
                            <div className="mb-1 flex items-center gap-2">
                                <span className="size-3 rounded-full bg-[#8a0000]"></span>{' '}
                                Selected
                            </div>
                            <div className="mb-1 flex items-center gap-2">
                                <span className="size-3 rounded-full bg-[#E8DED2]"></span>{' '}
                                Mountains
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="size-3 rounded-full bg-[#D4C5C5]"></span>{' '}
                                Hills/Terai
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
