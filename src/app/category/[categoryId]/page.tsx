import SortableProducts from "@/components/SortableProducts";

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

const CategoryDetailsPages = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
    const { categoryId } = await params

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`)
    const products: IProduct[] = await res.json()

    return (
        <div className="container mx-auto mt-5">

            {/* Header */}
            <div className="flex gap-2 border border-gray-300 p-4 rounded-2xl bg-white mb-6">
                <h2 className="text-4xl">{products[0]?.image}</h2>
                <div>
                    <p className="font-extrabold text-xl">{products[0]?.categoryNameBn}</p>
                    <p className="text-gray-400">{products.length} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>

            {/* Sort + Products */}
            <SortableProducts products={products} />

        </div>
    );
};

export default CategoryDetailsPages;