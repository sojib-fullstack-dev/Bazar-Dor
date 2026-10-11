"use client"
import { useState } from "react"
import ProductCard from "@/components/ProductCard"

interface IProduct {
    id: number;
    image: string;
    nameBn: string;
    unit: string;
    today: number;
    categoryNameBn: string;
    change: {
        dir: "up" | "down" | "no-change";
        pct: number;
    };
    categoryIcon?: string;
}

const SortableProducts = ({ products }: { products: IProduct[] }) => {
    const [sort, setSort] = useState("default")

    const sorted = [...products].sort((a, b) => {
        if (sort === "low") return a.today - b.today
        if (sort === "high") return b.today - a.today
        return 0
    })

    return (
        <div>
            {/* Sort Dropdown */}
            <div className="flex justify-between items-center mb-4">
                <p className="font-semibold text-gray-500">
                    মোট {products.length} টি পণ্য দেখানো হচ্ছে
                </p>
                <div className="flex items-center gap-2">
                    <p className="text-gray-500 text-sm">সাজান:</p>
                    <select
                        onChange={(e) => setSort(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm cursor-pointer focus:outline-none focus:border-green-500"
                    >
                        <option value="default">ডিফল্ট</option>
                        <option value="low">দাম: কম থেকে বেশি</option>
                        <option value="high">দাম: বেশি থেকে কম</option>
                    </select>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {sorted.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default SortableProducts