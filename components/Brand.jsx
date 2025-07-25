function Brand() {
  const icons = [
    "./tesla.svg",
    "./rolls-royce-svgrepo-com.svg",
    "./mercedes-benz-svgrepo-com.svg",
    "./volkswagen-svgrepo-com.svg",
    "./bmw-svgrepo-com.svg",
    "./land-rover-svgrepo-com.svg",
    "./mitsubishi-svgrepo-com.svg",
    "./chevrolet-svgrepo-com.svg",
    "./ford.svg",
    "./audi-svgrepo-com.svg",
    "./toyota.webp",
  ];

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (min-width: 768px) {
          .scroll-anim {
            animation: scroll-left 30s linear infinite;
            flex-wrap: nowrap;
          }
        }
        @media (max-width: 767px) {
          .scroll-anim {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>

      <div className="relative overflow-hidden w-full bg-white py-4">
        <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white to-transparent z-10" />
        <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white to-transparent z-10" />

        <div className="flex flex-row gap-10 md:w-max scroll-anim opacity-60">
          {/* Single set on mobile */}
          {icons.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="shrink-0 w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16"
            />
          ))}

          {/* Duplicate only on md+ */}
          <div className="hidden md:flex flex-row gap-10">
            {icons.map((src, i) => (
              <img
                key={"dup-" + i}
                src={src}
                alt=""
                className="shrink-0 w-16 h-16 lg:w-16 lg:h-16"
              />
            ))}
          </div>
        </div>


            <p className="text-center font-semibold mt-7 text-gray-600">Trust us</p>

      </div>
    </>
  );
}

export default Brand;
