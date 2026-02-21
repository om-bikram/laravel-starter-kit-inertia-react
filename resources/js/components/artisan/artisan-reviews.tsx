interface Review {
    id: number;
    name: string;
    location: string;
    avatar: string;
    rating: number;
    text: string;
    verifiedPurchase: string;
}

const reviews: Review[] = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        location: 'London, UK',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHbMLMySCdEXESssQoYlnVxCE1SM5Q1QPnpSldFor8vLNOXBH870F0Bmz5FUjIYA50ERydsjhiRlbq_PrRHtbrYlxA_-apv_wSskRdhsdSbRFX5tjKu_Z1x-4IOGzXNh0l_-MsEdd73YutBGWWUmoLKBgJe-Y7MLY9GqGYl2TblXP-mCJxY8wR1fegkHvfljLLd-9wOyIK-L-mzJ8xOnLuL8K3P5pM5z4utFJqm1SmRz2AnAT966P1X3oziX2Rxz9OUQoVUp3xEg',
        rating: 5,
        text: '"Absolutely stunning craftsmanship. The Buddha statue arrived safely in London within 5 days. The detail on the face is even more beautiful than the photos."',
        verifiedPurchase: 'Shakyamuni Buddha',
    },
    {
        id: 2,
        name: 'Michael Chen',
        location: 'Singapore',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt8I9uqUS_mLBdRb6LBFLLSC_lpUEZvXllUFijiy15QZimyvrscvTQ8Ajg_ph2EZg05gWzVZyueHywHn5x8aKwK2TJljhimVa2RNNod8Cm_4Sw1WlglOI_rwuq32OoJYRHbWfrCrIuvg_nwq5KcddHkbtvCBgBt1OpesYwtOADbq2dkPJI9_fZ77yf7mePZhdE4J_05ziw6U_ULXb0NGC3xjg4yT1VgN5H_F8VFZt12p3ZhEnubL_-xW5bUDuSDNnpVTug3PMjjA',
        rating: 4.5,
        text: '"I bought a singing bowl set. The sound resonance is incredible. It feels very authentic and grounded. Highly recommend Ratna\'s work!"',
        verifiedPurchase: 'Singing Bowl',
    },
];

export function ArtisanReviews() {
    return (
        <section className="mt-8 border-t border-gray-200 py-8 dark:border-gray-800">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Customer Reviews
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#1e1e1e]"
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                                    <img
                                        alt="User avatar"
                                        className="h-full w-full object-cover"
                                        data-alt="Portrait of a female customer"
                                        src={review.avatar}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                                        {review.name}
                                    </h4>
                                    <p className="text-xs text-slate-500">
                                        {review.location}
                                    </p>
                                </div>
                            </div>
                            <div className="flex text-yellow-500">
                                {[...Array(Math.floor(review.rating))].map(
                                    (_, i) => (
                                        <span
                                            key={i}
                                            className="material-symbols-outlined text-[18px]"
                                        >
                                            star
                                        </span>
                                    ),
                                )}
                                {review.rating % 1 !== 0 && (
                                    <span className="material-symbols-outlined text-[18px]">
                                        star_half
                                    </span>
                                )}
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            {review.text}
                        </p>
                        <div className="mt-4 text-xs text-slate-400">
                            Verified Purchase • {review.verifiedPurchase}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
