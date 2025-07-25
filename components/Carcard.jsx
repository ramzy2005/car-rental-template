import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";



function Carcard({ id, brand, image, price, oldPrice, rating, badge, isFavorite }) {
  

  return (
    <div className="flex flex-col w-[300px]">
      {/* Image Section */}
      <div className="h-[220px] w-[300px] bg-gray-200 rounded-lg relative overflow-hidden">
        <img
          src={image}
          alt={`${brand} car`}
          className="w-full h-full object-cover rounded-lg"
        />
        
        <div className="absolute top-3 left-2 flex justify-between w-[90%]">
          {isFavorite && <img src="/fav.svg" alt="Favorite" className="size-6 bg-gray-100 rounded-full p-1" />}
          {badge && <Badge>{badge}</Badge>}
        </div>
      </div>

      {/* Info Section */}
      <div>
        <div className="flex flex-row justify-between mt-3 px-2">
          <Label>{brand}</Label>
          <div className="flex flex-row items-center gap-1">
            <img src="/star.svg" alt="Rating" className="size-4" />
            <Label>{rating}</Label>
          </div>
        </div>

        <div className="flex flex-row mt-1 px-2 justify-between items-center">
          <h2 className="text-lg font-semibold">${price}</h2>
          {oldPrice && (
            <h2 className="text-gray-500 text-lg line-through">
              ${oldPrice} <span className="text-xs font-normal">for 30 w</span>
            </h2>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-3 flex flex-col gap-1 px-2">
        <Button variant="outline" className="border-2 w-full hover:bg-gray-200" >Check details</Button>
        <Button variant="default">Rent Now</Button>
      </div>
    </div>
  );
}

export default Carcard;
