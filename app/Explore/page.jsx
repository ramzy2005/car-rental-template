"use client";
import Carcard from "../../components/Carcard";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationNext,
	PaginationLink,
} from "@/components/ui/pagination";
import { useState } from "react";

// Add a "discount" property to some cars for the badge
const cars = [
	{
		brand: "Hyundai",
		image: "/car1.jpg",
		price: "100,000",
		oldPrice: "200,000",
		rating: 4.5,
		discount: "50% OFF",
	},
	{
		brand: "BMW",
		image:
			"https://cdn.motor1.com/images/mgl/jlwrMo/s1/novo-bmw-serie-3-2027---projecao.webp",
		price: "20,000",
		oldPrice: "24,900",
		rating: 6.5,
		badge: "New",
	},
	{
		brand: "Chevrolet",
		image:
			"https://hips.hearstapps.com/hmg-prod/images/2024-chevrolet-blazer-001-66744e0f35908.jpg?crop=0.694xw:0.521xh;0.128xw,0.340xh&resize=1200:*",
		price: "500,000",
		oldPrice: "700,500",
		rating: 7.5,
		discount: "29% OFF",
	},
	{
		brand: "Mazda",
		image:
			"https://media.ed.edmunds-media.com/mazda/cx-5/2025/oem/2025_mazda_cx-5_4dr-suv_25-carbon-turbo_fq_oem_1_1600.jpg",
		price: "60,0000",
		oldPrice: "100,000",
		rating: 9.5,
		badge: "New",
	},
	{
		brand: "Toyota",
		image:
			"data:image/jpeg;base64,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",
		price: "30,000",
		oldPrice: "35,000",
		rating: 8.2,
		discount: "14% OFF",
	},
	{
		brand: "Ford",
		image:
			"https://www.ford.com.ph/content/dam/Ford/ph/home/tabs/raptor-banner.webp",
		price: "45,000",
		oldPrice: "50,000",
		rating: 8.8,
		badge: "New",
	},
	{
		brand: "Honda",
		image:
			"https://cdn.honda.co.za/main-03/general/homepage/Honda_HomePage_Tiles_Cars.webp",
		price: "27,000",
		oldPrice: "32,000",
		rating: 7.9,
		discount: "16% OFF",
	},
	{
		brand: "Mercedes",
		image:
			"https://cdn.motor1.com/images/mgl/KbnBBG/s1/mercedes-benz-a-klasse-2023.webp",
		price: "60,000",
		oldPrice: "70,000",
		rating: 9.1,
		badge: "New",
	},
	{
		brand: "Kia",
		image:
			"https://img.sm360.ca/images//article/groupe-ford-st-basile/129956/file/p13-b3-3-motor1718821249025.jpg",
		price: "25,000",
		oldPrice: "28,000",
		rating: 7.2,
		discount: "11% OFF",
	},
	{
		brand: "Audi",
		image:
			"https://www.thedrive.com/wp-content/uploads/2025/01/e-RS-6-exterior-prime-IMG_9808.jpg?quality=85",
		price: "55,000",
		oldPrice: "60,000",
		rating: 8.5,
		badge: "New",
	},
	{
		brand: "Volkswagen",
		image:
			"https://im.qccdn.fr/node/actualite-volkswagen-id-5-premieres-impressions-101668/thumbnail_800x480px-138542.jpg",
		price: "23,000",
		oldPrice: "27,000",
		rating: 7.7,
		discount: "15% OFF",
	},
	{
		brand: "Nissan",
		image:
			"https://media.autoexpress.co.uk/image/private/s--ZNJzcLCS--/f_auto,t_primary-image-mobile@1/v1732538880/autoexpress/2024/11/Nissan%20X-Trail%20N-Trek%20e-Power%20e-4ORCE-8.jpg",
		price: "21,000",
		oldPrice: "25,000",
		rating: 7.4,
		badge: "New",
	},
	{
		brand: "Subaru",
		image:
			"https://di-uploads-pod47.dealerinspire.com/hellosubaruofvalencia/uploads/2025/05/25_FOR_gallery_ext_01.jpg",
		price: "26,000",
		oldPrice: "30,000",
		rating: 7.8,
		discount: "13% OFF",
	},
	{
		brand: "Peugeot",
		image:
			"https://businessplus.ie/wp-content/uploads/2024/07/3008.jpg",
		price: "22,000",
		oldPrice: "26,000",
		rating: 7.1,
		badge: "New",
	},
	{
		brand: "Renault",
		image:
			"https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/1-peugeot-508-front-driving.jpg?itok=tmyBFWIw",
		price: "24,000",
		oldPrice: "28,000",
		rating: 7.3,
		discount: "14% OFF",
	},
	{
		brand: "Fiat",
		image:
			"https://www.kojiauto.hr/wp-content/uploads/2017/04/Fiat-124.jpg",
		price: "19,000",
		oldPrice: "22,000",
		rating: 6.9,
		badge: "New",
	},
	{
		brand: "Jeep",
		image:
			"https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/jeep-wrangler-review-2024-01-cornering-front.jpg",
		price: "35,000",
		oldPrice: "40,000",
		rating: 8.0,
		discount: "12% OFF",
	},
	// --- PAGE 2 ---
	{
		brand: "Volvo",
		image:
			"https://images.app.ridemotive.com/orbfi29sp6y982t3os1o78y7kdcr",
		price: "50,000",
		oldPrice: "55,000",
		rating: 8.6,
		badge: "New",
	},
	{
		brand: "Lexus",
		image:
			"https://media.ed.edmunds-media.com/lexus/ux/2025/oem/2025_lexus_ux_4dr-suv_300h-f-sport-handling_fq_oem_1_600.jpg",
		price: "58,000",
		oldPrice: "63,000",
		rating: 9.0,
		discount: "8% OFF",
	},
	{
		brand: "Porsche",
		image:
			"https://media.ed.edmunds-media.com/porsche/macan/2025/oem/2025_porsche_macan_4dr-suv_4-electric_fq_oem_1_1280.jpg",
		price: "120,000",
		oldPrice: "135,000",
		rating: 9.8,
		badge: "New",
	},
	{
		brand: "Genesis",
		image:
			"https://www.carscoops.com/wp-content/uploads/2021/12/Genesis-GV90-a.jpg",
		price: "65,000",
		oldPrice: "70,000",
		rating: 8.9,
		discount: "7% OFF",
	},
	{
		brand: "Infiniti",
		image:
			"https://www.slashgear.com/img/gallery/the-15-best-infiniti-cars-of-all-time/l-intro-1656097839.jpg",
		price: "48,000",
		oldPrice: "53,000",
		rating: 8.3,
		badge: "New",
	},
	{
		brand: "Opel",
		image:
			"https://www.automobile-magazine.fr/asset/cms/840x394/229818/config/176847/les-commandes-de-lopel-grandland-sont-ouvertes-les-prix-debutent-a-37-000-eur-et-grimpent-jusqua-45-990-eur.jpg",
		price: "18,000",
		oldPrice: "21,000",
		rating: 6.8,
		discount: "14% OFF",
	},
	{
		brand: "Citroen",
		image:
			"https://www.bassettsgroup.co.uk/images/blog/citroen-c5-x-list.jpg",
		price: "20,000",
		oldPrice: "23,000",
		rating: 7.0,
		badge: "New",
	},
	{
		brand: "Suzuki",
		image:
			"https://cdn.motor1.com/images/mgl/YAgGer/s1/4x3/suzuki-jimny-horizon-2024.webp",
		price: "17,000",
		oldPrice: "20,000",
		rating: 6.7,
		discount: "15% OFF",
	},
	{
		brand: "Skoda",
		image:
			"https://images.carexpert.com.au/cms/v1/media/2023-10-skoda-karoq-style-matt-campbell-hero-16x9-1.jpg",
		price: "22,000",
		oldPrice: "25,000",
		rating: 7.2,
		badge: "New",
	},
	{
		brand: "Mini",
		image:
			"https://assets-eu-01.kc-usercontent.com/fb793c58-315a-0196-d3af-7c9c2613d52c/669bb5e3-d969-461d-bfb7-4c083175a277/P90543038_highRes_mini-john-cooper-wor.jpg?w=1280&q=100&auto=format",
		price: "25,000",
		oldPrice: "28,000",
		rating: 7.5,
		discount: "11% OFF",
	},
	{
		brand: "Mitsubishi",
		image:
			"https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/bf180026-8802-540c-b315-d9a0e9350000",
		price: "16,000",
		oldPrice: "19,000",
		rating: 6.5,
		badge: "New",
	},
	{
		brand: "Alfa Romeo",
		image:
			"https://media.ed.edmunds-media.com/alfa-romeo/stelvio/2025/oem/2025_alfa-romeo_stelvio_4dr-suv_tributo-italiano_fq_oem_1_1280.jpg",
		price: "40,000",
		oldPrice: "45,000",
		rating: 8.1,
		discount: "11% OFF",
	},
	{
		brand: "Jaguar",
		image:
			"https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1701951836/autoexpress/2023/12/Jaguar%20XF%20Sportbrake%202024%20drive.jpg",
		price: "80,000",
		oldPrice: "90,000",
		rating: 9.2,
		badge: "New",
	},
	{
		brand: "Land Rover",
		image:
			"https://s.yimg.com/ny/api/res/1.2/27x01dhAtRpdL9P_N1APQw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg-/https://media.zenfs.com/en/autocar_articles_778/febed9c0fac6f7e8f1f8ecdde48d967e",
		price: "85,000",
		oldPrice: "95,000",
		rating: 9.3,
		discount: "11% OFF",
	},
	{
		brand: "Tesla",
		image:
			"https://www.motortrend.com/files/67a2770e2906d20008bad29f/1-2025-tesla-cybertruck-front-view.jpg",
		price: "100,000",
		oldPrice: "110,000",
		rating: 9.7,
		badge: "New",
	},
	{
		brand: "Dacia",
		image:
			"https://www.carscoops.com/wp-content/uploads/2025/02/Dacia-Duster-Extreme-TCe-130-4%C3%974-Redust-Sport-1.jpg",
		price: "15,000",
		oldPrice: "18,000",
		rating: 6.6,
		discount: "17% OFF",
	},
	{
		brand: "Seat",
		image:
			"https://images.prismic.io/carwow/d208d463-ada4-44dc-904d-8676513704f8_Seat+Ateca+2023+exterior+1.jpg",
		price: "21,000",
		oldPrice: "24,000",
		rating: 7.4,
		badge: "New",
	},
];

const PAGE_SIZE = 18;

export default function Page() {
	const [page, setPage] = useState(0);

	const pageCount = Math.ceil(cars.length / PAGE_SIZE);
	const start = page * PAGE_SIZE;
	const end = start + PAGE_SIZE;
	const pagedCars = cars.slice(start, end);

	return (
		<div className="max-w-5xl mx-auto mt-10 pb-10">
			
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{pagedCars.map((car, index) => (
					<Carcard
						key={start + index}
						brand={car.brand}
						image={car.image}
						price={car.price}
						oldPrice={car.oldPrice ? `${car.oldPrice} ` : undefined}
						rating={car.rating}
						isFavorite={true}
						badge={car.discount ? car.discount : car.badge}
					/>
				))}
			</div>
			<Pagination className="mt-16 flex justify-center cursor-pointer">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							onClick={() => setPage((p) => Math.max(0, p - 1))}
							disabled={page === 0}
							className={
								page === 0 ? "pointer-events-none  opacity-50" : ""
							}
						/>
					</PaginationItem>
					{[...Array(pageCount)].map((_, i) => (
						<PaginationItem key={i}>
							<PaginationLink
								isActive={i === page}
								onClick={() => setPage(i)}
								className={i === page ? "bg-primary text-white" : ""}
							>
								{i + 1}
							</PaginationLink>
						</PaginationItem>
					))}
					<PaginationItem>
						<PaginationNext
							onClick={() => setPage((p) => (end < cars.length ? p + 1 : p))}
							disabled={end >= cars.length}
							className={
								end >= cars.length ? "pointer-events-none opacity-50" : ""
							}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}
