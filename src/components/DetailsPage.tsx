import Link from "next/link";
 
export interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
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
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: IMarket[];
}

const DetailsPage = ({ product }: { product: IProduct }) => {


    const priceDiff = product.today - product.yesterday;


    const lowestMarket = product.markets?.reduce((minObj, curr) => curr.min < minObj.min ? curr : minObj, product.markets[0]);
    const highestMarket = product.markets?.reduce((maxObj, curr) => curr.max > maxObj.max ? curr : maxObj, product.markets[0]);

    const lowestPrice = lowestMarket ? lowestMarket.min : product.today;
    const highestPrice = highestMarket ? highestMarket.max : product.today;
    

    const average = Math.round(
        product.markets?.reduce((total, m) => total + (m.min + m.max) / 2, 0) / (product.markets?.length || 1)
    );

    return (
        <div className="container mx-auto mt-7 space-y-6 pb-12">
            {/* TOP Header Section */}
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4">
                    <span className="text-4xl p-3 bg-gray-50 rounded-2xl">{product.image}</span>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{product.nameBn}</h1>
                        <p className="text-sm text-gray-500 mt-0.5">প্রতি {product.unit} · {product.categoryNameBn}</p>
                        <p className="text-xs text-gray-400 mt-1">
                            গতকালের তুলনায় আজ{" "}
                            <span className={priceDiff >= 0 ? "text-red-600 font-medium" : "text-green-600 font-medium"}>
                                দাম {priceDiff >= 0 ? "বেড়েছে" : "কমেছে"} {Math.abs(priceDiff)} টাকা
                            </span>
                        </p>
                    </div>
                </div>

                <div className="text-right bg-gray-50 px-5 py-3 rounded-xl border border-gray-100">
                    <p className="text-xs text-gray-500">আজকের দাম</p>
                    <p className="text-2xl font-extrabold text-gray-900 mt-0.5">
                        {product.today} <span className="text-sm font-normal text-gray-600">টাকা / {product.unit}</span>
                    </p>
                    <p
                        className={`mt-1 inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md ${
                            product.change.dir === "up"
                                ? "text-red-600 bg-red-50"
                                : product.change.dir === "down"
                                ? "text-green-600 bg-green-50"
                                : "text-gray-600 bg-gray-100"
                        }`}
                    >
                        {product.change.dir === "up" ? "▲" : product.change.dir === "down" ? "▼" : "•"}{" "}
                        {Math.abs(product.change.pct)}%
                    </p>
                </div>
            </div>

            {/* Market Summary */}
            <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-bold text-gray-800">
                    দামের সারসংক্ষেপ
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-gray-200 p-4 bg-gray-50/50">
                        <p className="text-xs text-gray-500 font-medium">সর্বনিম্ন দাম</p>
                        <p className="mt-1 text-2xl font-bold text-green-600">
                            ৳{lowestPrice} <span className="text-xs font-normal text-gray-600">টাকা</span>
                        </p>
                        <p className="mt-2 text-xs text-gray-400">
                            সবচেয়ে কম {lowestMarket ? `${lowestMarket.market} বাজারে` : ""}
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 p-4 bg-gray-50/50">
                        <p className="text-xs text-gray-500 font-medium">সর্বোচ্চ দাম</p>
                        <p className="mt-1 text-2xl font-bold text-red-600">
                            ৳{highestPrice} <span className="text-xs font-normal text-gray-600">টাকা</span>
                        </p>
                        <p className="mt-2 text-xs text-gray-400">
                            সবচেয়ে বেশি {highestMarket ? `${highestMarket.market} বাজারে` : ""}
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 p-4 bg-gray-50/50">
                        <p className="text-xs text-gray-500 font-medium">গড় দাম</p>
                        <p className="mt-1 text-2xl font-bold text-gray-900">
                            ৳{isNaN(average) ? product.today : average} <span className="text-xs font-normal text-gray-600">টাকা</span>
                        </p>
                        <p className="mt-2 text-xs text-gray-400">
                            প্রতি {product.unit}-এর হিসাব
                        </p>
                    </div>
                </div>
            </section>

            {/* Market Table / Price Comparison */}
            <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-bold text-gray-800">
                    বাজারভিত্তিক আজকের দাম
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[650px] text-left text-sm">
                        <thead>
                            <tr className="border-b bg-gray-50 text-gray-600">
                                <th className="px-4 py-3 font-semibold">বাজার</th>
                                <th className="px-4 py-3 font-semibold">বিভাগ</th>
                                <th className="px-4 py-3 font-semibold">সর্বনিম্ন</th>
                                <th className="px-4 py-3 font-semibold">সর্বোচ্চ</th>
                                <th className="px-4 py-3 font-semibold text-right">গড়</th>
                            </tr>
                        </thead>

                        <tbody>
                            {product.markets?.map((item, index) => {
                                const avgPrice = Math.round((item.min + item.max) / 2);
                                return (
                                    <tr
                                        key={index}
                                        className={`border-b last:border-0 hover:bg-gray-50 transition-colors ${
                                            index % 2 === 0 ? "bg-[#f8faf8]" : "bg-white"
                                        }`}
                                    >
                                        <td className="px-4 py-3.5 text-gray-800 font-medium">
                                            {item.market}
                                        </td>
                                        <td className="px-4 py-3.5 text-gray-600">
                                            {item.division}
                                        </td>
                                        <td className="px-4 py-3.5 text-gray-700">
                                            {item.min} টাকা
                                        </td>
                                        <td className="px-4 py-3.5 text-gray-700">
                                            {item.max} টাকা
                                        </td>
                                        <td className="px-4 py-3.5 text-right font-semibold text-gray-900">
                                            {avgPrice} টাকা
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default DetailsPage;