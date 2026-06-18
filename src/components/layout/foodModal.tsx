import Image from "next/image"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { CircleCheck, CircleDollarSign, CircleX, ScrollText, ShoppingBag, ShoppingCart, Star, Thermometer } from "lucide-react"
import { Badge } from "../ui/badge"
import { RestaurantChip } from "./restaurantChip"
import { Meal } from "../Types/api"

export default function FoodModal({ meal }: { meal: Partial<Meal> }) {
    return (
        < div >
            <DialogContent className="max-w-sm">

                <div className="max-h-[80vh] overflow-y-auto overflow-x-hidden space-y-5">
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

                        {/* restaurant chip  */}

                        <RestaurantChip
                            name={meal.provider?.businessName}
                            city={meal.provider?.city}
                            logoUrl={meal.provider?.logo}
                            url={`/restaurant/${meal.provider?.slug}`}
                        />

                    </div>
                </div>

                <DialogFooter className="flex items-center sm:justify-between mt-6">

                    <div className="flex items-center justify-center gap-1.5">
                        <Button className="bg-[#3aad65] hover:bg-green-800" ><ShoppingCart size={20}></ShoppingCart> Cart</Button>
                        <Button className="bg-[#3aad65] hover:bg-green-800" ><ShoppingBag size={20}></ShoppingBag> Buy</Button>
                    </div>

                    <DialogClose asChild>
                        <Button variant="outline">Close</Button>
                    </DialogClose>

                </DialogFooter>
            </DialogContent>

        </div >

    )
}
