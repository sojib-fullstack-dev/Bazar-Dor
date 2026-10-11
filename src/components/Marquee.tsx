import MarqueeText from "react-marquee-text";

interface IProduct {
    id: string | number;
    nameBn: string;
    image: string;
    today: number;
    change: {
        pct: number;
    };
}

const Marquee = async () => {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const allProducts:IProduct[] = await res.json()

    return (
        <div className=" py-1 group ">
            <MarqueeText
                direction='right'
                duration={10}
                pauseOnHover={true}
            >
                {allProducts.map(all => (
                    <div
                        className="px-4 border-l border-gray-200 py-0 cursor-pointer hover:bg-gray-50 transition"
                        key={all.id}
                    >
                        <div className="flex items-center gap-3 text-sm">
                            <span className="text-lg">{all.image}</span>
                            <span className="font-medium text-gray-700">{all.nameBn}</span>
                            <span className="text-gray-500">{all.today} টাকা/কেজি</span>
                            <span className={`font-semibold text-xs ${all.change.pct > 0 ? 'text-red-500' : 'text-green-500'}`}>
                                {all.change.pct > 0 ? '▲' : '▼'} {Math.abs(all.change.pct)}%
                            </span>
                        </div>
                    </div>
                ))}
            </MarqueeText>
        </div>
    );
};

export default Marquee;