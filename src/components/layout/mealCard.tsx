import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Meal } from "../Types/api"
import Link from "next/link"
import { Bike, BookText, CircleCheck, CircleDollarSign, CircleX, Star, Timer } from "lucide-react"
import FoodModal from "./foodModal"
import { Dialog, DialogTrigger } from "../ui/dialog"

export function MealCard({ meal }: { meal: Meal }) {
    return (
        // main meal card
        <Card className="relative w-full pt-0 rounded-md shadow-lg overflow-hidden">
            <div className="absolute inset-0 z-30 aspect-video " />
            <Image
                src={meal.image}
                alt={meal.name}
                width={400}
                height={350}
                className="relative z-20 aspect-video w-full object-cover rounded-t-md"
            />
            {meal.isFeatured && (
                <div className="absolute top-3 left-3 z-40">
                    <Badge className="bg-[#3aad65] text-white">Featured</Badge>
                </div>
            )}
            <CardHeader>
                <CardTitle className="text-[16px] md:text-sm lg:text-[18px] text-[#3aad65] truncate">{meal.name}</CardTitle>
                <CardDescription>

                    <div className="flex items-center text-center gap-1 mt-2 ">
                        <BookText className="shrink-0" />
                        <p className="mt-2 text-[14px] line-clamp-1">{meal.description}</p>
                    </div>

                    <div className="flex items-center text-center gap-1 mt-2 ">
                        <Star className="text-yellow-400 shrink-0" />
                        <p className="mt-1 text-sm">{meal.averageRating} Avg-Rating.</p>
                    </div>

                    <div className="flex items-center text-center gap-1 mt-2 ">
                        <CircleDollarSign className="shrink-0" />
                        <p className="mt-1 text-sm">{meal.price} TK.</p>
                    </div>

                    <div className="flex items-center text-center gap-1 mt-2 ">
                        <Timer className="shrink-0" />
                        <p className="mt-1 text-sm">{meal.preparationTime} prep.</p>
                    </div>


                    <div className="flex items-center text-center gap-1 mt-2 ">

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

                </CardDescription>
            </CardHeader>
            <div className="flex items-center justify-between px-4 pb-4 ">
                <div className="flex items-center  gap-1 mt-1.5 min-w-0 ">
                    <Bike className="text-[#3aad65] shrink-0" />
                    <p className="mt-1 text-xs md:text-sm truncate">30 - 40min Delivery.</p>
                </div>

                <div>
                    {/* food detail dialog modal */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="text-white text-[12px] dark:border-[#3aad65] bg-[#3aad65] shrink-0" variant="outline">View</Button>

                        </DialogTrigger>
                        <FoodModal meal={meal} />
                    </Dialog>
                </div>
            </div>
        </Card>
    )
}



