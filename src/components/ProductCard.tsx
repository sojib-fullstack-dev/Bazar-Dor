"use client"
import { useSession } from "@/lib/auth-client";
import Link from "next/link";

interface IProduct {
    id: number;
    image: string;
    nameBn: string;
    unit: string;
    today: number;
    change: {
        dir: "up" | "down" | "no-change";
        pct: number;
    };
    categoryIcon?: string;
}

const ProductCard = ({ product }: { product: IProduct }) => {
    // console.log(product)

    const { data: session } = useSession();
    
    return (
        <Link href={session?.user ? `/product/${product.id}` : `/sign-in?callbackUrl=/product/${product?.id}`}>

            <div className=" bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer">
                {/* Top Section: Icon, Name, Unit */}
                <div className="flex items-start gap-4 ">
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gray-100 text-2xl shrink-0">
                        {product.image}
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 leading-snug">
                            {product.nameBn}
                        </h2>
                        <p className="mt-0.5 text-xs text-gray-500">
                            প্রতি {product.unit}
                        </p>
                    </div>
                </div>

                {/* Bottom Section: Price & Change Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-end justify-between">
                    <div>
                        <p className="text-xs text-gray-400 font-medium">আজকের দাম</p>
                        <p className="text-xl font-extrabold text-gray-900 mt-0.5">
                            {product.today} <span className="text-sm font-normal text-gray-600">টাকা</span>
                        </p>
                    </div>

                    <div>
                        {product?.change?.dir === "up" ? (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-lg">
                                ▲ {product.change.pct}%
                            </span>
                        ) : product?.change?.dir === "down" ? (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                                ▼ {product.change.pct}%
                            </span>
                        ) : (
                            <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">
                                - 0.0%
                            </span>
                        )}
                    </div>
                </div>
            </div>


        </Link>
    );
};

export default ProductCard;
