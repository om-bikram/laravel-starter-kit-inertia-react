interface CartItemProps {
    item: {
        id: number;
        name: string;
        store: string;
        price: number;
        priceNpr: string;
        image: string;
        quantity: number;
    };
}

export function CartItem({ item }: CartItemProps) {
    return (
        <div className="flex flex-col gap-6 rounded-xl border border-gray-100 bg-white p-6 shadow-sm sm:flex-row dark:border-white/5 dark:bg-surface-dark">
            <div className="h-32 w-full shrink-0 overflow-hidden rounded-lg border border-gray-100 sm:w-32 dark:border-white/10">
                <img
                    alt={item.name}
                    className="h-full w-full object-cover"
                    src={item.image}
                />
            </div>
            <div className="flex flex-grow flex-col justify-between">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-text-main dark:text-white">
                            {item.name}
                        </h3>
                        <p className="flex items-center gap-1 text-sm text-text-muted">
                            <span className="material-symbols-outlined text-xs">
                                store
                            </span>
                            {item.store}
                        </p>
                    </div>
                    <button className="p-1 text-text-muted transition-colors hover:text-red-600">
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>
                <div className="mt-4 flex items-end justify-between">
                    <div className="flex items-center overflow-hidden rounded-lg border border-gray-200 dark:border-white/10">
                        <button className="bg-gray-50 px-3 py-1 text-text-muted hover:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10">
                            -
                        </button>
                        <span className="border-x border-gray-200 px-4 py-1 text-sm font-bold dark:border-white/10">
                            {item.quantity}
                        </span>
                        <button className="bg-gray-50 px-3 py-1 text-text-muted hover:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10">
                            +
                        </button>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-text-muted">
                            {item.priceNpr}
                        </p>
                        <p className="text-xl font-extrabold text-primary">
                            ${item.price.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
