import DetailsPage from "@/components/DetailsPage";

const ProductPage = async ({ params }: { params: Promise<{ productId: string }> }) => {
    const { productId } = await params;
    
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productId}`);

    if (!res.ok) {
        throw new Error("Product data fetch করা যায়নি");
    }

    const result = await res.json();
    console.log('API Response:', result);

    const product = result.data || result;

    return (
        <div>
            <DetailsPage product={product} />
        </div>
    );
};

export default ProductPage;