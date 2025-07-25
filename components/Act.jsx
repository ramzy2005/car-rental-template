import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";

function Act() {
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/Explore";
    }, 1000); // simulate loading for 1.2s
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p md:p-16 gap-8">
      {/* Left: Large title and button */}
      <div className="flex-1 flex flex-col items-end justify-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 w-full text-right">
          Ready to Start Your Journey?
        </h1>
        <Button
          onClick={handleClick}
          className="px-8 py-6 bg-[#76945e] text-white rounded-2xl  text-lg font-semibold shadow hover:bg-[#87A96B] transition flex items-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <>
              <LoaderCircle className="animate-spin w-5 h-5" />
              Now 
            </>
          ) : (
            "Get Started"
          )}
        </Button>
      </div>
      {/* Right: Question  */}
      <div className="mb-2 flex-1 bg-white/60 backdrop-blur-md rounded-3xl p-8 flex items-center justify-center min-h-[180px]">
        <div className="text-base text-gray-800 font-medium text-start">
          <span className="font-bold">Not sure where to start?</span>
          <br /><br />
          <span className="text-gray-600">
            Tell us what you’re looking for and we’ll narrow down the best options based on your lifestyle and budget.
          </span>
          <br />
          <br />
          <span
            className="relative inline-block mt-4 after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#87A96B] after:animate-beat-underline after:mt-2 hover:opacity-80 transition duration-300 cursor-pointer"
          >
            Time to get excited
          </span>
        </div>
      </div>
    </div>
  );
}

export default Act;
