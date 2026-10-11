import React from 'react';

const loading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F0F5F0]">

            {/* Spinner */}
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                <div className="absolute inset-0 rounded-full border-4 border-t-green-500 border-r-green-400 border-b-transparent border-l-transparent animate-spin"></div>
            </div>

            {/* Text */}
            <div className="mt-5 text-center space-y-1">
                <h2 className="font-bold text-lg text-green-600">লোড হচ্ছে...</h2>
                <p className="text-gray-400 text-sm">একটু অপেক্ষা করুন</p>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-green-600 animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>

        </div>
    );
};

export default loading;