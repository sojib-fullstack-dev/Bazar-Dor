import { Button } from "@heroui/react";
import Image from "next/image";
import bannerImag from "@/assect/bazar-hero.png"

const Banner = () => {
    // const date = new Date().toLocaleDateString("bn-BD", {
    //     dateStyle: "full",
    // });
    return (
    <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 rounded-3xl px-6 py-5 md:px-10 border border-gray-200 bg-white shadow-sm">
            
            {/* Left Content */}
            <div className="space-y-4 w-full lg:w-1/2">
                {/* <p className="bg-green-700 text-white w-60 p-2 rounded-2xl mb-5 text-center">{date}</p> */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-950 leading-tight">
                    আজকের বাজারের দাম এক নজরে
                </h1>
                <h2 className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন- সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                </h2>
                <div>
                    <Button className='bg-green-600 hover:bg-green-700 text-white'>সব পণ্য দেখুন</Button>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                    className="w-full max-w-sm lg:max-w-md h-auto object-contain"
                    width={600}
                    height={600}
                    src={bannerImag}
                    alt="banner"
                    priority
                />
            </div>
            
        </div>
    </div>
    );
};

export default Banner;