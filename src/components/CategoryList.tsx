import CategoryLink from "./CategoryLink";

interface ICategory {
    id: string,
    icon: string,
    slug: string,
    nameBn: string
}

const CategoryList = async () => {
    "use cache";

    const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/categories"
    );

    const data: ICategory[] = await res.json();

    return (
          <>
          <div className="flex gap-8 container mx-auto py-2 mt-1">
                {data.map(da => (
                    <CategoryLink
                        key={da.id}
                        slug={da.slug}
                        icon={da.icon}
                        nameBn={da.nameBn}
                    />
                ))}
            </div>
          
          </>
)};

export default CategoryList;