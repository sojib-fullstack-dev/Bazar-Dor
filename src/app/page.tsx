import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

interface IChange {
  dir: "up" | "down";
  pct: number;
}

export interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: IChange;
}

export default async function Home() {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
  const data: IProduct[] = await res.json();
  const newProducts: IProduct[] = data.filter(da => da.change?.dir === "up");
  const downProducts: IProduct[] = data.filter(down => down.change?.dir === "down");
if (!res.ok) {
    throw new Error(`API error! status: ${res.status}`);
  }
  return (
    <div className="bg-[#F0F5F0] py-8">
      <div className="container mx-auto px-4 my-10">
        <Banner />
        
        {/* আজ দাম বেড়েছে */}
        <div className="mt-10">
          <h2 className="text-2xl font-extrabold flex gap-2 items-center text-gray-900">
            <span className="text-red-600">▲</span> আজ দাম বেড়েছে
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
            {newProducts.slice(0, 6).map(product => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* আজ দাম কমেছে */}
        <div className="mt-5">
          <h2 className="text-2xl font-extrabold flex gap-2 items-center text-gray-900">
            <span className="text-green-600">▼</span> আজ দাম কমেছে
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {downProducts.slice(0, 6).map(product => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* সব পণ্য */}
          <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-gray-900">সব পণ্য</h2>
            <p className="text-md text-gray-600 mb-4">মোট {data.length}টি পণ্য দেখানো হচ্ছে</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map(product => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}