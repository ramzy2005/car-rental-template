import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function Carcard({ id, brand, image, price, oldPrice, rating, badge, isFavorite }) {
  const [quantity, setQuantity] = useState(1);

const cleanPrice =
  typeof price === "string"
    ? Number(price.replace(/[^0-9.]/g, ""))
    : Number(price);

const total = cleanPrice * Number(quantity);

  const handleDecrease = () => setQuantity((q) => Math.max(1, q - 1));
  const handleIncrease = () => setQuantity((q) => q + 1);

  return (
    <div className="flex flex-col w-[300px]">
      {/* Image Section */}
      <div className="h-[220px] w-[300px] bg-gray-200 rounded-lg relative overflow-hidden group">
        <img
          src={image}
          alt={`${brand} car`}
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-2 flex justify-between w-[90%]">
          {isFavorite && (
            <img
              src="/fav.svg"
              alt="Favorite"
              className="size-6 bg-white rounded-full p-1 shadow-md transition duration-200 hover:scale-110"
            />
          )}
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

      <div className="mt-3 flex flex-col gap-2 px-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="border-2 w-full hover:bg-gray-100 transition">
              Check details
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{brand} Car Details</DialogTitle>
            </DialogHeader>

            <div className="mt-4 space-y-4">
              <img
                src={image}
                alt={brand}
                className="w-full h-[350px] object-cover rounded-md"
              />

              <div className="flex justify-between">
                <span className="text-sm font-medium">Price per unit:</span>
                <span>${price}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" onClick={handleDecrease}>−</Button>
                  <span className="text-md">{quantity}</span>
                  <Button variant="outline" onClick={handleIncrease}>+</Button>
                </div>
              </div>

              <div className="flex justify-between opacity-80">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-xl font-bold">${total}</span>
              </div>

              {/* Buttons side-by-side */}
              <div className="flex gap-4 mt-6">
                <Button className="flex-1" variant="default">
                  Rent Now
                </Button>
                <Button className="flex-1 flex items-center justify-center gap-2" variant="outline">
                  <img src="/cart.svg" alt="Cart" className="w-5 h-5" />
                  Go to Cart
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Button className="w-full">Rent Now</Button>
      </div>
    </div>
  );
}

export default Carcard;
