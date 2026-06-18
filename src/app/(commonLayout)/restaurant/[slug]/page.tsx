import RestaurantProfile from "@/components/module/RestaurantProfile/restaurantProfile";
import { RestaurantService } from "@/services/Restaurant.service";


export default async function RestaurantSingleProfilePage(
    {params}:
    {params: Promise<{slug: string}>}
) {

    const {slug} = await params;

    const {data , error} = await RestaurantService.getSingleRestaurantData(slug)

    if(error){
        console.log(error.message);
        return ;
    }
    

    const restaurant = data.data
    const deliFee = Number(data.data.deliveryFee)
    const restaurantMeals = restaurant.meals.map((meal)=>({
        ...meal, 
        price : Number(meal.price),
        deliveryFee: deliFee
    })) 
    
console.log(restaurantMeals);

  return (
    <div>
        <RestaurantProfile 
         restaurant={{
            businessName: restaurant.businessName,
            coverImage: restaurant.coverImage,
            logo: restaurant.logo,
            address: restaurant.address,
            rating: 4,
            reviewCount: 100,
            deliveryTime: "30 min",
            cuisineType: "Italian"
         }}
         meal={restaurantMeals}
        />
    </div>
  )
}
