
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F0F5F0]">

            {/* Icon */}
            <div className="text-8xl mb-6">🛒</div>

            {/* Text */}
            <div className="text-center space-y-3 mb-8">
                <h1 className="text-6xl font-extrabold text-green-600">৪০৪</h1>
                <h2 className="text-2xl font-bold text-gray-800">পাতাটি পাওয়া যায়নি!</h2>
                <p className="text-gray-600">দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা আর নেই।</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
                <Link href="/">
                    <button className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition duration-200">
                        হোমে ফিরুন
                    </button>
                </Link>
                <Link href="/category/chal">
                    <button className="px-6 py-2.5 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg font-semibold transition duration-200">
                        বাজার দেখুন
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default NotFound;