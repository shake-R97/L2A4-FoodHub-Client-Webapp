"use client"
import { Clock, MapPin, ShoppingBag, Star } from "lucide-react";
import CartDrawer from "./cart";
import { cn } from "@/lib/utils";
import FoodCard from "./foodCard";
import Image from "next/image";
import { CartItem, FoodItem, RestaurantProfileProps } from "@/components/Types/api";
import { useCallback, useState } from "react";

export default function RestaurantProfile({
  restaurant,
  meal,
  onFoodCardClick,
}: RestaurantProfileProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
 
  const cartCount = cartItems.reduce((s, i) => s + i.quantity, 0);
 
  const addToCart = useCallback((meal: FoodItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === meal.id);
      if (existing) {
        return prev.map((i) =>
          i.id === meal.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...meal, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);
 
  const increase = useCallback((id: number) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  }, []);
 
  const decrease = useCallback((id: number) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
      )
    );
  }, []);
 
  const remove = useCallback((id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }, []);
 
  const handleFoodClick = useCallback(
    (meal: FoodItem) => {
      onFoodCardClick?.(meal);
    },
    [onFoodCardClick]
  );
 
  return (
    <>
 
      <div className="min-h-screen bg-neutral-50 dark:bg-[#181e20]">
        {/* ── Cover Photo ────────────────────────────────────────────────── */}
        <div className="relative h-72 w-full overflow-hidden bg-neutral-200 md:h-88">
          {/* {restaurant.coverImage ? (
            <Image
            //   src={""}
              alt={`${restaurant.businessName} cover`}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-orange-100 to-amber-50" />
          )} */}
          {/* Gradient overlay for readability */}
          
        </div>
 
        {/* ── Profile Row ─────────────────────────────────────────────────── */}
        <div className="mx-auto max-w-4xl lg:max-w-9/12 px-4">
          <div className=" mt-8 flex items-end gap-4 pb-4">
            {/* Avatar / Logo */}
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[#3aad65] shadow-lg bg-white">
              {/* {restaurant.logo ? (
                <Image
                  src={restaurant.logo}
                  alt={`${restaurant.businessName} logo`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-orange-50 text-3xl font-bold text-orange-400"
                     style={{ fontFamily: "'Playfair Display', serif" }}>
                  {restaurant.businessName?.charAt(0)}
                </div>
              )} */}
            </div>
 
            {/* Name + Quick Info */}
            <div className="pb-1">
              <h1
                className="text-2xl font-bold text-[#3aad65] drop-shadow-md md:text-3xl"
              >
                {restaurant.businessName}
              </h1>
              {restaurant.cuisineType && (
                <span className="inline-block mt-0.5 rounded-full bg-[#3aad65] px-2.5 py-0.5 text-xs font-semibold text-white">
                  {restaurant.cuisineType}
                </span>
              )}
            </div>
          </div>
 
          {/* ── Info Bar ──────────────────────────────────────────────────── */}
          <div className="mb-6 flex flex-wrap items-center gap-4 rounded-2xl border border-[#3aad65] dark:border-[#273036] bg-white dark:bg-[#1A1E1F] px-5 py-4 shadow-sm">
            {restaurant.address && (
              <div className="flex items-center gap-1.5 text-sm text-[#b0b0b0]">
                <MapPin className="h-4 w-4 text-[#3aad65] shrink-0" />
                <span className="line-clamp-1">{restaurant.address}</span>
              </div>
            )}
            {restaurant.rating !== undefined && (
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#b0b0b0]">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>{restaurant.rating.toFixed(1)}</span>
                {restaurant.reviewCount && (
                  <span className="font-normal text-[#b0b0b0]">
                    ({restaurant.reviewCount.toLocaleString()} reviews)
                  </span>
                )}
              </div>
            )}
            {restaurant.deliveryTime && (
              <div className="flex items-center gap-1.5 text-sm text-[#b0b0b0]">
                <Clock className="h-4 w-4 text-[#3aad65]" />
                <span>{restaurant.deliveryTime}</span>
              </div>
            )}
          </div>
 
          {/* ── Food Grid ─────────────────────────────────────────────────── */}
          <h2
            className="mb-4 text-xl font-bold text-[#3aad65]"
            
          >
            Menu
          </h2>
 
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pb-24">
            {meal.map((meal) => (
              <FoodCard
                key={meal.id}
                meal={meal}
                // onCardClick={handleFoodClick}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
 
        {/* ── Floating Cart Button ───────────────────────────────────────── */}
        <button
          onClick={() => setIsCartOpen(true)}
          className={cn(
            "fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full shadow-lg",
            "bg-[#3aad65] px-5 py-3 text-white font-semibold transition-all duration-200",
            "hover:bg-green-800 hover:shadow-xl active:scale-95"
          )}
          aria-label="Open cart"
        >
          <ShoppingBag className="h-5 w-5" />
          {cartCount > 0 ? (
            <>
              <span>Cart</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#3aad65]">
                {cartCount}
              </span>
            </>
          ) : (
            <span>Cart</span>
          )}
        </button>
 
        {/* ── Cart Drawer ───────────────────────────────────────────────── */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onIncrease={increase}
          onDecrease={decrease}
          onRemove={remove}
        />
      </div>
    </>
  );
}