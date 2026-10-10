import ProductCard from "@/components/ProductCard";

interface IProduct {
    id: number;
    nameBn: string;
    unit: string;
    today: number;
    change: {
        dir: "up" | "down" | "no-change";
        pct: number;
    };
    categoryIcon?: string; 
}

const CategoryDetailsPages = async({params}: { params: Promise<{ categoryId: string }>}) => {
      const {categoryId}=await params
       
    const res=await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`)
    const products: IProduct[]=await res.json()
    // console.log(products)
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 container mx-auto mt-5">
            {
                products.map((product)=>(<ProductCard key={product.id} product={product} />))
            }
        </div>
    );
};

export default CategoryDetailsPages;