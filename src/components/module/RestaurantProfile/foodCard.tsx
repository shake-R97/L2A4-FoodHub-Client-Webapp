"use client"
import FoodModal from "@/components/layout/foodModal"
import { FoodItem } from "@/components/Types/api"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Bike, CircleCheck, CircleDollarSign, CircleX, Plus, ScrollText, Star, Thermometer, Truck } from "lucide-react"
import Image from "next/image"

export default function FoodCard({
  meal,
  onAddToCart,
}: {
  meal: FoodItem
  onAddToCart: (meal: FoodItem) => void
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            "group relative flex items-center gap-4 rounded-2xl border dark:border-[#273048] border-neutral-200",
            "bg-neutral-50 dark:bg-[#1A1E1F] p-3 transition-all duration-300 hover:border-green-200 hover:shadow-lg dark:hover:border-green-800 dark:hover:shadow-lg cursor-pointer"
          )}
        >
          {/* meal Image */}
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-neutral-100">
            <Image
              src={meal.image}
              alt={meal.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Info */}
          <div className="flex flex-1 flex-col gap-1 min-w-0">
            <h3
              className="font-bold text-foreground leading-tight truncate pr-10"
            >
              {meal.name}
            </h3>
            <p className="text-[13px] text-neutral-500 leading-snug line-clamp-2">
              {meal.description}
            </p>
            <div className="flex items-center gap-3 mt-1">
              <span className="flex gap-0.5 items-center text-sm font-bold text-neutral-400">
                <CircleDollarSign className="h-5 w-5 text-[#3aad65]"/>
                {Number(meal.price).toFixed(0)}
              </span>
              <span className="flex items-center gap-1 text-[14px] text-neutral-400">
                <Bike className="h-5 w-5" />
                {Number(meal.deliveryFee)?.toFixed(0)} delivery
              </span>
            </div>
          </div>

          {/* Add to cart button */}
          <button
            className={cn(
              "absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full",
              "bg-[#3aad65] text-white shadow-sm transition-all duration-200",
              "hover:bg-green-900 hover:scale-110 active:scale-95"
            )}
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart(meal)
            }}
            aria-label={`Add ${meal.name} to cart`}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <DialogDescription />

            <div className="absolute inset-0 z-30 aspect-video " />
            <Image
              src={meal.image as string}
              alt={meal.name as string}
              width={400}
              height={350}
              className="relative z-20 aspect-video w-full object-cover rounded-t-md"
            />

          </DialogTitle>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[80vh] overflow-y-auto px-4">

          <h1 className="text-xl font-bold text-foreground">{meal.name}</h1>

          <div className="flex items-center text-center gap-1 mt-2 ">
            <CircleDollarSign className="text-[#3aad65] shrink-0" />
            <p className="mt-1 text-[16px]">{meal.price} TK.</p>
          </div>

          <p className="mt-2 text-sm">{meal.description}</p>

          <div className="flex items-center text-center gap-1 mt-2 ">
            <Star className="text-yellow-400 shrink-0" />
            <p className="mt-1 text-[16px]">{meal.averageRating} Avg-Rating({meal.ratingCount}).</p>
          </div>

          <div className="flex items-center text-center gap-1 mt-2 ">
            <Thermometer className="shrink-0" />
            <p className="mt-1 text-[16px]">{meal.calories} Kcal.</p>
          </div>

          <div className="flex items-center text-center gap-1 mt-3 ">

            {meal.isAvailable === 'TRUE'
              ?
              <> <CircleCheck className="shrink-0 text-[#3aad65]" />
                <Badge variant={"default"} className="mt-1 text-sm rounded-sm  bg-gray-200/80 text-[#3aad65] dark:bg-black">Available</Badge> </>

              :
              <> <CircleX className="shrink-0 text-red-400" />
                <Badge variant={"destructive"} className="mt-0.5 text-sm">Not Available</Badge>
              </>
            }

          </div>

          <div className="mt-3 ">
            <div className="flex items-center gap-1.5">
              <ScrollText className="shrink-0" />
              <h1 className="text-[16px]"> Ingredients: </h1>
            </div>

            <div className="flex flex-wrap gap-1 ">
              {meal.ingredients?.map((ingredient, index) => (
                <Badge variant={"outline"} key={index} className="mt-1 pt-1 text-[12px] rounded-sm text-white bg-[#3aad65]">{ingredient}</Badge>
              ))}
            </div>
          </div>

        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
