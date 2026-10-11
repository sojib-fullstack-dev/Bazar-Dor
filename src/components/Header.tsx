
import Link from "next/link";
import CategoryList from "./CategoryList";

import Navber from "./Navber/Navber";
import { PiShoppingCartLight } from "react-icons/pi";

export interface NavbarProps {
    date: Date;
}

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });
    return (

        <div className="sticky top-0 z-50 bg-white">
            <div className="border-b-1">
                <div className="flex justify-between items-center container mx-auto py-4">
               <Link href="/" className="flex items-center gap-3">
                    <span className="bg-green-500 text-white rounded-xl p-2 shadow-sm">
                        <PiShoppingCartLight size={32} />
                    </span>

                    <div>
                        <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
                            বাজার দর
                        </h2>
                        <p className="text-xs text-gray-500">
                           {date}
                        </p>
                    </div>
                </Link>

                    <Navber />
                </div>
            </div>


            <div className="border-t border-b border-gray-100">
                <CategoryList />
            </div>

        </div>

    );
};

export default Header;