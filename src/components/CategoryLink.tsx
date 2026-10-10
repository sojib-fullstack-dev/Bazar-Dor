"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ICategoryLink {
    slug: string;
    icon: string;
    nameBn: string;
}

const CategoryLink = ({ slug, icon, nameBn }: ICategoryLink) => {
    const pathname = usePathname();

    const isActive = pathname === `/${slug}`;

    return (
        <Link
            href={`/${slug}`}
            className={isActive ? "bg-green-600 font-bold py-1 px-2 rounded" : "text-gray-600"}
        >
            <span>{icon}</span> {nameBn}
        </Link>
    );
};

export default CategoryLink;