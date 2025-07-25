import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Carcard from "./Carcard";
import { Button } from "./ui/button";
import { LoaderCircle } from "lucide-react";

const cars = [
	{
		brand: "hyundai",
		image: "/car1.jpg",
		price: "100,000",
		oldPrice: "200,000",
		rating: 4.5,
		badge: "Save 50%",
		isFavorite: true,
	},
	{
		brand: "BMW",
		image: "https://cdn.motor1.com/images/mgl/jlwrMo/s1/novo-bmw-serie-3-2027---projecao.webp",
		price: "20,000",
		oldPrice: "24,900",
		rating: 6.5,
		badge: "Save 9%",
		isFavorite: true,
	},
	{
		brand: "chevrolet",
		image: "https://hips.hearstapps.com/hmg-prod/images/2024-chevrolet-blazer-001-66744e0f35908.jpg?crop=0.694xw:0.521xh;0.128xw,0.340xh&resize=1200:*",
		price: "500,000",
		oldPrice: "700,500",
		rating: 7.5,
		badge: "Save 25%",
		isFavorite: true,
	},
	{
		brand: "mazda",
		image: "https://media.ed.edmunds-media.com/mazda/cx-5/2025/oem/2025_mazda_cx-5_4dr-suv_25-carbon-turbo_fq_oem_1_1600.jpg",
		price: "60,0000",
		oldPrice: "100,000",
		rating: 9.5,
		badge: "Save 30%",
		isFavorite: true,
	},
];

export default function Exprole() {
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only runs on client
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleExploreClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/Explore";
    }, 1200);
  };

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.8, ease: "linear" }}
			className="mt-20 md:mt-0"
		>
			<div className="text-center mb-8">
				<h2 className="text-5xl mb-4">Explore Your Drive</h2>
				<p className="text-gray-600 mb-6">
					Uncover a world of vehicles tailored to your lifestyle. Whether you're
					seeking luxury, performance, or utility <br /> find the perfect car to
					match your next journey.
				</p>
			</div>
			<div className="car-grid gap-6 justify-items-center flex-wrap">
				{cars.map((car, idx) =>
					isMobile ? (
						<div key={car.brand} className="w-full flex justify-center">
							<Carcard {...car} />
						</div>
					) : (
						<motion.div
							key={car.brand}
							initial={{
								opacity: 0,
								x: idx < 2 ? -60 : 60,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: false, amount: 0.3 }}
							transition={{
								duration: 0.7,
								ease: [0.22, 1, 0.36, 1],
								delay: idx * 0.12,
							}}
							className="w-full flex justify-center"
						>
							<Carcard {...car} />
						</motion.div>
					)
				)}
			</div>

			<div className="flex justify-center rounded-4xl">
				{!loading && (
					<span className="relative top-20 left-36 flex size-3">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#87A96B] opacity-75"></span>
						<span className="relative inline-flex size-3 rounded-full bg-[#7a9b5f]"></span>
					</span>
				)}
				<Button
          onClick={handleExploreClick}
          className="w-auto mt-16 py-5 px-40 flex items-center gap-2 cursor-pointer"
          disabled={loading}
          variant="link"
        >
          {loading ? (
            <>
              <LoaderCircle className="animate-spin w-5 h-5" />
              Now ..
            </>
          ) : (
            "Exprole More Cars"
          )}
        </Button>
			</div>
		</motion.div>
	)
}
