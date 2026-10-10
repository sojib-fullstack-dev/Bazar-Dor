
import { PiShoppingCartLight } from "react-icons/pi";
import CategoryList from "./CategoryList";
import Link from "next/link";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });
    return (

        <div className="sticky top-0 z-50 bg-white">           
            <div className="container mx-auto flex justify-between items-center px-4 md:px-6 py-3">     
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

           
                <div className="flex items-center gap-2">
                    <Link
                        href="/sign-in"
                        className="px-3 md:px-5 py-2 text-sm md:text-base font-semibold text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-green-500 transition duration-200"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/sign-up"
                        className="px-3 md:px-5 py-2 text-sm md:text-base font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-sm transition duration-200"
                    >
                        সাইন আপ
                    </Link>
                </div>

            </div>

           
            <div className="border-t border-b border-gray-100">
                <CategoryList />
            </div>

        </div>

    );
};

export default Header;